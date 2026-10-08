# orphans

*Community 4 | 5 files | cohesion 0.00*

## Definition

This community groups 5 file(s) rooted at `root` with dominant language tsx (cohesion 0.00). Central symbols: no extracted symbols. Documented purpose: Autor: Gris Iscomeback Correo electrónico: grisiscomeback[at]gmail[dot]com Fecha de creación: xx/xx/xxxx Licencia: GPL v3  Descripción:.

## Files

| File | Language | Layer | Symbols | Doc |
|------|----------|-------|---------|-----|
| `app.py` | py | utility | 0 | yes |
| `components/icons/BriefcaseIcon.tsx` | tsx | presentation | 0 | no |
| `index.tsx` | tsx | utility | 0 | no |
| `install.sh` | sh | utility | 0 | no |
| `vite.config.ts` | ts | infrastructure | 0 | no |

## Key Symbols

- No symbols extracted in this community.

## Internal vs External Edges

- Internal resolved imports (EXTRACTED): 0
- Cross-boundary resolved imports (EXTRACTED): 0

## Connections

- [INFERRED] shares_context community 0 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 0 (components/icons: BlogPostCard) and community 4 (orphans).
- [INFERRED] shares_context community 1 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 1 (pages) and community 4 (orphans).
- [INFERRED] shares_context community 2 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 2 (components/icons: ContactForm) and community 4 (orphans).
- [INFERRED] shares_context community 3 <-> 4 (strength 0.5): Inferred shared context (language tsx) with no import path between community 3 (components/icons: Navbar) and community 4 (orphans).

## Risks

- No scoped security, taint, cycle, or layer risks.

## Open Questions

- Why do 4 file(s) lack file-level docs (e.g. `components/icons/BriefcaseIcon.tsx`)? What purpose do they serve?
- What would break if the most connected file in orphans changed?
- Should orphans be split, given cohesion 0.00?

## Sources

- `app.py`
- `components/icons/BriefcaseIcon.tsx`
- `index.tsx`
- `install.sh`
- `vite.config.ts`
