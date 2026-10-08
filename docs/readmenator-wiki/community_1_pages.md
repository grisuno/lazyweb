# pages

*Community 1 | 8 files | cohesion 0.37*

## Definition

This community groups 8 file(s) rooted at `pages` with dominant language tsx (cohesion 0.37). Central symbols: `content`. Core file: `components/ui/Button.tsx` (1 symbols).

## Files

| File | Language | Layer | Symbols | Doc |
|------|----------|-------|---------|-----|
| `App.tsx` | tsx | presentation | 0 | no |
| `components/Footer.tsx` | tsx | presentation | 0 | no |
| `components/SectionTitle.tsx` | tsx | presentation | 0 | no |
| `components/icons/PuzzlePieceIcon.tsx` | tsx | presentation | 0 | no |
| `components/ui/Button.tsx` | tsx | presentation | 1 | no |
| `pages/BlogPage.tsx` | tsx | presentation | 0 | no |
| `pages/FrameworkPage.tsx` | tsx | presentation | 0 | no |
| `pages/ServicesPage.tsx` | tsx | presentation | 0 | no |

## Key Symbols

- `content` (function, `components/ui/Button.tsx:41`)

## Internal vs External Edges

- Internal resolved imports (EXTRACTED): 10
- Cross-boundary resolved imports (EXTRACTED): 17

## Connections

- [EXTRACTED] depends_on community 1 <-> 3 (strength 0.9): Extracted import edge crosses communities: App.tsx imports components/Navbar.tsx.
- [EXTRACTED] depends_on community 1 <-> 0 (strength 0.9): Extracted import edge crosses communities: App.tsx imports pages/HomePage.tsx.
- [EXTRACTED] depends_on community 1 <-> 2 (strength 0.9): Extracted import edge crosses communities: App.tsx imports pages/ContactPage.tsx.
- [INFERRED] shares_context community 1 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 1 (pages) and community 4 (orphans).

## Risks

- No scoped security, taint, cycle, or layer risks.

## Open Questions

- Why do 8 file(s) lack file-level docs (e.g. `App.tsx`)? What purpose do they serve?
- What would break if the most connected file in pages changed?
- Should pages be split, given cohesion 0.37?

## Sources

- `App.tsx`
- `components/Footer.tsx`
- `components/SectionTitle.tsx`
- `components/icons/PuzzlePieceIcon.tsx`
- `components/ui/Button.tsx`
- `pages/BlogPage.tsx`
- `pages/FrameworkPage.tsx`
- `pages/ServicesPage.tsx`
