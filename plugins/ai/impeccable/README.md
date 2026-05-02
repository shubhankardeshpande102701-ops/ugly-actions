# Impeccable Plugin

Impeccable is a design skill and CLI for AI coding agents. It helps audit and improve frontend design by catching common AI-generated UI anti-patterns.

Official site: https://impeccable.style/

Official install note from Impeccable:

```bash
npx skills add pbakaus/impeccable
```

For this project, the CLI package is installed locally as a dev dependency:

```bash
npm install --save-dev impeccable
```

## Project Commands

Run a design anti-pattern scan:

```bash
npm run ai:design-audit
```

Run the scan as JSON for future CI/reporting:

```bash
npm run ai:design-audit:json
```

## How We Use It

- Use before major visual commits.
- Use after AI-generated UI changes.
- Treat findings as design review input, not automatic truth.
- Keep the Ugly Actions brand direction in `PRODUCT.md` and `DESIGN.md`.

## Notes

Impeccable also has agent skill commands such as `/impeccable polish`, `/impeccable audit`, and `/impeccable live`. Those are harness-level commands, while this repo currently installs the CLI scanner.
