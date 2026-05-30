// Vercel serverless function — proxies EcoBot chat.
// Primary: Groq (generous free tier). Fallback: OpenRouter.
// Keys live in GROQ_API_KEY / OPENROUTER_API_KEY env vars — never in the
// frontend bundle.

// Abuse guards. The in-memory limiter only spans a single warm instance, so
// treat it as a cheap first line of defence — pair with Vercel KV / Upstash
// for hard limits that survive cold starts and span instances.
const MAX_MESSAGES = 20;
const MAX_TOTAL_CHARS = 8000;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 15;
const VALID_ROLES = ['system', 'user', 'assistant'];
const rateHits = new Map(); // ip -> number[] of request timestamps

function isRateLimited(ip) {
    const now = Date.now();
    const recent = (rateHits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
    recent.push(now);
    rateHits.set(ip, recent);
    if (rateHits.size > 5000) {
        for (const [key, times] of rateHits) {
            if (times.every((t) => now - t >= RATE_WINDOW_MS)) rateHits.delete(key);
        }
    }
    return recent.length > RATE_MAX;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
        || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(ip)) {
        return res.status(429).json({ error: 'Too many requests. Please slow down. 🌿' });
    }

    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'messages[] required' });
    }
    if (messages.length > MAX_MESSAGES) {
        return res.status(400).json({ error: `Too many messages (max ${MAX_MESSAGES})` });
    }
    // Keep only well-formed {role, content} entries before trusting the input.
    const cleanMessages = messages
        .filter((m) => m && VALID_ROLES.includes(m.role) && typeof m.content === 'string')
        .map((m) => ({ role: m.role, content: m.content }));
    if (cleanMessages.length === 0) {
        return res.status(400).json({ error: 'messages[] must contain {role, content} objects' });
    }
    const totalChars = cleanMessages.reduce((n, m) => n + m.content.length, 0);
    if (totalChars > MAX_TOTAL_CHARS) {
        return res.status(400).json({ error: `Message content too long (max ${MAX_TOTAL_CHARS} characters)` });
    }

    const systemPrompt = {
        role: 'system',
        content: "You are EcoBot, a friendly AI assistant for EcoHub — Qatar's youth climate action platform by EcoAwareness QA. Help young Qataris learn about climate change, Qatar Vision 2030, sustainability, volunteer opportunities, verified volunteer hours, Eco ID climate portfolios, and environmental impact. When users ask what to do next, suggest practical EcoHub actions like browsing opportunities, saving events, building verified hours, contacting local organizers, or creating a climate portfolio. Keep responses concise, friendly, specific to Qatar when possible, and remind users to verify important facts."
    };

    const chatMessages = [systemPrompt, ...cleanMessages];

    // Provider list — try each until one succeeds.
    const providers = [];
    if (process.env.GROQ_API_KEY) {
        providers.push({
            name: 'groq',
            url: 'https://api.groq.com/openai/v1/chat/completions',
            key: process.env.GROQ_API_KEY,
            models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant']
        });
    }
    if (process.env.OPENROUTER_API_KEY) {
        providers.push({
            name: 'openrouter',
            url: 'https://openrouter.ai/api/v1/chat/completions',
            key: process.env.OPENROUTER_API_KEY,
            extraHeaders: {
                'HTTP-Referer': 'https://ecoawarenessqa.org',
                'X-Title': 'EcoHub'
            },
            models: [
                'meta-llama/llama-3.2-3b-instruct:free',
                'google/gemma-2-9b-it:free',
                'mistralai/mistral-7b-instruct:free'
            ]
        });
    }

    if (providers.length === 0) {
        return res.status(500).json({ error: 'No AI provider configured on the server' });
    }

    let lastStatus = 0;
    let lastBody = '';
    for (const provider of providers) {
        for (const model of provider.models) {
            try {
                const upstream = await fetch(provider.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${provider.key}`,
                        ...(provider.extraHeaders || {})
                    },
                    body: JSON.stringify({ model, messages: chatMessages })
                });
                const text = await upstream.text();
                if (upstream.ok) {
                    const data = JSON.parse(text);
                    const reply = data?.choices?.[0]?.message?.content || '';
                    if (reply) return res.status(200).json({ reply, provider: provider.name, model });
                }
                lastStatus = upstream.status;
                lastBody = text.slice(0, 300);
                console.error(`${provider.name}/${model} -> ${upstream.status}: ${lastBody}`);
                if (upstream.status === 401 || upstream.status === 403) break; // bad key for this provider
            } catch (err) {
                console.error(`Fetch error ${provider.name}/${model}`, err);
                lastStatus = 0;
                lastBody = String(err);
            }
        }
    }

    // Upstream status/body are logged per-attempt above; don't leak them to the client.
    console.error(`EcoBot upstream failure — last status ${lastStatus}: ${lastBody}`);
    return res.status(502).json({
        error: 'AI is temporarily unavailable. Please try again in a moment. 🌿'
    });
}
