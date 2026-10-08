# components/icons: BlogPostCard

*Community 0 | 9 files | cohesion 0.50*

## Definition

This community groups 9 file(s) rooted at `components` with dominant language tsx (cohesion 0.50). Central symbols: no extracted symbols.

## Files

| File | Language | Layer | Symbols | Doc |
|------|----------|-------|---------|-----|
| `components/BlogPostCard.tsx` | tsx | presentation | 0 | no |
| `components/HeroSection.tsx` | tsx | presentation | 0 | no |
| `components/ServiceCard.tsx` | tsx | presentation | 0 | no |
| `components/TestimonialCard.tsx` | tsx | testing | 0 | no |
| `components/icons/ChevronRightIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/CodeIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/UserGroupIcon.tsx` | tsx | presentation | 0 | no |
| `pages/HomePage.tsx` | tsx | presentation | 0 | no |
| `types.ts` | ts | utility | 0 | no |

## Key Symbols

- No symbols extracted in this community.

## Internal vs External Edges

- Internal resolved imports (EXTRACTED): 12
- Cross-boundary resolved imports (EXTRACTED): 12

## Connections

- [EXTRACTED] depends_on community 1 <-> 0 (strength 0.9): Extracted import edge crosses communities: App.tsx imports pages/HomePage.tsx.
- [EXTRACTED] depends_on community 0 <-> 2 (strength 0.9): Extracted import edge crosses communities: components/HeroSection.tsx imports constants.ts.
- [EXTRACTED] depends_on community 3 <-> 0 (strength 0.9): Extracted import edge crosses communities: components/TeamMemberCard.tsx imports types.ts.
- [INFERRED] bridges community 0 <-> 2 (strength 0.6): Inferred cross-community bridge: components/BlogPostCard.tsx reaches components/ContactForm.tsx in 4 hops.
- [INFERRED] bridges community 0 <-> 3 (strength 0.6): Inferred cross-community bridge: components/BlogPostCard.tsx reaches components/icons/MenuIcon.tsx in 4 hops.
- [INFERRED] bridges community 0 <-> 3 (strength 0.6): Inferred cross-community bridge: components/BlogPostCard.tsx reaches components/icons/XIcon.tsx in 4 hops.
- [INFERRED] shares_context community 0 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 0 (components/icons: BlogPostCard) and community 4 (orphans).

## Risks

- No scoped security, taint, cycle, or layer risks.

## Open Questions

- Why do 9 file(s) lack file-level docs (e.g. `components/BlogPostCard.tsx`)? What purpose do they serve?
- What would break if the most connected file in components/icons: BlogPostCard changed?
- Should components/icons: BlogPostCard be split, given cohesion 0.50?

## Sources

- `components/BlogPostCard.tsx`
- `components/HeroSection.tsx`
- `components/ServiceCard.tsx`
- `components/TestimonialCard.tsx`
- `components/icons/ChevronRightIcon.tsx`
- `components/icons/CodeIcon.tsx`
- `components/icons/UserGroupIcon.tsx`
- `pages/HomePage.tsx`
- `types.ts`
