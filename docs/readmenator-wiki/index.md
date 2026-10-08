# Second Brain

*Last synthesized: 2026-10-07 | 36 files | 5 concept pages | offline, zero tokens*

> Raw sources -> readmenator wiki -> links (Karpathy LLM Wiki Pattern, deterministic).
> Start here, then open one community page. Prefer grep over full reads.

## Vault Overview

The codebase centres on `constants.ts`, `HomePage.tsx`, `App.tsx`. Architecturally it is 4 layers, dominant presentation (29 files) across 5 import-based communities. Recorded risk surface: 0 security findings and 0 dependency cycles.

Surprising tissue lives between components/icons: BlogPostCard, pages, components/icons: ContactForm: 6 extracted cross-community imports and 9 inferred bridges. Follow `connections.json` sorted by strength before refactoring.

Open work clusters around documentation (3% file coverage), 0 security findings, 0 taint paths, and 5 suggested exploration questions in `queries.md`.

## Stats

| Metric | Value |
|--------|-------|
| Files | 36 |
| Symbols | 2 |
| Resolved imports | 62 |
| Languages | py, sh, ts, tsx |
| Communities | 5 |
| Doc coverage | 3% (1/36 files) |
| Security findings | 0 |
| Estimated read cost | ~1204 tokens (chars/4, offline so $0) |

## Reading Order

1. Skim Stats and God Nodes below for blast radius.
2. Open the largest community page first, then follow Connections.
3. Use `queries.md` for the next question; log the answer there.

```
grep -rn '<keyword>' index.md community_*.md
readmenator query "<question>" --target readmenator_lazyweb_u6qhuqv6
```

## Concept Wiki

- [components/icons: BlogPostCard (9 files, cohesion 0.50)](./community_0_components_icons_blogpostcard.md)
- [pages (8 files, cohesion 0.37)](./community_1_pages.md)
- [components/icons: ContactForm (7 files, cohesion 0.30)](./community_2_components_icons_contactform.md)
- [components/icons: Navbar (7 files, cohesion 0.40)](./community_3_components_icons_navbar.md)
- [orphans (5 files, cohesion 0.00)](./community_4_orphans.md)

## God Nodes

| File | Score |
|------|-------|
| `constants.ts` | 36.0 |
| `pages/HomePage.tsx` | 20.0 |
| `App.tsx` | 16.0 |
| `pages/AboutPage.tsx` | 14.0 |
| `components/SectionTitle.tsx` | 12.0 |

## Strongest Connections

- 1 -> 3: depends_on (strength 0.9, EXTRACTED)
- 1 -> 0: depends_on (strength 0.9, EXTRACTED)
- 1 -> 2: depends_on (strength 0.9, EXTRACTED)
- 0 -> 2: depends_on (strength 0.9, EXTRACTED)
- 3 -> 2: depends_on (strength 0.9, EXTRACTED)
- 3 -> 0: depends_on (strength 0.9, EXTRACTED)
- 0 -> 2: bridges (strength 0.6, INFERRED)
- 0 -> 3: bridges (strength 0.6, INFERRED)
- 0 -> 3: bridges (strength 0.6, INFERRED)
- 2 -> 3: bridges (strength 0.6, INFERRED)

## Navigation Tips

- Obsidian Graph View works: every community page links back here.
- `connections.json` is machine-readable for GraphRAG pipelines.
- `REPORT.md` states what was extracted vs inferred and current limits.
- Regenerate offline: `readmenator . --rebuild` (no network, no tokens).
