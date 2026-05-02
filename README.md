# Ugly Actions

Premium athletic wear product preview site for **Ugly Actions**.

V1 is a local-first Next.js storefront preview with three products:

- Training shorts
- Performance t-shirt
- Training hoodie

The site is designed as a coming soon / drop list experience. It does not take payments yet.

## Beginner Setup

Node.js is installed locally in `.tools/` for this project.

1. Open this folder in PowerShell.
2. Run `.\scripts\install.ps1`.
3. Run `.\scripts\dev.ps1`.
4. Open `http://localhost:3000`.

## Useful Commands

- `.\scripts\start.ps1`: build and start the local website in production mode.
- `.\scripts\stop.ps1`: stop the local website server.
- `.\scripts\dev.ps1`: start the local website in developer mode.
- `npm run build`: check that the production build works.
- `npm run lint`: check code style.
- `npm run typecheck`: check TypeScript types.

## Project Shape

- `src/app`: website routes and pages.
- `src/components`: reusable UI and product sections.
- `src/data/products.ts`: the first three product records.
- `docs`: beginner-friendly project, brand, architecture, GitHub, and Shopify notes.
- `artifacts`: design research, wireframes, screenshots, and brand work.
