# UI/UX Pro Max

UI/UX Pro Max is an AI design intelligence skill set from NextLevelBuilder.

Source:
- Website: https://ui-ux-pro-max-skill.nextlevelbuilder.io/
- GitHub: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Skills directory: https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill

The project source describes UI/UX Pro Max as design intelligence with UI styles, color palettes, font pairings, UX guidelines, chart types, and stack-specific implementation guidance.

## Installed Here

The package `uipro-cli` is installed as a dev dependency.

The full skill set has also been copied into:

```txt
plugins/ai/ui-ux-pro-max/skills/
```

Included skills:

- `ui-ux-pro-max`
- `ui-styling`
- `design-system`
- `design`
- `brand`
- `slides`
- `banner-design`

## Commands

Check the local CLI:

```bash
npm run ai:uipro
```

The upstream installer command for Codex is:

```bash
uipro init --ai codex
```

I did not run that installer into the root `.codex` path because this project already uses a root `.codex` instruction file. Instead, the skill files are vendored under `plugins/ai/ui-ux-pro-max/skills/` so they are visible, versioned, and easy to inspect.

## How To Use In This Project

Use these references when changing the Ugly Actions UI:

- `skills/ui-ux-pro-max/SKILL.md`: broad UI/UX guidance.
- `skills/ui-styling/SKILL.md`: visual styling guidance.
- `skills/design-system/SKILL.md`: tokens and component-system guidance.
- `skills/brand/SKILL.md`: brand identity guidance.

For the actual Ugly Actions design context, prefer the project-level `PRODUCT.md` and `DESIGN.md` first.
