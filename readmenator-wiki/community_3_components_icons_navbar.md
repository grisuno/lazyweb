# components/icons: Navbar

*Community 3 | 7 files | cohesion 0.40*

## Definition

This community groups 7 file(s) rooted at `components/icons` with dominant language tsx (cohesion 0.40). Central symbols: no extracted symbols.

## Files

| File | Language | Layer | Symbols | Doc |
|------|----------|-------|---------|-----|
| `components/Navbar.tsx` | tsx | presentation | 0 | no |
| `components/TeamMemberCard.tsx` | tsx | presentation | 0 | no |
| `components/icons/MenuIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/ShieldIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/TargetIcon.tsx` | tsx | presentation | 0 | no |
| `components/icons/XIcon.tsx` | tsx | presentation | 0 | no |
| `pages/AboutPage.tsx` | tsx | presentation | 0 | no |

## Key Symbols

- No symbols extracted in this community.

## Internal vs External Edges

- Internal resolved imports (EXTRACTED): 6
- Cross-boundary resolved imports (EXTRACTED): 9

## Connections

- [EXTRACTED] depends_on community 1 <-> 3 (strength 0.9): Extracted import edge crosses communities: App.tsx imports components/Navbar.tsx.
- [EXTRACTED] depends_on community 3 <-> 2 (strength 0.9): Extracted import edge crosses communities: components/Navbar.tsx imports constants.ts.
- [EXTRACTED] depends_on community 3 <-> 0 (strength 0.9): Extracted import edge crosses communities: components/TeamMemberCard.tsx imports types.ts.
- [INFERRED] bridges community 0 <-> 3 (strength 0.6): Inferred cross-community bridge: components/BlogPostCard.tsx reaches components/icons/MenuIcon.tsx in 4 hops.
- [INFERRED] bridges community 0 <-> 3 (strength 0.6): Inferred cross-community bridge: components/BlogPostCard.tsx reaches components/icons/XIcon.tsx in 4 hops.
- [INFERRED] bridges community 2 <-> 3 (strength 0.6): Inferred cross-community bridge: components/ContactForm.tsx reaches components/TeamMemberCard.tsx in 4 hops.
- [INFERRED] bridges community 2 <-> 3 (strength 0.6): Inferred cross-community bridge: components/ContactForm.tsx reaches components/icons/MenuIcon.tsx in 4 hops.
- [INFERRED] shares_context community 3 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 3 (components/icons: Navbar) and community 4 (orphans).

## Risks

- No scoped security, taint, cycle, or layer risks.

## Open Questions

- Why do 7 file(s) lack file-level docs (e.g. `components/Navbar.tsx`)? What purpose do they serve?
- What would break if the most connected file in components/icons: Navbar changed?
- Should components/icons: Navbar be split, given cohesion 0.40?

## Sources

- `components/Navbar.tsx`
- `components/TeamMemberCard.tsx`
- `components/icons/MenuIcon.tsx`
- `components/icons/ShieldIcon.tsx`
- `components/icons/TargetIcon.tsx`
- `components/icons/XIcon.tsx`
- `pages/AboutPage.tsx`
