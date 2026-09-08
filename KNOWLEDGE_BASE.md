# Polyglot Codebase Knowledge Graph

> Generated offline by **readmenator**. 36 files, 2 symbols, 72 imports. Supports C, C++, Python, Go, Rust, JS/TS, Java, C#, Shell, PHP, Dart, GDScript, Nim, ASM, Ruby, Swift, Kotlin, Scala, Lua, Elixir.
> No LLMs. No tokens. Pure static analysis. See more [here](https://github.com/grisuno/ReadMenator)

**Start here:** Statistics Dashboard for scope, God Nodes for blast radius, Architecture Reference for per-file API. Agents: prefer `readmenator-agent/INDEX.md` + `SYMBOLS.md`.

**Total Files Parsed:** 36 | **Total Symbols Extracted:** 2 | **Total Imports:** 72
 | **Resolved Imports:** 62

<!-- ranking_model: v1.0 | weights: {ppr:0.45,auth:0.2,test:0.15,doc:0.1,fresh:0.1} | alpha:0.85 | commit:b3ca3bb | date:2026-07-18 -->


## Table of Contents

1. [Statistics Dashboard](#statistics-dashboard)
2. [Architectural Layers](#architectural-layers)
3. [Ranked Context](#ranked-context)
4. [God Nodes](#god-nodes)
5. [Community Analysis](#community-analysis)
6. [Suggested Questions](#suggested-questions)
7. [Hotspot Analysis](#hotspot-analysis)
8. [Change Impact Analysis](#change-impact-analysis)
9. [Orphans](#orphans)
10. [Query Recipes](#query-recipes)
11. [Structural Knowledge Map](#structural-knowledge-map)
12. [UML Class Diagram](#uml-class-diagram)
13. [Code Property Graph](#code-property-graph)
14. [Architecture Reference](#architecture-reference)
    - [PY (1 files)](#py-1-files)
    - [SH (1 files)](#sh-1-files)
    - [TS (3 files)](#ts-3-files)
    - [TSX (31 files)](#tsx-31-files)

---

## Statistics Dashboard

| Metric | Value |
|--------|-------|
| Total Files | 36 |
| Total Symbols | 2 |
| Total Imports | 72 |
| Call Edges | 82 |
| Inheritance Edges | 0 |
| Languages | 4 |
| Avg Symbols/File | 0.1 |
| Avg Imports/File | 2.0 |
| Resolved Imports | 62 |

### Top Files by Import Count (Fan-Out)

| File | Imports | Symbols | Language |
|------|---------|---------|----------|
| `HomePage.tsx` | 10 | 0 | tsx |
| `App.tsx` | 9 | 0 | tsx |
| `constants.ts` | 9 | 0 | ts |
| `AboutPage.tsx` | 6 | 0 | tsx |
| `Navbar.tsx` | 5 | 0 | tsx |
| `HeroSection.tsx` | 4 | 0 | tsx |
| `BlogPage.tsx` | 4 | 0 | tsx |
| `ContactPage.tsx` | 4 | 0 | tsx |
| `FrameworkPage.tsx` | 4 | 0 | tsx |
| `ServicesPage.tsx` | 4 | 0 | tsx |

---

## Architectural Layers

Auto-detected from path patterns, naming conventions, and imported frameworks.

| Layer | Files |
|-------|-------|
| presentation | 29 |
| utility | 5 |
| testing | 1 |
| infrastructure | 1 |

### presentation

- `App.tsx` (tsx, 0 symbols)
- `BlogPostCard.tsx` (tsx, 0 symbols)
- `ContactForm.tsx` (tsx, 1 symbols)
- `Footer.tsx` (tsx, 0 symbols)
- `HeroSection.tsx` (tsx, 0 symbols)
- `Navbar.tsx` (tsx, 0 symbols)
- `SectionTitle.tsx` (tsx, 0 symbols)
- `ServiceCard.tsx` (tsx, 0 symbols)
- `TeamMemberCard.tsx` (tsx, 0 symbols)
- `BriefcaseIcon.tsx` (tsx, 0 symbols)
- `ChevronRightIcon.tsx` (tsx, 0 symbols)
- `CodeIcon.tsx` (tsx, 0 symbols)
- `LinkedInIcon.tsx` (tsx, 0 symbols)
- `LockIcon.tsx` (tsx, 0 symbols)
- `MenuIcon.tsx` (tsx, 0 symbols)
- *... and 14 more*

### utility

- `app.py` (py, 0 symbols)
- `constants.ts` (ts, 0 symbols)
- `index.tsx` (tsx, 0 symbols)
- `install.sh` (sh, 0 symbols)
- `types.ts` (ts, 0 symbols)

### testing

- `TestimonialCard.tsx` (tsx, 0 symbols)

### infrastructure

- `vite.config.ts` (ts, 0 symbols)

---

## Ranked Context

Files ranked by composite score for the current query context. The ranking combines Personalized PageRank (query relevance), global authority, test coverage, documentation coverage, and code freshness. Model: v1.0.

| Rank | File | Composite | PPR | Authority | Test | Doc |
|------|------|-----------|-----|-----------|------|-----|
| 1 | `app.py` | 0.1000 | 0.0000 | 0.0000 | 0.00 | 1.00 |
| 2 | `types.ts` | 0.0577 | 0.0887 | 0.0887 | 0.00 | 0.00 |
| 3 | `constants.ts` | 0.0505 | 0.0776 | 0.0776 | 0.00 | 0.00 |
| 4 | `Button.tsx` | 0.0393 | 0.0605 | 0.0605 | 0.00 | 0.00 |
| 5 | `ChevronRightIcon.tsx` | 0.0317 | 0.0488 | 0.0488 | 0.00 | 0.00 |
| 6 | `SectionTitle.tsx` | 0.0316 | 0.0486 | 0.0486 | 0.00 | 0.00 |
| 7 | `ShieldIcon.tsx` | 0.0234 | 0.0360 | 0.0360 | 0.00 | 0.00 |
| 8 | `CodeIcon.tsx` | 0.0234 | 0.0360 | 0.0360 | 0.00 | 0.00 |
| 9 | `PuzzlePieceIcon.tsx` | 0.0227 | 0.0349 | 0.0349 | 0.00 | 0.00 |
| 10 | `LockIcon.tsx` | 0.0213 | 0.0328 | 0.0328 | 0.00 | 0.00 |

---

## God Nodes

Most architecturally central files ranked by combined import/export degree and symbol richness.

| File | Score | Connections | PageRank |
|------|-------|-------------|----------|
| `constants.ts` | 36.0 | | 0.0776 |
| `HomePage.tsx` | 20.0 | | 0.0000 |
| `App.tsx` | 16.0 | | 0.0000 |
| `AboutPage.tsx` | 14.0 | | 0.0000 |
| `SectionTitle.tsx` | 12.0 | | 0.0486 |
| `Button.tsx` | 10.1 | | 0.0605 |
| `HeroSection.tsx` | 10.0 | | 0.0000 |
| `Navbar.tsx` | 10.0 | | 0.0000 |
| `ContactPage.tsx` | 10.0 | | 0.0000 |
| `FrameworkPage.tsx` | 10.0 | | 0.0000 |

---

## Community Analysis

Files grouped by import-based community detection. Cohesion measures how tightly connected each community is internally.

### components/icons (Cohesion: 1.00)

**31 files** in this community:

- `App.tsx` (tsx, 0 symbols)
- `BlogPostCard.tsx` (tsx, 0 symbols)
- `ContactForm.tsx` (tsx, 1 symbols)
- `Footer.tsx` (tsx, 0 symbols)
- `HeroSection.tsx` (tsx, 0 symbols)
- `Navbar.tsx` (tsx, 0 symbols)
- `SectionTitle.tsx` (tsx, 0 symbols)
- `ServiceCard.tsx` (tsx, 0 symbols)
- `TeamMemberCard.tsx` (tsx, 0 symbols)
- `TestimonialCard.tsx` (tsx, 0 symbols)
- `ChevronRightIcon.tsx` (tsx, 0 symbols)
- `CodeIcon.tsx` (tsx, 0 symbols)
- `LinkedInIcon.tsx` (tsx, 0 symbols)
- `LockIcon.tsx` (tsx, 0 symbols)
- `MenuIcon.tsx` (tsx, 0 symbols)
- `NetworkIcon.tsx` (tsx, 0 symbols)
- `PuzzlePieceIcon.tsx` (tsx, 0 symbols)
- `ShieldIcon.tsx` (tsx, 0 symbols)
- `TargetIcon.tsx` (tsx, 0 symbols)
- `TwitterIcon.tsx` (tsx, 0 symbols)
- ... and 11 more files

---

## Suggested Questions

Auto-generated exploration prompts based on graph structure:

- What does constants.ts depend on, and what depends on it? (18 connections)
- What does HomePage.tsx depend on, and what depends on it? (10 connections)
- What does App.tsx depend on, and what depends on it? (8 connections)
- How are the 31 files in 'components/icons' related to each other?
- What is the overall architecture of this codebase?

---

## Hotspot Analysis

Files ranked by combined complexity (symbol count) and centrality (connection count). High-scoring files are architecturally critical and may need refactoring attention.

| File | Complexity | Centrality | Combined | Symbols | Connections |
|------|-----------|------------|----------|---------|-------------|
| `app.py` | 0.000 | 0.000 | 0.000 | 0 | 0 |
| `types.ts` | 0.000 | 0.135 | 0.081 | 0 | 5 |
| `constants.ts` | 0.000 | 1.000 | 0.600 | 0 | 37 |
| `Button.tsx` | 1.000 | 0.216 | 0.530 | 1 | 8 |
| `ChevronRightIcon.tsx` | 0.000 | 0.108 | 0.065 | 0 | 4 |
| `SectionTitle.tsx` | 0.000 | 0.189 | 0.114 | 0 | 7 |
| `ShieldIcon.tsx` | 0.000 | 0.081 | 0.049 | 0 | 3 |
| `CodeIcon.tsx` | 0.000 | 0.081 | 0.049 | 0 | 3 |
| `PuzzlePieceIcon.tsx` | 0.000 | 0.081 | 0.049 | 0 | 3 |
| `LockIcon.tsx` | 0.000 | 0.054 | 0.032 | 0 | 2 |
| `ContactForm.tsx` | 1.000 | 0.568 | 0.741 | 1 | 21 |
| `HomePage.tsx` | 0.000 | 0.595 | 0.357 | 0 | 22 |
| `App.tsx` | 0.000 | 0.568 | 0.341 | 0 | 21 |
| `Navbar.tsx` | 0.000 | 0.405 | 0.243 | 0 | 15 |
| `BlogPage.tsx` | 0.000 | 0.405 | 0.243 | 0 | 15 |

---

## Change Impact Analysis

Files sorted by how many other files would be affected if they changed. High-impact files should be changed with caution.

| File | Direct Dependents | Transitive Dependents | Total Impact |
|------|------------------|----------------------|--------------|
| `types.ts` | 5 | 10 | 15 |
| `CodeIcon.tsx` | 3 | 8 | 11 |
| `LinkedInIcon.tsx` | 1 | 10 | 11 |
| `LockIcon.tsx` | 2 | 9 | 11 |
| `NetworkIcon.tsx` | 1 | 10 | 11 |
| `PuzzlePieceIcon.tsx` | 3 | 8 | 11 |
| `ShieldIcon.tsx` | 3 | 8 | 11 |
| `TargetIcon.tsx` | 2 | 9 | 11 |
| `TwitterIcon.tsx` | 1 | 10 | 11 |
| `constants.ts` | 9 | 1 | 10 |
| `SectionTitle.tsx` | 6 | 1 | 7 |
| `Button.tsx` | 5 | 2 | 7 |
| `ChevronRightIcon.tsx` | 4 | 2 | 6 |
| `BlogPostCard.tsx` | 1 | 1 | 2 |
| `ContactForm.tsx` | 1 | 1 | 2 |

---

## Orphans

Files with no documentation or low connectivity. These are candidates for documentation investment or cleanup.

- `types.ts` (0 symbols, no doc)
- `constants.ts` (0 symbols, no doc)
- `Button.tsx` (1 symbols, no doc)
- `ChevronRightIcon.tsx` (0 symbols, no doc)
- `SectionTitle.tsx` (0 symbols, no doc)
- `ShieldIcon.tsx` (0 symbols, no doc)
- `CodeIcon.tsx` (0 symbols, no doc)
- `PuzzlePieceIcon.tsx` (0 symbols, no doc)
- `LockIcon.tsx` (0 symbols, no doc)
- `App.tsx` (0 symbols, no doc)
- `BlogPostCard.tsx` (0 symbols, no doc)
- `ContactForm.tsx` (1 symbols, no doc)
- `Footer.tsx` (0 symbols, no doc)
- `HeroSection.tsx` (0 symbols, no doc)
- `Navbar.tsx` (0 symbols, no doc)
- `ServiceCard.tsx` (0 symbols, no doc)
- `TeamMemberCard.tsx` (0 symbols, no doc)
- `TestimonialCard.tsx` (0 symbols, no doc)
- `BriefcaseIcon.tsx` (0 symbols, no doc)
- `LinkedInIcon.tsx` (0 symbols, no doc)
- *... and 15 more*

---

## Query Recipes

Example queries you can run against this knowledge base using the ranking engine:

```
# Find files most relevant to a concept
readmenator query "Where is the import resolver implemented?"

# Rank files by relevance to a topic
readmenator query "How does documentation generation work?"

# Explain why a file ranks highly
readmenator query "explain readmenator/_documentation.py"

# Trace dependency paths with ranked context
readmenator query "path from CLI to exporter"
```

The ranking model uses the following signals:

- **Personalized PageRank** (45% weight): query-specific relevance via seed propagation
- **Global Authority** (20% weight): structural importance via standard PageRank
- **Test Coverage** (15% weight): fraction of symbols referenced in test files
- **Doc Coverage** (10% weight): presence of docstrings and file-level docs
- **Freshness** (10% weight): recent modification activity

Results include score decomposition and justification paths for each ranked item.

---

## Structural Knowledge Map

```mermaid
graph TD
    classDef mod fill:#1e1e1e,stroke:#ff6666,stroke-width:2px,color:#fff;
    classDef cls fill:#2d2d2d,stroke:#4ec9b0,stroke-width:2px,color:#fff;
    classDef fn fill:#333,stroke:#dcdcaa,stroke-width:1px,color:#dcdcaa;
    classDef ext fill:#111,stroke:#666,stroke-dasharray:5 5,color:#aaa;
    subgraph community_0 ["components/icons"]
    constants_ts["constants.ts (ts)"]
    class constants_ts mod;
    App_tsx["App.tsx (tsx)"]
    class App_tsx mod;
    pages_HomePage_tsx["HomePage.tsx (tsx)"]
    class pages_HomePage_tsx mod;
    components_ContactForm_tsx["ContactForm.tsx (tsx)"]
    class components_ContactForm_tsx mod;
    components_ContactForm_tsx_handleSubmit["handleSubmit"]
    class components_ContactForm_tsx_handleSubmit fn;
    components_ContactForm_tsx --> components_ContactForm_tsx_handleSubmit
    components_Navbar_tsx["Navbar.tsx (tsx)"]
    class components_Navbar_tsx mod;
    pages_BlogPage_tsx["BlogPage.tsx (tsx)"]
    class pages_BlogPage_tsx mod;
    pages_ServicesPage_tsx["ServicesPage.tsx (tsx)"]
    class pages_ServicesPage_tsx mod;
    pages_AboutPage_tsx["AboutPage.tsx (tsx)"]
    class pages_AboutPage_tsx mod;
    pages_ContactPage_tsx["ContactPage.tsx (tsx)"]
    class pages_ContactPage_tsx mod;
    components_Footer_tsx["Footer.tsx (tsx)"]
    class components_Footer_tsx mod;
    pages_FrameworkPage_tsx["FrameworkPage.tsx (tsx)"]
    class pages_FrameworkPage_tsx mod;
    components_HeroSection_tsx["HeroSection.tsx (tsx)"]
    class components_HeroSection_tsx mod;
    components_BlogPostCard_tsx["BlogPostCard.tsx (tsx)"]
    class components_BlogPostCard_tsx mod;
    components_ServiceCard_tsx["ServiceCard.tsx (tsx)"]
    class components_ServiceCard_tsx mod;
    vite_config_ts["vite.config.ts (ts)"]
    class vite_config_ts mod;
    components_ui_Button_tsx["Button.tsx (tsx)"]
    class components_ui_Button_tsx mod;
    components_ui_Button_tsx_content["content"]
    class components_ui_Button_tsx_content fn;
    components_ui_Button_tsx --> components_ui_Button_tsx_content
    components_TeamMemberCard_tsx["TeamMemberCard.tsx (tsx)"]
    class components_TeamMemberCard_tsx mod;
    components_TestimonialCard_tsx["TestimonialCard.tsx (tsx)"]
    class components_TestimonialCard_tsx mod;
    index_tsx["index.tsx (tsx)"]
    class index_tsx mod;
    components_SectionTitle_tsx["SectionTitle.tsx (tsx)"]
    class components_SectionTitle_tsx mod;
    app_py["app.py (py)"]
    class app_py mod;
    components_icons_BriefcaseIcon_tsx["BriefcaseIcon.tsx (tsx)"]
    class components_icons_BriefcaseIcon_tsx mod;
    components_icons_ChevronRightIcon_tsx["ChevronRightIcon.tsx (tsx)"]
    class components_icons_ChevronRightIcon_tsx mod;
    components_icons_CodeIcon_tsx["CodeIcon.tsx (tsx)"]
    class components_icons_CodeIcon_tsx mod;
    components_icons_LinkedInIcon_tsx["LinkedInIcon.tsx (tsx)"]
    class components_icons_LinkedInIcon_tsx mod;
    components_icons_LockIcon_tsx["LockIcon.tsx (tsx)"]
    class components_icons_LockIcon_tsx mod;
    components_icons_MenuIcon_tsx["MenuIcon.tsx (tsx)"]
    class components_icons_MenuIcon_tsx mod;
    components_icons_NetworkIcon_tsx["NetworkIcon.tsx (tsx)"]
    class components_icons_NetworkIcon_tsx mod;
    components_icons_PuzzlePieceIcon_tsx["PuzzlePieceIcon.tsx (tsx)"]
    class components_icons_PuzzlePieceIcon_tsx mod;
    components_icons_ShieldIcon_tsx["ShieldIcon.tsx (tsx)"]
    class components_icons_ShieldIcon_tsx mod;
    components_icons_TargetIcon_tsx["TargetIcon.tsx (tsx)"]
    class components_icons_TargetIcon_tsx mod;
    components_icons_TwitterIcon_tsx["TwitterIcon.tsx (tsx)"]
    class components_icons_TwitterIcon_tsx mod;
    components_icons_UserGroupIcon_tsx["UserGroupIcon.tsx (tsx)"]
    class components_icons_UserGroupIcon_tsx mod;
    components_icons_XIcon_tsx["XIcon.tsx (tsx)"]
    class components_icons_XIcon_tsx mod;
    install_sh["install.sh (sh)"]
    class install_sh mod;
    types_ts["types.ts (ts)"]
    class types_ts mod;
    end
    App_tsx -- resolved_imports --> components_Navbar_tsx
    App_tsx -- resolved_imports --> components_Footer_tsx
    App_tsx -- resolved_imports --> pages_HomePage_tsx
    App_tsx -- resolved_imports --> pages_AboutPage_tsx
    App_tsx -- resolved_imports --> pages_ServicesPage_tsx
    App_tsx -- resolved_imports --> pages_FrameworkPage_tsx
    App_tsx -- resolved_imports --> pages_BlogPage_tsx
    App_tsx -- resolved_imports --> pages_ContactPage_tsx
    components_BlogPostCard_tsx -- resolved_imports --> types_ts
    components_BlogPostCard_tsx -- resolved_imports --> components_icons_ChevronRightIcon_tsx
    components_ContactForm_tsx -- resolved_imports --> components_ui_Button_tsx
    components_Footer_tsx -- resolved_imports --> constants_ts
    components_HeroSection_tsx -- resolved_imports --> components_ui_Button_tsx
    components_HeroSection_tsx -- resolved_imports --> constants_ts
    components_HeroSection_tsx -- resolved_imports --> components_icons_ChevronRightIcon_tsx
    components_HeroSection_tsx -- resolved_imports --> components_icons_CodeIcon_tsx
    components_Navbar_tsx -- resolved_imports --> constants_ts
    components_Navbar_tsx -- resolved_imports --> components_icons_MenuIcon_tsx
    components_Navbar_tsx -- resolved_imports --> components_icons_XIcon_tsx
    components_Navbar_tsx -- resolved_imports --> components_icons_ShieldIcon_tsx
    components_ServiceCard_tsx -- resolved_imports --> types_ts
    components_ServiceCard_tsx -- resolved_imports --> components_icons_ChevronRightIcon_tsx
    components_TeamMemberCard_tsx -- resolved_imports --> types_ts
    components_TestimonialCard_tsx -- resolved_imports --> types_ts
    constants_ts -- resolved_imports --> types_ts
    constants_ts -- resolved_imports --> components_icons_ShieldIcon_tsx
    constants_ts -- resolved_imports --> components_icons_TargetIcon_tsx
    constants_ts -- resolved_imports --> components_icons_CodeIcon_tsx
    constants_ts -- resolved_imports --> components_icons_LinkedInIcon_tsx
    constants_ts -- resolved_imports --> components_icons_TwitterIcon_tsx
    constants_ts -- resolved_imports --> components_icons_PuzzlePieceIcon_tsx
    constants_ts -- resolved_imports --> components_icons_NetworkIcon_tsx
    constants_ts -- resolved_imports --> components_icons_LockIcon_tsx
    pages_AboutPage_tsx -- resolved_imports --> components_SectionTitle_tsx
    pages_AboutPage_tsx -- resolved_imports --> components_TeamMemberCard_tsx
    pages_AboutPage_tsx -- resolved_imports --> constants_ts
    pages_AboutPage_tsx -- resolved_imports --> components_icons_ShieldIcon_tsx
    pages_AboutPage_tsx -- resolved_imports --> components_icons_TargetIcon_tsx
    pages_AboutPage_tsx -- resolved_imports --> components_icons_CodeIcon_tsx
    pages_BlogPage_tsx -- resolved_imports --> components_SectionTitle_tsx
    pages_BlogPage_tsx -- resolved_imports --> components_BlogPostCard_tsx
    pages_BlogPage_tsx -- resolved_imports --> constants_ts
    pages_ContactPage_tsx -- resolved_imports --> components_SectionTitle_tsx
    pages_ContactPage_tsx -- resolved_imports --> components_ContactForm_tsx
    pages_ContactPage_tsx -- resolved_imports --> constants_ts
    pages_ContactPage_tsx -- resolved_imports --> components_icons_LockIcon_tsx
    pages_FrameworkPage_tsx -- resolved_imports --> components_SectionTitle_tsx
    pages_FrameworkPage_tsx -- resolved_imports --> components_ui_Button_tsx
    pages_FrameworkPage_tsx -- resolved_imports --> constants_ts
    pages_FrameworkPage_tsx -- resolved_imports --> components_icons_PuzzlePieceIcon_tsx
    pages_HomePage_tsx -- resolved_imports --> components_HeroSection_tsx
    pages_HomePage_tsx -- resolved_imports --> components_SectionTitle_tsx
    pages_HomePage_tsx -- resolved_imports --> components_ServiceCard_tsx
    pages_HomePage_tsx -- resolved_imports --> components_TestimonialCard_tsx
    pages_HomePage_tsx -- resolved_imports --> constants_ts
    pages_HomePage_tsx -- resolved_imports --> components_ui_Button_tsx
    pages_HomePage_tsx -- resolved_imports --> components_icons_ChevronRightIcon_tsx
    pages_HomePage_tsx -- resolved_imports --> components_icons_PuzzlePieceIcon_tsx
    pages_HomePage_tsx -- resolved_imports --> components_icons_UserGroupIcon_tsx
    pages_ServicesPage_tsx -- resolved_imports --> components_SectionTitle_tsx
    pages_ServicesPage_tsx -- resolved_imports --> constants_ts
    pages_ServicesPage_tsx -- resolved_imports --> components_ui_Button_tsx
    ext_react_router_dom["react-router-dom"]
    class ext_react_router_dom ext;
    App_tsx -.->|imports| ext_react_router_dom
    ext___components_Navbar["Navbar"]
    class ext___components_Navbar ext;
    App_tsx -.->|imports| ext___components_Navbar
    ext___components_Footer["Footer"]
    class ext___components_Footer ext;
    App_tsx -.->|imports| ext___components_Footer
    ext___pages_HomePage["HomePage"]
    class ext___pages_HomePage ext;
    App_tsx -.->|imports| ext___pages_HomePage
    ext___pages_AboutPage["AboutPage"]
    class ext___pages_AboutPage ext;
    App_tsx -.->|imports| ext___pages_AboutPage
    ext___pages_ServicesPage["ServicesPage"]
    class ext___pages_ServicesPage ext;
    App_tsx -.->|imports| ext___pages_ServicesPage
    ext___pages_FrameworkPage["FrameworkPage"]
    class ext___pages_FrameworkPage ext;
    App_tsx -.->|imports| ext___pages_FrameworkPage
    ext___pages_BlogPage["BlogPage"]
    class ext___pages_BlogPage ext;
    App_tsx -.->|imports| ext___pages_BlogPage
    ext___pages_ContactPage["ContactPage"]
    class ext___pages_ContactPage ext;
    App_tsx -.->|imports| ext___pages_ContactPage
    ext_useLocation["useLocation"]
    class ext_useLocation ext;
    App_tsx -.->|imports| ext_useLocation
    ext_useEffect["useEffect"]
    class ext_useEffect ext;
    App_tsx -.->|imports| ext_useEffect
    ext_scrollTo["scrollTo"]
    class ext_scrollTo ext;
    App_tsx -.->|imports| ext_scrollTo
    ext_return["return"]
    class ext_return ext;
    App_tsx -.->|imports| ext_return
    components_BlogPostCard_tsx -.->|imports| ext_react_router_dom
    ext____types["types"]
    class ext____types ext;
    components_BlogPostCard_tsx -.->|imports| ext____types
    ext___icons_ChevronRightIcon["ChevronRightIcon"]
    class ext___icons_ChevronRightIcon ext;
    components_BlogPostCard_tsx -.->|imports| ext___icons_ChevronRightIcon
    components_BlogPostCard_tsx -.->|imports| ext_return
    ext___ui_Button["Button"]
    class ext___ui_Button ext;
    components_ContactForm_tsx -.->|imports| ext___ui_Button
    ext_useState["useState"]
    class ext_useState ext;
    components_ContactForm_tsx -.->|imports| ext_useState
    components_ContactForm_tsx -.->|imports| ext_useState
    components_ContactForm_tsx -.->|imports| ext_useState
    components_ContactForm_tsx -.->|imports| ext_useState
    ext_preventDefault["preventDefault"]
    class ext_preventDefault ext;
    components_ContactForm_tsx -.->|imports| ext_preventDefault
    ext_here["here"]
    class ext_here ext;
    components_ContactForm_tsx -.->|imports| ext_here
    ext_log["log"]
    class ext_log ext;
    components_ContactForm_tsx -.->|imports| ext_log
    ext_setSubmitted["setSubmitted"]
    class ext_setSubmitted ext;
    components_ContactForm_tsx -.->|imports| ext_setSubmitted
    ext_setName["setName"]
    class ext_setName ext;
    components_ContactForm_tsx -.->|imports| ext_setName
    ext_setEmail["setEmail"]
    class ext_setEmail ext;
    components_ContactForm_tsx -.->|imports| ext_setEmail
    ext_setMessage["setMessage"]
    class ext_setMessage ext;
    components_ContactForm_tsx -.->|imports| ext_setMessage
    ext_setTimeout["setTimeout"]
    class ext_setTimeout ext;
    components_ContactForm_tsx -.->|imports| ext_setTimeout
    components_ContactForm_tsx -.->|imports| ext_setSubmitted
    components_ContactForm_tsx -.->|imports| ext_return
    components_ContactForm_tsx -.->|imports| ext_return
    components_ContactForm_tsx -.->|imports| ext_setName
    components_ContactForm_tsx -.->|imports| ext_setEmail
    components_ContactForm_tsx -.->|imports| ext_setMessage
    components_Footer_tsx -.->|imports| ext_react_router_dom
    ext____constants["constants"]
    class ext____constants ext;
    components_Footer_tsx -.->|imports| ext____constants
    components_Footer_tsx -.->|imports| ext_return
    ext_slice["slice"]
    class ext_slice ext;
    components_Footer_tsx -.->|imports| ext_slice
    ext_map["map"]
    class ext_map ext;
    components_Footer_tsx -.->|imports| ext_map
    components_Footer_tsx -.->|imports| ext_slice
    components_Footer_tsx -.->|imports| ext_map
    ext_replace["replace"]
    class ext_replace ext;
    components_Footer_tsx -.->|imports| ext_replace
    ext_getFullYear["getFullYear"]
    class ext_getFullYear ext;
    components_Footer_tsx -.->|imports| ext_getFullYear
    components_HeroSection_tsx -.->|imports| ext___ui_Button
    components_HeroSection_tsx -.->|imports| ext____constants
    components_HeroSection_tsx -.->|imports| ext___icons_ChevronRightIcon
    ext___icons_CodeIcon["CodeIcon"]
    class ext___icons_CodeIcon ext;
    components_HeroSection_tsx -.->|imports| ext___icons_CodeIcon
    components_HeroSection_tsx -.->|imports| ext_return
    components_Navbar_tsx -.->|imports| ext_react_router_dom
    components_Navbar_tsx -.->|imports| ext____constants
    ext___icons_MenuIcon["MenuIcon"]
    class ext___icons_MenuIcon ext;
    components_Navbar_tsx -.->|imports| ext___icons_MenuIcon
    ext___icons_XIcon["XIcon"]
    class ext___icons_XIcon ext;
    components_Navbar_tsx -.->|imports| ext___icons_XIcon
    ext___icons_ShieldIcon["ShieldIcon"]
    class ext___icons_ShieldIcon ext;
    components_Navbar_tsx -.->|imports| ext___icons_ShieldIcon
    components_Navbar_tsx -.->|imports| ext_useState
    components_Navbar_tsx -.->|imports| ext_return
    ext_setMobileMenuOpen["setMobileMenuOpen"]
    class ext_setMobileMenuOpen ext;
    components_Navbar_tsx -.->|imports| ext_setMobileMenuOpen
    components_Navbar_tsx -.->|imports| ext_map
    components_Navbar_tsx -.->|imports| ext_setMobileMenuOpen
    components_SectionTitle_tsx -.->|imports| ext_return
    components_ServiceCard_tsx -.->|imports| ext_react_router_dom
    components_ServiceCard_tsx -.->|imports| ext____types
    components_ServiceCard_tsx -.->|imports| ext___icons_ChevronRightIcon
    components_ServiceCard_tsx -.->|imports| ext_return
    components_TeamMemberCard_tsx -.->|imports| ext____types
    components_TeamMemberCard_tsx -.->|imports| ext_return
    components_TestimonialCard_tsx -.->|imports| ext____types
    components_TestimonialCard_tsx -.->|imports| ext_return
    components_ui_Button_tsx -.->|imports| ext_react_router_dom
    components_ui_Button_tsx -.->|imports| ext_return
    components_ui_Button_tsx -.->|imports| ext_return
    ext___types["types"]
    class ext___types ext;
    constants_ts -.->|imports| ext___types
    ext___components_icons_ShieldIcon["ShieldIcon"]
    class ext___components_icons_ShieldIcon ext;
    constants_ts -.->|imports| ext___components_icons_ShieldIcon
    ext___components_icons_TargetIcon["TargetIcon"]
    class ext___components_icons_TargetIcon ext;
    constants_ts -.->|imports| ext___components_icons_TargetIcon
    ext___components_icons_CodeIcon["CodeIcon"]
    class ext___components_icons_CodeIcon ext;
    constants_ts -.->|imports| ext___components_icons_CodeIcon
    ext___components_icons_LinkedInIcon["LinkedInIcon"]
    class ext___components_icons_LinkedInIcon ext;
    constants_ts -.->|imports| ext___components_icons_LinkedInIcon
    ext___components_icons_TwitterIcon["TwitterIcon"]
    class ext___components_icons_TwitterIcon ext;
    constants_ts -.->|imports| ext___components_icons_TwitterIcon
    ext___components_icons_PuzzlePieceIcon["PuzzlePieceIcon"]
    class ext___components_icons_PuzzlePieceIcon ext;
    constants_ts -.->|imports| ext___components_icons_PuzzlePieceIcon
    ext___components_icons_NetworkIcon["NetworkIcon"]
    class ext___components_icons_NetworkIcon ext;
    constants_ts -.->|imports| ext___components_icons_NetworkIcon
    ext___components_icons_LockIcon["LockIcon"]
    class ext___components_icons_LockIcon ext;
    constants_ts -.->|imports| ext___components_icons_LockIcon
    ext_procedures["procedures"]
    class ext_procedures ext;
    constants_ts -.->|imports| ext_procedures
    ext_createElement["createElement"]
    class ext_createElement ext;
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    constants_ts -.->|imports| ext_createElement
    ext_getElementById["getElementById"]
    class ext_getElementById ext;
    index_tsx -.->|imports| ext_getElementById
    ext_createRoot["createRoot"]
    class ext_createRoot ext;
    index_tsx -.->|imports| ext_createRoot
    ext_render["render"]
    class ext_render ext;
    index_tsx -.->|imports| ext_render
    ext____components_SectionTitle["SectionTitle"]
    class ext____components_SectionTitle ext;
    pages_AboutPage_tsx -.->|imports| ext____components_SectionTitle
    ext____components_TeamMemberCard["TeamMemberCard"]
    class ext____components_TeamMemberCard ext;
    pages_AboutPage_tsx -.->|imports| ext____components_TeamMemberCard
    pages_AboutPage_tsx -.->|imports| ext____constants
    ext____components_icons_ShieldIcon["ShieldIcon"]
    class ext____components_icons_ShieldIcon ext;
    pages_AboutPage_tsx -.->|imports| ext____components_icons_ShieldIcon
    ext____components_icons_TargetIcon["TargetIcon"]
    class ext____components_icons_TargetIcon ext;
    pages_AboutPage_tsx -.->|imports| ext____components_icons_TargetIcon
    ext____components_icons_CodeIcon["CodeIcon"]
    class ext____components_icons_CodeIcon ext;
    pages_AboutPage_tsx -.->|imports| ext____components_icons_CodeIcon
    pages_AboutPage_tsx -.->|imports| ext_return
    pages_BlogPage_tsx -.->|imports| ext_react_router_dom
    pages_BlogPage_tsx -.->|imports| ext____components_SectionTitle
    ext____components_BlogPostCard["BlogPostCard"]
    class ext____components_BlogPostCard ext;
    pages_BlogPage_tsx -.->|imports| ext____components_BlogPostCard
    pages_BlogPage_tsx -.->|imports| ext____constants
    pages_BlogPage_tsx -.->|imports| ext_useLocation
    pages_BlogPage_tsx -.->|imports| ext_useEffect
    ext_present["present"]
    class ext_present ext;
    pages_BlogPage_tsx -.->|imports| ext_present
    pages_BlogPage_tsx -.->|imports| ext_replace
    pages_BlogPage_tsx -.->|imports| ext_scrollTo
    pages_BlogPage_tsx -.->|imports| ext_log
    pages_BlogPage_tsx -.->|imports| ext_return
    pages_ContactPage_tsx -.->|imports| ext____components_SectionTitle
    ext____components_ContactForm["ContactForm"]
    class ext____components_ContactForm ext;
    pages_ContactPage_tsx -.->|imports| ext____components_ContactForm
    pages_ContactPage_tsx -.->|imports| ext____constants
    ext____components_icons_LockIcon["LockIcon"]
    class ext____components_icons_LockIcon ext;
    pages_ContactPage_tsx -.->|imports| ext____components_icons_LockIcon
    pages_ContactPage_tsx -.->|imports| ext_return
    pages_ContactPage_tsx -.->|imports| ext_map
    ext_cloneElement["cloneElement"]
    class ext_cloneElement ext;
    pages_ContactPage_tsx -.->|imports| ext_cloneElement
    pages_FrameworkPage_tsx -.->|imports| ext____components_SectionTitle
    ext____components_ui_Button["Button"]
    class ext____components_ui_Button ext;
    pages_FrameworkPage_tsx -.->|imports| ext____components_ui_Button
    pages_FrameworkPage_tsx -.->|imports| ext____constants
    ext____components_icons_PuzzlePieceIcon["PuzzlePieceIcon"]
    class ext____components_icons_PuzzlePieceIcon ext;
    pages_FrameworkPage_tsx -.->|imports| ext____components_icons_PuzzlePieceIcon
    pages_FrameworkPage_tsx -.->|imports| ext_return
    pages_FrameworkPage_tsx -.->|imports| ext_cloneElement
    ext____components_HeroSection["HeroSection"]
    class ext____components_HeroSection ext;
    pages_HomePage_tsx -.->|imports| ext____components_HeroSection
    pages_HomePage_tsx -.->|imports| ext____components_SectionTitle
    ext____components_ServiceCard["ServiceCard"]
    class ext____components_ServiceCard ext;
    pages_HomePage_tsx -.->|imports| ext____components_ServiceCard
    ext____components_TestimonialCard["TestimonialCard"]
    class ext____components_TestimonialCard ext;
    pages_HomePage_tsx -.->|imports| ext____components_TestimonialCard
    pages_HomePage_tsx -.->|imports| ext____constants
    pages_HomePage_tsx -.->|imports| ext____components_ui_Button
    pages_HomePage_tsx -.->|imports| ext_react_router_dom
    ext____components_icons_ChevronRightIcon["ChevronRightIcon"]
    class ext____components_icons_ChevronRightIcon ext;
    pages_HomePage_tsx -.->|imports| ext____components_icons_ChevronRightIcon
    pages_HomePage_tsx -.->|imports| ext____components_icons_PuzzlePieceIcon
    ext____components_icons_UserGroupIcon["UserGroupIcon"]
    class ext____components_icons_UserGroupIcon ext;
    pages_HomePage_tsx -.->|imports| ext____components_icons_UserGroupIcon
    pages_HomePage_tsx -.->|imports| ext_return
    pages_HomePage_tsx -.->|imports| ext_map
    pages_ServicesPage_tsx -.->|imports| ext_react_router_dom
    pages_ServicesPage_tsx -.->|imports| ext____components_SectionTitle
    pages_ServicesPage_tsx -.->|imports| ext____constants
    pages_ServicesPage_tsx -.->|imports| ext____components_ui_Button
    pages_ServicesPage_tsx -.->|imports| ext_useLocation
    pages_ServicesPage_tsx -.->|imports| ext_useEffect
    pages_ServicesPage_tsx -.->|imports| ext_replace
    pages_ServicesPage_tsx -.->|imports| ext_getElementById
    ext_scrollIntoView["scrollIntoView"]
    class ext_scrollIntoView ext;
    pages_ServicesPage_tsx -.->|imports| ext_scrollIntoView
    pages_ServicesPage_tsx -.->|imports| ext_return
    pages_ServicesPage_tsx -.->|imports| ext_cloneElement
    ext_vite["vite"]
    class ext_vite ext;
    vite_config_ts -.->|imports| ext_vite
    ext_defineConfig["defineConfig"]
    class ext_defineConfig ext;
    vite_config_ts -.->|imports| ext_defineConfig
    ext_loadEnv["loadEnv"]
    class ext_loadEnv ext;
    vite_config_ts -.->|imports| ext_loadEnv
    ext_stringify["stringify"]
    class ext_stringify ext;
    vite_config_ts -.->|imports| ext_stringify
    vite_config_ts -.->|imports| ext_stringify
    ext_resolve["resolve"]
    class ext_resolve ext;
    vite_config_ts -.->|imports| ext_resolve
```

---

## Code Property Graph

Machine-readable Code Property Graph (CPG) in JSON-LD format. This block allows AI agents to parse the full structural graph without additional file reads. Compatible with GraphRAG pipelines.

```json
{"@context": "https://schema.org", "analysis": {"communities": [{"cohesion": 1.0, "id": 0, "label": "components/icons", "size": 31}], "god_nodes": [{"node_id": "constants.ts", "score": 36.0}, {"node_id": "pages/HomePage.tsx", "score": 20.0}, {"node_id": "App.tsx", "score": 16.0}, {"node_id": "pages/AboutPage.tsx", "score": 14.0}, {"node_id": "components/SectionTitle.tsx", "score": 12.0}, {"node_id": "components/ui/Button.tsx", "score": 10.1}, {"node_id": "components/HeroSection.tsx", "score": 10.0}, {"node_id": "components/Navbar.tsx", "score": 10.0}, {"node_id": "pages/ContactPage.tsx", "score": 10.0}, {"node_id": "pages/FrameworkPage.tsx", "score": 10.0}], "surprising_connections": []}, "edges": [{"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./components/Navbar"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./components/Footer"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./pages/HomePage"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./pages/AboutPage"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./pages/ServicesPage"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./pages/FrameworkPage"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./pages/BlogPage"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "App.tsx", "target": "./pages/ContactPage"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "App.tsx", "target": "useLocation"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "App.tsx", "target": "useEffect"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "App.tsx", "target": "scrollTo"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "App.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/BlogPostCard.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/BlogPostCard.tsx", "target": "../types"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/BlogPostCard.tsx", "target": "./icons/ChevronRightIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/BlogPostCard.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/ContactForm.tsx", "target": "./ui/Button"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "useState"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "useState"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "useState"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "useState"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "preventDefault"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "here"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "log"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setSubmitted"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setName"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setEmail"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setMessage"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setTimeout"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setSubmitted"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setName"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setEmail"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ContactForm.tsx", "target": "setMessage"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Footer.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Footer.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "slice"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "map"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "slice"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "map"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "replace"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Footer.tsx", "target": "getFullYear"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/HeroSection.tsx", "target": "./ui/Button"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/HeroSection.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/HeroSection.tsx", "target": "./icons/ChevronRightIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/HeroSection.tsx", "target": "./icons/CodeIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/HeroSection.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Navbar.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Navbar.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Navbar.tsx", "target": "./icons/MenuIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Navbar.tsx", "target": "./icons/XIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/Navbar.tsx", "target": "./icons/ShieldIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Navbar.tsx", "target": "useState"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Navbar.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Navbar.tsx", "target": "setMobileMenuOpen"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Navbar.tsx", "target": "map"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/Navbar.tsx", "target": "setMobileMenuOpen"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/SectionTitle.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/ServiceCard.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/ServiceCard.tsx", "target": "../types"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/ServiceCard.tsx", "target": "./icons/ChevronRightIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ServiceCard.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/TeamMemberCard.tsx", "target": "../types"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/TeamMemberCard.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/TestimonialCard.tsx", "target": "../types"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/TestimonialCard.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "components/ui/Button.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ui/Button.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "components/ui/Button.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./types"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/ShieldIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/TargetIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/CodeIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/LinkedInIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/TwitterIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/PuzzlePieceIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/NetworkIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "constants.ts", "target": "./components/icons/LockIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "procedures"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "constants.ts", "target": "createElement"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "index.tsx", "target": "getElementById"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "index.tsx", "target": "createRoot"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "index.tsx", "target": "render"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/AboutPage.tsx", "target": "../components/SectionTitle"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/AboutPage.tsx", "target": "../components/TeamMemberCard"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/AboutPage.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/AboutPage.tsx", "target": "../components/icons/ShieldIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/AboutPage.tsx", "target": "../components/icons/TargetIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/AboutPage.tsx", "target": "../components/icons/CodeIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/AboutPage.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/BlogPage.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/BlogPage.tsx", "target": "../components/SectionTitle"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/BlogPage.tsx", "target": "../components/BlogPostCard"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/BlogPage.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "useLocation"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "useEffect"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "present"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "replace"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "scrollTo"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "log"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/BlogPage.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ContactPage.tsx", "target": "../components/SectionTitle"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ContactPage.tsx", "target": "../components/ContactForm"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ContactPage.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ContactPage.tsx", "target": "../components/icons/LockIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ContactPage.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ContactPage.tsx", "target": "map"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ContactPage.tsx", "target": "cloneElement"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/FrameworkPage.tsx", "target": "../components/SectionTitle"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/FrameworkPage.tsx", "target": "../components/ui/Button"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/FrameworkPage.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/FrameworkPage.tsx", "target": "../components/icons/PuzzlePieceIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/FrameworkPage.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/FrameworkPage.tsx", "target": "cloneElement"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/HeroSection"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/SectionTitle"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/ServiceCard"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/TestimonialCard"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/ui/Button"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/icons/ChevronRightIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/icons/PuzzlePieceIcon"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/HomePage.tsx", "target": "../components/icons/UserGroupIcon"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/HomePage.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/HomePage.tsx", "target": "map"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ServicesPage.tsx", "target": "react-router-dom"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ServicesPage.tsx", "target": "../components/SectionTitle"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ServicesPage.tsx", "target": "../constants"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "pages/ServicesPage.tsx", "target": "../components/ui/Button"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "useLocation"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "useEffect"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "replace"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "getElementById"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "scrollIntoView"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "return"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "pages/ServicesPage.tsx", "target": "cloneElement"}, {"confidence": "EXTRACTED", "relation": "imports", "source": "vite.config.ts", "target": "vite"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "vite.config.ts", "target": "defineConfig"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "vite.config.ts", "target": "loadEnv"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "vite.config.ts", "target": "stringify"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "vite.config.ts", "target": "stringify"}, {"confidence": "EXTRACTED", "relation": "calls", "source": "vite.config.ts", "target": "resolve"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "components/Navbar.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "components/Footer.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "pages/HomePage.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "pages/AboutPage.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "pages/ServicesPage.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "pages/FrameworkPage.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "pages/BlogPage.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "App.tsx", "target": "pages/ContactPage.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/BlogPostCard.tsx", "target": "types.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/BlogPostCard.tsx", "target": "components/icons/ChevronRightIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/ContactForm.tsx", "target": "components/ui/Button.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/Footer.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/HeroSection.tsx", "target": "components/ui/Button.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/HeroSection.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/HeroSection.tsx", "target": "components/icons/ChevronRightIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/HeroSection.tsx", "target": "components/icons/CodeIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/Navbar.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/Navbar.tsx", "target": "components/icons/MenuIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/Navbar.tsx", "target": "components/icons/XIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/Navbar.tsx", "target": "components/icons/ShieldIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/ServiceCard.tsx", "target": "types.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/ServiceCard.tsx", "target": "components/icons/ChevronRightIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/TeamMemberCard.tsx", "target": "types.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "components/TestimonialCard.tsx", "target": "types.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "types.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/ShieldIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/TargetIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/CodeIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/LinkedInIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/TwitterIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/PuzzlePieceIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/NetworkIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "constants.ts", "target": "components/icons/LockIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/AboutPage.tsx", "target": "components/SectionTitle.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/AboutPage.tsx", "target": "components/TeamMemberCard.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/AboutPage.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/AboutPage.tsx", "target": "components/icons/ShieldIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/AboutPage.tsx", "target": "components/icons/TargetIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/AboutPage.tsx", "target": "components/icons/CodeIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/BlogPage.tsx", "target": "components/SectionTitle.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/BlogPage.tsx", "target": "components/BlogPostCard.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/BlogPage.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ContactPage.tsx", "target": "components/SectionTitle.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ContactPage.tsx", "target": "components/ContactForm.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ContactPage.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ContactPage.tsx", "target": "components/icons/LockIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/FrameworkPage.tsx", "target": "components/SectionTitle.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/FrameworkPage.tsx", "target": "components/ui/Button.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/FrameworkPage.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/FrameworkPage.tsx", "target": "components/icons/PuzzlePieceIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/HeroSection.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/SectionTitle.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/ServiceCard.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/TestimonialCard.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/ui/Button.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/icons/ChevronRightIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/icons/PuzzlePieceIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/HomePage.tsx", "target": "components/icons/UserGroupIcon.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ServicesPage.tsx", "target": "components/SectionTitle.tsx"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ServicesPage.tsx", "target": "constants.ts"}, {"confidence": "EXTRACTED", "relation": "resolved_imports", "source": "pages/ServicesPage.tsx", "target": "components/ui/Button.tsx"}], "generator": "readmenator", "metadata": {"edge_count": 216, "file_count": 36, "language_count": 4, "symbol_count": 2}, "nodes": [{"id": "App.tsx", "kind": "module", "label": "App.tsx", "language": "tsx", "sha256": "fdc933d3ac5f4b33", "symbol_count": 0, "symbols": []}, {"doc": "_*_ coding: utf8 _*_", "id": "app.py", "kind": "module", "label": "app.py", "language": "py", "sha256": "57b21bdb023585b8", "symbol_count": 0, "symbols": []}, {"id": "components/BlogPostCard.tsx", "kind": "module", "label": "BlogPostCard.tsx", "language": "tsx", "sha256": "f55c66146a3b07a9", "symbol_count": 0, "symbols": []}, {"id": "components/ContactForm.tsx", "kind": "module", "label": "ContactForm.tsx", "language": "tsx", "sha256": "edb12b6e1b8ea52e", "symbol_count": 1, "symbols": [{"kind": "function", "line": 11, "name": "handleSubmit"}]}, {"id": "components/Footer.tsx", "kind": "module", "label": "Footer.tsx", "language": "tsx", "sha256": "e52932ce9aaf1bf5", "symbol_count": 0, "symbols": []}, {"id": "components/HeroSection.tsx", "kind": "module", "label": "HeroSection.tsx", "language": "tsx", "sha256": "ae07290d6a834322", "symbol_count": 0, "symbols": []}, {"id": "components/Navbar.tsx", "kind": "module", "label": "Navbar.tsx", "language": "tsx", "sha256": "94a0de42a66e3f67", "symbol_count": 0, "symbols": []}, {"id": "components/SectionTitle.tsx", "kind": "module", "label": "SectionTitle.tsx", "language": "tsx", "sha256": "4ab0e1fb04ccc3bc", "symbol_count": 0, "symbols": []}, {"id": "components/ServiceCard.tsx", "kind": "module", "label": "ServiceCard.tsx", "language": "tsx", "sha256": "9027ba737d41e4b6", "symbol_count": 0, "symbols": []}, {"id": "components/TeamMemberCard.tsx", "kind": "module", "label": "TeamMemberCard.tsx", "language": "tsx", "sha256": "af1f65a8bff651e3", "symbol_count": 0, "symbols": []}, {"id": "components/TestimonialCard.tsx", "kind": "module", "label": "TestimonialCard.tsx", "language": "tsx", "sha256": "8e2d6b60133e94e0", "symbol_count": 0, "symbols": []}, {"id": "components/icons/BriefcaseIcon.tsx", "kind": "module", "label": "BriefcaseIcon.tsx", "language": "tsx", "sha256": "a81affd607dd7adf", "symbol_count": 0, "symbols": []}, {"id": "components/icons/ChevronRightIcon.tsx", "kind": "module", "label": "ChevronRightIcon.tsx", "language": "tsx", "sha256": "8123f993bea06122", "symbol_count": 0, "symbols": []}, {"id": "components/icons/CodeIcon.tsx", "kind": "module", "label": "CodeIcon.tsx", "language": "tsx", "sha256": "958b05ac5b5060b9", "symbol_count": 0, "symbols": []}, {"id": "components/icons/LinkedInIcon.tsx", "kind": "module", "label": "LinkedInIcon.tsx", "language": "tsx", "sha256": "6c8d2fa50e31a33d", "symbol_count": 0, "symbols": []}, {"id": "components/icons/LockIcon.tsx", "kind": "module", "label": "LockIcon.tsx", "language": "tsx", "sha256": "8bf2b546f0cc65c7", "symbol_count": 0, "symbols": []}, {"id": "components/icons/MenuIcon.tsx", "kind": "module", "label": "MenuIcon.tsx", "language": "tsx", "sha256": "329720e23f2dbf00", "symbol_count": 0, "symbols": []}, {"id": "components/icons/NetworkIcon.tsx", "kind": "module", "label": "NetworkIcon.tsx", "language": "tsx", "sha256": "f8c82a0843e0c6af", "symbol_count": 0, "symbols": []}, {"id": "components/icons/PuzzlePieceIcon.tsx", "kind": "module", "label": "PuzzlePieceIcon.tsx", "language": "tsx", "sha256": "6fb5091bb44e4de1", "symbol_count": 0, "symbols": []}, {"id": "components/icons/ShieldIcon.tsx", "kind": "module", "label": "ShieldIcon.tsx", "language": "tsx", "sha256": "df7654d76c30f1ee", "symbol_count": 0, "symbols": []}, {"id": "components/icons/TargetIcon.tsx", "kind": "module", "label": "TargetIcon.tsx", "language": "tsx", "sha256": "26ff23e4bbcb1acd", "symbol_count": 0, "symbols": []}, {"id": "components/icons/TwitterIcon.tsx", "kind": "module", "label": "TwitterIcon.tsx", "language": "tsx", "sha256": "c1159b891026912b", "symbol_count": 0, "symbols": []}, {"id": "components/icons/UserGroupIcon.tsx", "kind": "module", "label": "UserGroupIcon.tsx", "language": "tsx", "sha256": "a7f682c0a4c17543", "symbol_count": 0, "symbols": []}, {"id": "components/icons/XIcon.tsx", "kind": "module", "label": "XIcon.tsx", "language": "tsx", "sha256": "7f7e66216103cc05", "symbol_count": 0, "symbols": []}, {"id": "components/ui/Button.tsx", "kind": "module", "label": "Button.tsx", "language": "tsx", "sha256": "2c96ba89f6a79102", "symbol_count": 1, "symbols": [{"kind": "function", "line": 41, "name": "content"}]}, {"id": "constants.ts", "kind": "module", "label": "constants.ts", "language": "ts", "sha256": "7bcf4ca8a224f699", "symbol_count": 0, "symbols": []}, {"id": "index.tsx", "kind": "module", "label": "index.tsx", "language": "tsx", "sha256": "41fcca434a259d8c", "symbol_count": 0, "symbols": []}, {"id": "install.sh", "kind": "module", "label": "install.sh", "language": "sh", "sha256": "c907d80fd6734993", "symbol_count": 0, "symbols": []}, {"id": "pages/AboutPage.tsx", "kind": "module", "label": "AboutPage.tsx", "language": "tsx", "sha256": "325d92b6e305b769", "symbol_count": 0, "symbols": []}, {"id": "pages/BlogPage.tsx", "kind": "module", "label": "BlogPage.tsx", "language": "tsx", "sha256": "67824bb36af9bdfc", "symbol_count": 0, "symbols": []}, {"id": "pages/ContactPage.tsx", "kind": "module", "label": "ContactPage.tsx", "language": "tsx", "sha256": "cb541edbc2846a96", "symbol_count": 0, "symbols": []}, {"id": "pages/FrameworkPage.tsx", "kind": "module", "label": "FrameworkPage.tsx", "language": "tsx", "sha256": "3f4178394f964477", "symbol_count": 0, "symbols": []}, {"id": "pages/HomePage.tsx", "kind": "module", "label": "HomePage.tsx", "language": "tsx", "sha256": "0ef0c79933ac2734", "symbol_count": 0, "symbols": []}, {"id": "pages/ServicesPage.tsx", "kind": "module", "label": "ServicesPage.tsx", "language": "tsx", "sha256": "21091dd69e6f68fc", "symbol_count": 0, "symbols": []}, {"id": "types.ts", "kind": "module", "label": "types.ts", "language": "ts", "sha256": "171b32d95a22fa64", "symbol_count": 0, "symbols": []}, {"id": "vite.config.ts", "kind": "module", "label": "vite.config.ts", "language": "ts", "sha256": "a1cadb71ffa49fb1", "symbol_count": 0, "symbols": []}], "type": "CodePropertyGraph", "version": "1.0"}
```

---

## Architecture Reference

### PY (1 files)

#### `app.py`
**Path:** `app.py`
**File Doc:** *_*_ coding: utf8 _*_*

*No symbols extracted*

### SH (1 files)

#### `install.sh`
**Path:** `install.sh`

*No symbols extracted*

### TS (3 files)

#### `constants.ts`
**Path:** `constants.ts`

*No symbols extracted*

#### `types.ts`
**Path:** `types.ts`

*No symbols extracted*

#### `vite.config.ts`
**Path:** `vite.config.ts`

*No symbols extracted*

### TSX (31 files)

#### `App.tsx`
**Path:** `App.tsx`

*No symbols extracted*

#### `BlogPostCard.tsx`
**Path:** `components/BlogPostCard.tsx`

*No symbols extracted*

#### `ContactForm.tsx`
**Path:** `components/ContactForm.tsx`

**Functions:**
- `handleSubmit` (line 11)

#### `Footer.tsx`
**Path:** `components/Footer.tsx`

*No symbols extracted*

#### `HeroSection.tsx`
**Path:** `components/HeroSection.tsx`

*No symbols extracted*

#### `Navbar.tsx`
**Path:** `components/Navbar.tsx`

*No symbols extracted*

#### `SectionTitle.tsx`
**Path:** `components/SectionTitle.tsx`

*No symbols extracted*

#### `ServiceCard.tsx`
**Path:** `components/ServiceCard.tsx`

*No symbols extracted*

#### `TeamMemberCard.tsx`
**Path:** `components/TeamMemberCard.tsx`

*No symbols extracted*

#### `TestimonialCard.tsx`
**Path:** `components/TestimonialCard.tsx`

*No symbols extracted*

#### `BriefcaseIcon.tsx`
**Path:** `components/icons/BriefcaseIcon.tsx`

*No symbols extracted*

#### `ChevronRightIcon.tsx`
**Path:** `components/icons/ChevronRightIcon.tsx`

*No symbols extracted*

#### `CodeIcon.tsx`
**Path:** `components/icons/CodeIcon.tsx`

*No symbols extracted*

#### `LinkedInIcon.tsx`
**Path:** `components/icons/LinkedInIcon.tsx`

*No symbols extracted*

#### `LockIcon.tsx`
**Path:** `components/icons/LockIcon.tsx`

*No symbols extracted*

#### `MenuIcon.tsx`
**Path:** `components/icons/MenuIcon.tsx`

*No symbols extracted*

#### `NetworkIcon.tsx`
**Path:** `components/icons/NetworkIcon.tsx`

*No symbols extracted*

#### `PuzzlePieceIcon.tsx`
**Path:** `components/icons/PuzzlePieceIcon.tsx`

*No symbols extracted*

#### `ShieldIcon.tsx`
**Path:** `components/icons/ShieldIcon.tsx`

*No symbols extracted*

#### `TargetIcon.tsx`
**Path:** `components/icons/TargetIcon.tsx`

*No symbols extracted*

#### `TwitterIcon.tsx`
**Path:** `components/icons/TwitterIcon.tsx`

*No symbols extracted*

#### `UserGroupIcon.tsx`
**Path:** `components/icons/UserGroupIcon.tsx`

*No symbols extracted*

#### `XIcon.tsx`
**Path:** `components/icons/XIcon.tsx`

*No symbols extracted*

#### `Button.tsx`
**Path:** `components/ui/Button.tsx`

**Functions:**
- `content` (line 41)

#### `index.tsx`
**Path:** `index.tsx`

*No symbols extracted*

#### `AboutPage.tsx`
**Path:** `pages/AboutPage.tsx`

*No symbols extracted*

#### `BlogPage.tsx`
**Path:** `pages/BlogPage.tsx`

*No symbols extracted*

#### `ContactPage.tsx`
**Path:** `pages/ContactPage.tsx`

*No symbols extracted*

#### `FrameworkPage.tsx`
**Path:** `pages/FrameworkPage.tsx`

*No symbols extracted*

#### `HomePage.tsx`
**Path:** `pages/HomePage.tsx`

*No symbols extracted*

#### `ServicesPage.tsx`
**Path:** `pages/ServicesPage.tsx`

*No symbols extracted*
