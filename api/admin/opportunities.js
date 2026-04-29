const SUPABASE_URL = 'https://nqvhxjsryatqgfvtjbki.supabase.co';

async function validateAdmin(req, serviceKey) {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@admin.com';
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!token) return { ok: false, status: 401, error: 'Missing access token' };

    const meResp = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: { apikey: serviceKey, Authorization: `Bearer ${token}` }
    });
    if (!meResp.ok) return { ok: false, status: 401, error: 'Invalid session' };
    const me = await meResp.json();
    if (me.email !== adminEmail) return { ok: false, status: 403, error: 'Forbidden - admin only' };
    return { ok: true, user: me };
}

export default async function handler(req, res) {
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
        return res.status(500).json({ error: 'Server misconfigured: missing SUPABASE_SERVICE_ROLE_KEY' });
    }

    const admin = await validateAdmin(req, serviceKey);
    if (!admin.ok) return res.status(admin.status).json({ error: admin.error });

    if (req.method === 'GET') {
        const status = req.query.status || 'pending';
        const url = `${SUPABASE_URL}/rest/v1/eco_opportunities?select=*&status=eq.${encodeURIComponent(status)}&order=created_at.desc`;
        const r = await fetch(url, {
            headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` }
        });
        const text = await r.text();
        return res.status(r.status).send(text);
    }

    if (req.method === 'PATCH') {
        const { id, status } = req.body || {};
        if (!id || !['pending', 'approved', 'archived'].includes(status)) {
            return res.status(400).json({ error: 'id and valid status required' });
        }
        const r = await fetch(`${SUPABASE_URL}/rest/v1/eco_opportunities?id=eq.${encodeURIComponent(id)}`, {
            method: 'PATCH',
            headers: {
                apikey: serviceKey,
                Authorization: `Bearer ${serviceKey}`,
                'Content-Type': 'application/json',
                Prefer: 'return=representation'
            },
            body: JSON.stringify({ status })
        });
        const text = await r.text();
        return res.status(r.status).send(text);
    }

    res.setHeader('Allow', 'GET, PATCH');
    return res.status(405).json({ error: 'Method not allowed' });
}
