-- EcoHub dynamic platform tables.
-- Run this once in Supabase SQL Editor, then deploy the site.

create table if not exists public.eco_profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    email text,
    full_name text not null,
    bio text default '',
    location text default 'Qatar',
    interests text[] default '{}',
    skills text[] default '{}',
    public_portfolio boolean default true,
    updated_at timestamptz default now()
);

create table if not exists public.eco_organizations (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid references auth.users(id) on delete set null,
    name text not null,
    description text default '',
    website text default '',
    contact_email text default '',
    verified boolean default false,
    created_at timestamptz default now()
);

create table if not exists public.eco_opportunities (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    organization text not null,
    organization_id uuid references public.eco_organizations(id) on delete set null,
    event_date date,
    location text default '',
    description text default '',
    expected_volunteers integer,
    category text default 'Volunteer',
    region text default 'qatar',
    status text default 'pending' check (status in ('pending', 'approved', 'archived')),
    external_url text default '',
    submitted_by uuid references auth.users(id) on delete set null,
    created_at timestamptz default now()
);

create table if not exists public.eco_event_signups (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade,
    opportunity_id uuid references public.eco_opportunities(id) on delete set null,
    opportunity_title text not null,
    organization text default '',
    event_date text default '',
    external_url text default '',
    source text default 'ecohub',
    status text default 'upcoming',
    verified_hours numeric default 0,
    verified_by uuid references auth.users(id) on delete set null,
    verified_at timestamptz,
    created_at timestamptz default now(),
    unique (user_id, opportunity_title)
);

alter table public.eco_profiles enable row level security;
alter table public.eco_organizations enable row level security;
alter table public.eco_opportunities enable row level security;
alter table public.eco_event_signups enable row level security;

create policy "Profiles can be read when public"
on public.eco_profiles for select
using (public_portfolio = true or auth.uid() = id);

create policy "Users manage their profile"
on public.eco_profiles for all
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Approved opportunities are public"
on public.eco_opportunities for select
using (status = 'approved' or submitted_by = auth.uid());

create policy "Signed-in users submit opportunities"
on public.eco_opportunities for insert
with check (auth.uid() = submitted_by);

create policy "Organizations are public"
on public.eco_organizations for select
using (true);

create policy "Organization owners manage their orgs"
on public.eco_organizations for all
using (auth.uid() = owner_id)
with check (auth.uid() = owner_id);

create policy "Users manage their event signups"
on public.eco_event_signups for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
