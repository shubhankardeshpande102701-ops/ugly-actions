# Framer Motion

Framer Motion is installed as a runtime dependency for React/Next.js animation.

Source: https://www.npmjs.com/package/framer-motion

Installed package:

```bash
npm install framer-motion
```

## Project Usage

Use Framer Motion for meaningful interface feedback:

- Page/section entrance animation
- Product card hover/tap polish
- Drop-list form confirmation states
- Reduced-motion-safe transitions

Avoid using it for decorative animation that distracts from product confidence.

## Next.js Rule

Framer Motion components must live in client components using:

```tsx
"use client";
```

Server components can import those client wrappers, but should not directly call motion hooks.
