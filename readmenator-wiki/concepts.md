# Concepts

Second-brain semantic layer: nouns map atomically to file sets (EXTRACTED); verbs aggregate structural edges (INFERRED).

| Concept | Files | Mentions | Top Files |
|---------|-------|----------|-----------|
| `tsx` | 31 | 62 | `App.tsx`, `components/BlogPostCard.tsx`, `components/ContactForm.tsx`, `components/Footer.tsx`, `components/HeroSection.tsx` |
| `components` | 23 | 23 | `components/BlogPostCard.tsx`, `components/ContactForm.tsx`, `components/Footer.tsx`, `components/HeroSection.tsx`, `components/Navbar.tsx` |
| `icons` | 13 | 13 | `components/icons/BriefcaseIcon.tsx`, `components/icons/ChevronRightIcon.tsx`, `components/icons/CodeIcon.tsx`, `components/icons/LinkedInIcon.tsx`, `components/icons/LockIcon.tsx` |
| `icon` | 12 | 24 | `components/icons/BriefcaseIcon.tsx`, `components/icons/ChevronRightIcon.tsx`, `components/icons/CodeIcon.tsx`, `components/icons/LinkedInIcon.tsx`, `components/icons/LockIcon.tsx` |
| `page` | 6 | 12 | `pages/AboutPage.tsx`, `pages/BlogPage.tsx`, `pages/ContactPage.tsx`, `pages/FrameworkPage.tsx`, `pages/HomePage.tsx` |
| `pages` | 6 | 6 | `pages/AboutPage.tsx`, `pages/BlogPage.tsx`, `pages/ContactPage.tsx`, `pages/FrameworkPage.tsx`, `pages/HomePage.tsx` |
| `card` | 4 | 8 | `components/BlogPostCard.tsx`, `components/ServiceCard.tsx`, `components/TeamMemberCard.tsx`, `components/TestimonialCard.tsx` |
| `app` | 2 | 5 | `App.tsx`, `app.py` |
| `blog` | 2 | 4 | `components/BlogPostCard.tsx`, `pages/BlogPage.tsx` |
| `contact` | 2 | 4 | `components/ContactForm.tsx`, `pages/ContactPage.tsx` |
| `section` | 2 | 4 | `components/HeroSection.tsx`, `components/SectionTitle.tsx` |

## Verb Edges

| Source | Verb | Target | Strength |
|--------|------|--------|----------|
| `tsx` | `depends_on` | `components` | 1.00 |
| `page` | `depends_on` | `components` | 0.68 |
| `page` | `depends_on` | `tsx` | 0.68 |
| `pages` | `depends_on` | `components` | 0.68 |
| `pages` | `depends_on` | `tsx` | 0.68 |
| `tsx` | `depends_on` | `icons` | 0.44 |
| `tsx` | `depends_on` | `icon` | 0.41 |
| `components` | `depends_on` | `tsx` | 0.26 |
| `app` | `depends_on` | `tsx` | 0.24 |
| `page` | `depends_on` | `icon` | 0.24 |
| `page` | `depends_on` | `icons` | 0.24 |
| `pages` | `depends_on` | `icon` | 0.24 |
| `pages` | `depends_on` | `icons` | 0.24 |
| `components` | `depends_on` | `icons` | 0.21 |
| `page` | `depends_on` | `section` | 0.21 |
| `pages` | `depends_on` | `section` | 0.21 |
| `tsx` | `depends_on` | `section` | 0.21 |
| `app` | `depends_on` | `page` | 0.18 |
| `app` | `depends_on` | `pages` | 0.18 |
| `components` | `depends_on` | `icon` | 0.18 |
| `tsx` | `depends_on` | `page` | 0.18 |
| `tsx` | `depends_on` | `pages` | 0.18 |
| `contact` | `depends_on` | `components` | 0.12 |
| `contact` | `depends_on` | `tsx` | 0.12 |
| `page` | `depends_on` | `card` | 0.12 |
| `pages` | `depends_on` | `card` | 0.12 |
| `tsx` | `depends_on` | `card` | 0.12 |
| `blog` | `depends_on` | `components` | 0.09 |
| `blog` | `depends_on` | `tsx` | 0.09 |
| `section` | `depends_on` | `components` | 0.09 |
| `section` | `depends_on` | `tsx` | 0.09 |
| `app` | `depends_on` | `components` | 0.06 |
| `card` | `depends_on` | `components` | 0.06 |
| `card` | `depends_on` | `icon` | 0.06 |
| `card` | `depends_on` | `icons` | 0.06 |
| `card` | `depends_on` | `tsx` | 0.06 |
| `section` | `depends_on` | `icon` | 0.06 |
| `section` | `depends_on` | `icons` | 0.06 |
| `tsx` | `depends_on` | `blog` | 0.06 |
| `tsx` | `depends_on` | `contact` | 0.06 |
| `app` | `depends_on` | `blog` | 0.03 |
| `app` | `depends_on` | `contact` | 0.03 |
| `blog` | `depends_on` | `card` | 0.03 |
| `blog` | `depends_on` | `icon` | 0.03 |
| `blog` | `depends_on` | `icons` | 0.03 |
| `blog` | `depends_on` | `section` | 0.03 |
| `contact` | `depends_on` | `icon` | 0.03 |
| `contact` | `depends_on` | `icons` | 0.03 |
| `contact` | `depends_on` | `section` | 0.03 |
| `page` | `depends_on` | `blog` | 0.03 |

## Dialectic Prompts

- Thesis: `components` centralizes 23 files; Antithesis: `icon` pulls 12 files with 12 shared (Jaccard 0.52); Synthesis: should they merge, split by layer, or keep `depends_on` explicit?
- Thesis: `components` centralizes 23 files; Antithesis: `icons` pulls 13 files with 13 shared (Jaccard 0.57); Synthesis: should they merge, split by layer, or keep `depends_on` explicit?
- Thesis: `components` centralizes 23 files; Antithesis: `tsx` pulls 31 files with 23 shared (Jaccard 0.74); Synthesis: should they merge, split by layer, or keep `depends_on` explicit?
- Thesis: `icon` centralizes 12 files; Antithesis: `icons` pulls 13 files with 12 shared (Jaccard 0.92); Synthesis: should they merge, split by layer, or keep `bridges` explicit?
- Thesis: `icon` centralizes 12 files; Antithesis: `tsx` pulls 31 files with 12 shared (Jaccard 0.39); Synthesis: should they merge, split by layer, or keep `depends_on` explicit?
- Thesis: `icons` centralizes 13 files; Antithesis: `tsx` pulls 31 files with 13 shared (Jaccard 0.42); Synthesis: should they merge, split by layer, or keep `depends_on` explicit?
- Thesis: `page` centralizes 6 files; Antithesis: `pages` pulls 6 files with 6 shared (Jaccard 1.00); Synthesis: should they merge, split by layer, or keep `bridges` explicit?
