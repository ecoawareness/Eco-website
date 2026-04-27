// Admin dashboard data endpoint.
//
// Auth: caller sends their Supabase access token as Authorization Bearer.
// We validate the token by calling Supabase /auth/v1/user. If the email
// matches ADMIN_EMAIL, we return the full user list (read via the service
// role key, which never leaves the server).
//
// No profiles table needed — data is sourced directly from auth.users.

const SUPABASE_URL = 'https://nqvhxjsryatqgfvtjbki.supabase.co';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@admin.com';
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
        return res.status(500).json({ error: 'Server misconfigured: missing SUPABASE_SERVICE_ROLE_KEY' });
    }

    // ── 1. Validate the caller's session token ───────────────
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!token) {
        return res.status(401).json({ error: 'Missing access token' });
    }
    const meResp = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${token}` }
    });
    if (!meResp.ok) {
        return res.status(401).json({ error: 'Invalid session' });
    }
    const me = await meResp.json();
    if (me.email !== adminEmail) {
        return res.status(403).json({ error: 'Forbidden — admin only' });
    }

    // ── 2. Fetch all users via service role ──────────────────
    try {
        const usersResp = await fetch(
            `${SUPABASE_URL}/auth/v1/admin/users?per_page=1000`,
            {
                headers: {
                    'apikey': serviceKey,
                    'Authorization': `Bearer ${serviceKey}`
                }
            }
        );
        if (!usersResp.ok) {
            const txt = await usersResp.text();
            console.error('Supabase admin list error', usersResp.status, txt);
            return res.status(502).json({ error: 'Failed to fetch users', detail: txt.slice(0, 200) });
        }
        const usersJson = await usersResp.json();

        // Shape matches what friend's admin.html expects from `profiles` table
        const profiles = (usersJson.users || []).map(u => ({
            id: u.id,
            email: u.email,
            full_name: u.user_metadata?.full_name || u.user_metadata?.name
                       || (u.email ? u.email.split('@')[0] : 'User'),
            created_at: u.created_at,
            last_sign_in_at: u.last_sign_in_at
        }));

        return res.status(200).json({ profiles });
    } catch (err) {
        console.error('Admin data error', err);
        return res.status(500).json({ error: 'Server error', detail: String(err).slice(0, 200) });
    }
}
