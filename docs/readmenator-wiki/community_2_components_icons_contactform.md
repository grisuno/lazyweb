# components/icons: ContactForm

*Community 2 | 7 files | cohesion 0.30*

## Definition

This community groups 7 file(s) rooted at `components/icons` with dominant language tsx (cohesion 0.30). Central symbols: `handleSubmit`. Core file: `components/ContactForm.tsx` (1 symbols).

## Files

| File | Language | Layer | Symbols | Doc |
|------|----------|-------|---------|-----|
| `components/ContactForm.tsx` | tsx | presentation | 1 | no |
| `components/icons/LinkedInIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/LockIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/NetworkIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/TwitterIcon.tsx` | tsx | presentation | 0 | no |
| `constants.ts` | ts | utility | 0 | no |
| `pages/ContactPage.tsx` | tsx | presentation | 0 | no |

## Key Symbols

- `handleSubmit` (function, `components/ContactForm.tsx:11`)

## Internal vs External Edges

- Internal resolved imports (EXTRACTED): 7
- Cross-boundary resolved imports (EXTRACTED): 16

## Connections

- [EXTRACTED] depends_on community 1 <-> 2 (strength 0.9): Extracted import edge crosses communities: App.tsx imports pages/ContactPage.tsx.
- [EXTRACTED] depends_on community 0 <-> 2 (strength 0.9): Extracted import edge crosses communities: components/HeroSection.tsx imports constants.ts.
- [EXTRACTED] depends_on community 3 <-> 2 (strength 0.9): Extracted import edge crosses communities: components/Navbar.tsx imports constants.ts.
- [INFERRED] bridges community 0 <-> 2 (strength 0.6): Inferred cross-community bridge: components/BlogPostCard.tsx reaches components/ContactForm.tsx in 4 hops.
- [INFERRED] bridges community 2 <-> 3 (strength 0.6): Inferred cross-community bridge: components/ContactForm.tsx reaches components/TeamMemberCard.tsx in 4 hops.
- [INFERRED] bridges community 2 <-> 3 (strength 0.6): Inferred cross-community bridge: components/ContactForm.tsx reaches components/icons/MenuIcon.tsx in 4 hops.
- [INFERRED] shares_context community 2 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 2 (components/icons: ContactForm) and community 4 (orphans).

## Risks

- No scoped security, taint, cycle, or layer risks.

## Open Questions

- Why do 7 file(s) lack file-level docs (e.g. `components/ContactForm.tsx`)? What purpose do they serve?
- What would break if the most connected file in components/icons: ContactForm changed?
- Should components/icons: ContactForm be split, given cohesion 0.30?

## Sources

- `components/ContactForm.tsx`
- `components/icons/LinkedInIcon.tsx`
- `components/icons/LockIcon.tsx`
- `components/icons/NetworkIcon.tsx`
- `components/icons/TwitterIcon.tsx`
- `constants.ts`
- `pages/ContactPage.tsx`
