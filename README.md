# Aiyantras Automation website redesign

## Run locally

```bash
npm install
npm run dev
```

The Vite development server serves the frontend only. To run the Vercel enquiry API locally, install and sign in to the Vercel CLI, link this project with `vercel link`, configure the environment variables below in Vercel, then run `vercel env pull .env.local` followed by `vercel dev`. `.env.local` is gitignored; do not commit it.

## Build

```bash
npm run build
```

The UI uses a lightweight client-side router implemented in React to keep the project dependency-light. Deploy it on a host that serves `index.html` for unknown routes (SPA fallback).

## Enquiry email setup

The contact form sends submissions to `/api/contact`, which delivers them to `info@aiyantras.com` through Resend. Before deploying:

1. Add and verify the `aiyantras.com` sending domain in Resend, including the DNS records Resend provides.
2. Create a Resend API key.
3. In the Vercel project settings, add these environment variables for the environments you deploy:
	- `RESEND_API_KEY`: the Resend API key (server-side only).
	- `CONTACT_FROM_EMAIL`: a sender address on the verified domain, for example `website@aiyantras.com`.
4. Redeploy the Vercel project so the function receives the new variables.

Never prefix the Resend API key with `VITE_`; Vite variables are exposed to browser code. The direct `mailto:info@aiyantras.com` link remains available as a fallback. A normal `npm run dev` session does not run Vercel functions; use `vercel dev` to test the form endpoint locally.
