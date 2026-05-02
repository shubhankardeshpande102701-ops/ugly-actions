# Cinematic Homepage Implementation

## File Structure

```txt
src/app/page.tsx
src/components/home/cinematic-home.tsx
src/components/motion/fade-in.tsx
src/styles/globals.css
src/data/products.ts
public/images/brand/ua-struggle-mark.svg
plugins/ai/
```

## What Changed

- `src/app/page.tsx` now delegates to a dedicated cinematic homepage component.
- `src/components/home/cinematic-home.tsx` holds the homepage sections, Framer Motion interactions, and brand copy.
- `src/styles/globals.css` contains the full responsive visual system for the homepage.
- `public/images/brand/ua-struggle-mark.svg` is the first local editorial brand visual.
- `plugins/ai/` contains Impeccable, UI/UX Pro Max, Framer Motion notes, and future AI plugin planning.

## Plugin Usage

- Impeccable: run `npm run ai:design-audit` after visual changes.
- UI/UX Pro Max: skill files live in `plugins/ai/ui-ux-pro-max/skills/` for design guidance.
- Framer Motion: homepage uses it for a subtle interactive hero background and entrance motion.

## Integration

Run locally:

```powershell
.\scripts\start.ps1
```

For development mode:

```powershell
.\scripts\dev.ps1
```

For NetBeans, open `C:\Shubh\UglyAction` as the project folder. The important files to edit are:

- `src/components/home/cinematic-home.tsx` for content and sections.
- `src/styles/globals.css` for visual design.
- `src/data/products.ts` for product details.

## Customization Notes

- Replace `ua-struggle-mark.svg` with real campaign photography when available.
- Keep copy emotionally specific. Avoid generic gym slogans.
- Keep animation restrained and reduced-motion-safe.
- Use `PRODUCT.md` and `DESIGN.md` before making major creative changes.

## Brutally Honest Brand Recommendations

- Ugly Actions is strongest if it becomes a belief system first: imperfect action beats perfect hesitation.
- "Rookies" can be part of the voice, but the brand should not be trapped there. Make it feel like activewear for becoming, not beginner gear.
- Golf garments and accessories can work if the brand keeps the same philosophy: decision, action, timing, motion.
- Real photography will matter. Dark typography alone can feel fake if the visuals never show bodies, texture, sweat, fabric, or environment.
- Your first drop should be extremely small and opinionated. Three pieces is correct.
- Do not overuse motivational copy. The brand should sound like restraint, not hype.
- Build community around the ugly middle: people becoming, not people flexing finished results.
