// Vercel serverless function — proxies EcoBot chat.
// Primary: Groq (generous free tier). Fallback: OpenRouter.
// Keys live in GROQ_API_KEY / OPENROUTER_API_KEY env vars — never in the
// frontend bundle.

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'messages[] required' });
    }

    const systemPrompt = {
        role: 'system',
        content: "You are EcoBot, a friendly AI assistant for EcoHub — Qatar's youth climate action platform by EcoAwareness QA. Help young Qataris learn about climate change, Qatar Vision 2030, sustainability, volunteer opportunities, and environmental impact. Keep responses concise, friendly and inspiring. Use occasional emojis."
    };

    const chatMessages = [systemPrompt, ...messages];

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

    return res.status(502).json({
        error: 'AI is temporarily unavailable. Please try again in a moment. 🌿',
        status: lastStatus,
        detail: lastBody
    });
}
