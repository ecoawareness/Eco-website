// Vercel serverless function — proxies EcoBot chat to OpenRouter.
// The API key lives in the OPENROUTER_API_KEY environment variable,
// never in the frontend bundle.

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server misconfigured: missing OPENROUTER_API_KEY' });
    }

    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'messages[] required' });
    }

    const systemPrompt = {
        role: 'system',
        content: "You are EcoBot, a friendly AI assistant for EcoHub — Qatar's youth climate action platform by EcoAwareness QA. Help young Qataris learn about climate change, Qatar Vision 2030, sustainability, volunteer opportunities, and environmental impact. Keep responses concise, friendly and inspiring. Use occasional emojis."
    };

    // Try each free model in order until one isn't rate-limited.
    const models = [
        'meta-llama/llama-3.2-3b-instruct:free',
        'google/gemma-2-9b-it:free',
        'mistralai/mistral-7b-instruct:free',
        'meta-llama/llama-3.3-70b-instruct:free'
    ];

    let lastStatus = 0;
    let lastBody = '';
    for (const model of models) {
        try {
            const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': 'https://eco-awareness-website.vercel.app',
                    'X-Title': 'EcoHub'
                },
                body: JSON.stringify({ model, messages: [systemPrompt, ...messages] })
            });

            const text = await upstream.text();
            if (upstream.ok) {
                const data = JSON.parse(text);
                const reply = data?.choices?.[0]?.message?.content || '';
                if (reply) return res.status(200).json({ reply, model });
            }
            lastStatus = upstream.status;
            lastBody = text.slice(0, 300);
            console.error(`OpenRouter ${model} -> ${upstream.status}: ${lastBody}`);
            // Auth errors — no point trying other models.
            if (upstream.status === 401 || upstream.status === 403) break;
        } catch (err) {
            console.error(`Fetch error for ${model}`, err);
            lastStatus = 0;
            lastBody = String(err);
        }
    }
    return res.status(502).json({
        error: 'All free models are currently unavailable. Please try again in a minute.',
        status: lastStatus,
        detail: lastBody
    });
}
