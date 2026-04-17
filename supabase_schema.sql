-- ─── Poshak Tattva – Supabase Schema ─────────────────────────────────────────
-- Run this SQL in your Supabase project: Dashboard → SQL Editor → New Query

-- 1. Appointments (contact form submissions)
create table if not exists public.appointments (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  email           text not null,
  phone           text,
  service         text,
  preferred_date  text,
  preferred_time  text,
  status          text default 'pending',   -- pending | confirmed | cancelled
  created_at      timestamptz default now()
);

-- 2. Products (mirrored for admin management)
create table if not exists public.products (
  id                   uuid primary key default gen_random_uuid(),
  slug                 text unique not null,
  name                 text not null,
  short_description    text,
  thumbnail            text,
  price_inr            numeric(10,2),
  original_price_inr   numeric(10,2),
  discount_pct         numeric(5,2),    -- e.g. 10.00 for 10% off
  in_stock             boolean default true,
  created_at           timestamptz default now()
);

-- 3. Testimonials
create table if not exists public.testimonials (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  role        text,                          -- e.g. "Yoga Student, New Delhi"
  quote       text not null,
  rating      int default 5,                 -- 1-5
  created_at  timestamptz default now()
);

-- 4. Gallery
create table if not exists public.gallery (
  id          uuid primary key default gen_random_uuid(),
  image_url   text not null,                 -- /img/Gallery/1.jpg or full GitHub raw URL
  title       text,
  alt_text    text,
  sort_order  int default 0,
  created_at  timestamptz default now()
);

-- 5. Articles (blogs)
create table if not exists public.articles (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  content         text not null,  -- full content with paragraphs
  image_url       text,
  created_at      timestamptz default now()
);

-- ─── Row Level Security ────────────────────────────────────────────────────────
-- The admin uses the anon key server-side only, so public reads are safe for
-- gallery/testimonials. Restrict writes appropriately in production.

alter table public.appointments  enable row level security;
alter table public.products      enable row level security;
alter table public.testimonials  enable row level security;
alter table public.gallery       enable row level security;
alter table public.articles      enable row level security;

-- Allow full access via anon key (for server-side admin panel)
-- You can tighten these with service_role key later.
create policy "anon_all_appointments"  on public.appointments  for all using (true) with check (true);
create policy "anon_all_products"      on public.products      for all using (true) with check (true);
create policy "anon_all_testimonials"  on public.testimonials  for all using (true) with check (true);
create policy "anon_all_gallery"       on public.gallery       for all using (true) with check (true);
create policy "anon_all_articles"      on public.articles      for all using (true) with check (true);
