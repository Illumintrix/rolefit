# Rolefit

A full-stack job application workspace built with Next.js App Router, TypeScript, Tailwind, Radix/shadcn-style components, SQLite, migrations and API routes.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. On first API access, `data/rolefit.db` is created, migration `migrations/001_init.sql` runs, and all 51 PM roles are seeded. No account or API key is required.

## Real persistence

- `GET /api/roles` loads the pipeline from SQLite
- `PATCH /api/roles/:id` persists status/notes and writes pipeline history
- `POST /api/analyze` extracts JD requirements and persists each analysis
- `GET|POST /api/resumes` persists resume versions and fact-guard metadata
- `GET|PUT /api/settings` configures primary and fallback OpenRouter models

Without `OPENROUTER_API_KEY`, analysis uses deterministic, input-driven extraction behind the same interface. With a key, it calls OpenRouter using the configured model and fallback.

## Production

SQLite is the zero-account local path. For Vercel, use the included schema as the migration source for Supabase Postgres, then replace the local DB adapter with Supabase. Required hosted values: Supabase project URL, anon key, service-role key, database URL and optional OpenRouter key.

## Product tiers (billing-ready, no billing implemented)

The free tier is designed to be useful: one active profile, five saved roles, three analyses per month, one tailored export, and full fact-guard review. A later paid tier can raise limits and add multiple active profiles, unlimited tailoring and richer history. No payment code or provider is connected.

## Multi-user model

Local auth uses password hashing plus opaque HTTP-only sessions. Users choose student or professional during signup. Onboarding creates a private source profile; student profiles explicitly accept projects, coursework, internships, volunteering and leadership as evidence without presenting them as jobs. The schema includes user-scoped profile resumes, roles, analyses and resume versions. Hosted deployment will swap the local adapter for Supabase Auth/Postgres with row-level security.
