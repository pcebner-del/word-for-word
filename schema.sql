create table if not exists email_signups (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

alter table email_signups enable row level security;

create policy "Allow anon insert" on email_signups
  for insert to anon with check (true);
