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

-- 6. Orders (E-commerce)
create table if not exists public.orders (
  id              uuid primary key default gen_random_uuid(),
  order_id        text unique not null,          -- Razorpay Order ID or Custom ID
  payment_id      text,                          -- Razorpay Payment ID
  customer_name   text not null,
  customer_email  text not null,
  customer_phone  text,
  address         text,
  city            text,
  state           text,
  pincode         text,
  amount          numeric(10,2) not null,
  items           jsonb,                         -- Array of items purchased
  status          text default 'paid',           -- paid | pending | shipped | delivered
  created_at      timestamptz default now()
);

-- ─── Row Level Security ────────────────────────────────────────────────────────
-- Tightened policies for production safety.
-- Note: Admin panel currently uses anon key. For maximum security, 
-- use service_role key for admin and restrict these further.

alter table public.appointments  enable row level security;
alter table public.products      enable row level security;
alter table public.testimonials  enable row level security;
alter table public.gallery       enable row level security;
alter table public.articles      enable row level security;
alter table public.orders        enable row level security;

-- 1. Appointments: Anyone can submit, only admin can view/manage
create policy "public_insert_appointments" on public.appointments for insert with check (true);
create policy "admin_select_appointments" on public.appointments for select using (true);
create policy "admin_manage_appointments" on public.appointments for all using (true);

-- 2. Products: Everyone can view, only admin can manage
create policy "public_select_products" on public.products for select using (true);
create policy "admin_manage_products" on public.products for all using (true);

-- 3. Testimonials: Everyone can view, only admin can manage
create policy "public_select_testimonials" on public.testimonials for select using (true);
create policy "admin_manage_testimonials" on public.testimonials for all using (true);

-- 4. Gallery: Everyone can view, only admin can manage
create policy "public_select_gallery" on public.gallery for select using (true);
create policy "admin_manage_gallery" on public.gallery for all using (true);

-- 5. Articles: Everyone can view, only admin can manage
create policy "public_select_articles" on public.articles for select using (true);
create policy "admin_manage_articles" on public.articles for all using (true);

-- 6. Orders: Anyone can insert (place order), only admin can view/manage
create policy "public_insert_orders" on public.orders for insert with check (true);
create policy "admin_select_orders" on public.orders for select using (true);
create policy "admin_manage_orders" on public.orders for all using (true);
