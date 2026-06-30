# Boterra Materials — website

Astro static site. Deploys to Cloudflare Pages (or Vercel).

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Build
    npm run build      # outputs to dist/

## Edit content
All product/ingredient data and the company tagline live in:
    src/data/products.js
Edit there — the pages read from it. No HTML editing needed for spec changes.

## Deploy to Cloudflare Pages
1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard → Pages → Connect to Git → select the repo.
3. Build command:    npm run build
   Output directory: dist
4. Deploy. You'll get a *.pages.dev URL immediately.

## Point boterramaterials.com (registered at GoDaddy) at it
In Cloudflare Pages → Custom domains → add boterramaterials.com.
Cloudflare will give you DNS records (or ask you to change nameservers).
Add/repoint those in GoDaddy → DNS. Propagation is usually quick.
