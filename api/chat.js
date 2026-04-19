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

    const payload = {
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        messages: [systemPrompt, ...messages]
    };

    try {
        const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'https://eco-website-lemon.vercel.app',
                'X-Title': 'EcoHub'
            },
            body: JSON.stringify(payload)
        });

        const text = await upstream.text();
        if (!upstream.ok) {
            console.error('OpenRouter error', upstream.status, text);
            return res.status(502).json({ error: 'Upstream error', status: upstream.status });
        }

        const data = JSON.parse(text);
        const reply = data?.choices?.[0]?.message?.content || '';
        return res.status(200).json({ reply });
    } catch (err) {
        console.error('EcoBot proxy error', err);
        return res.status(500).json({ error: 'Proxy failed' });
    }
}
