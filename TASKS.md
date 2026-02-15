# Task Breakdown — Portfolio Website

Based on [PRD.md](./PRD.md) and CV data.
Design: **Apple-inspired minimalism** — dark, spacious, monochrome, content-first.

---

## Phase 1: Project Setup

- [x] **1.1** Initialize Next.js project — Create Next.js 14+ app with App Router, TypeScript, Tailwind CSS
- [x] **1.2** Install dependencies — `framer-motion`, `lucide-react`, `next-mdx-remote`, shadcn/ui
- [x] **1.3** Configure shadcn/ui — Init shadcn/ui with dark-only theme, customize palette to match Apple-style (`neutral-950` bg, `neutral-800` borders, single accent `#2997FF`)
- [x] **1.4** Set up folder structure — Create `src/components/`, `src/lib/`, `src/data/`, `content/blog/`, `public/images/`
- [x] **1.5** Configure fonts — Set up Inter (sans, `tracking-tight` for headings) and Geist Mono (code) via `next/font`
- [x] **1.6** Set up globals.css — Pure black (`#000` / `neutral-950`) background, Tailwind layers, CSS variables for the monochrome palette, no blue-tinted slates

**Deliverable:** Empty Next.js app running locally with all deps installed and Apple-style dark theme applied.

---

## Phase 2: Data & Config Files

- [x] **2.1** Create `src/data/config.ts` — Personal info from CV: name ("Andrew Tirto Kusumo"), title ("Senior Data Engineer"), bio, social links (email, LinkedIn, GitHub)
- [x] **2.2** Create `src/data/projects.ts` — Project cards with data from CV: (1) Streaming Pipeline — Datastream/Pub/Sub/Dataflow, (2) KUACI — Open Source KYC, (3) Cost Optimization — BigQuery cost reduction, (4) Credit Scoring POC — Docker + FastAPI
- [x] **2.3** Create `src/data/experience.ts` — Work experience entries: Funding Societies, Paper.id, Flip.id, JULO — with roles, dates, tools, bullet points
- [x] **2.4** Create `src/data/skills.ts` — Skills grouped by category from CV: Languages, Cloud, Big Data/Orchestration, Databases, DevOps, Data Modeling, Others

**Deliverable:** All static data files populated with real content from CV, type-safe with TypeScript interfaces.

---

## Phase 3: Layout & Navbar

- [x] **3.1** Create root layout (`src/app/layout.tsx`) — HTML structure, font providers, metadata defaults, `dark` class on body, pure black background
- [x] **3.2** Create Navbar (`src/components/navbar.tsx`) — Fixed top nav, transparent by default; plain text name on left (no logo graphic), small lightweight nav links on right (About, Experience, Projects, Blog, Contact)
- [x] **3.3** Add smooth scroll — Anchor links scroll to sections; Blog link navigates to `/blog`
- [x] **3.4** Add mobile menu — Minimal hamburger icon; full-screen overlay with large centered links
- [x] **3.5** Add navbar scroll effect — `backdrop-blur-xl` + faint `bg-black/80` on scroll; smooth opacity/blur transition via Framer Motion

**Deliverable:** Responsive navbar — transparent at top, blurred on scroll, full-screen mobile overlay.

---

## Phase 4: Hero Section

- [x] **4.1** Create Hero component (`src/components/hero.tsx`) — Full-viewport height, vertically centered; large bold name as focal point, "Senior Data Engineer" in muted/secondary text below, one-line tagline
- [x] **4.2** Add CTA buttons — "View Projects" and "Read Blog" in ghost/outline style (`rounded-lg`, no pills); white text on transparent with border, or filled white button with black text
- [x] **4.3** Add entrance animation — Gentle fade-in + slide-up (20px, 0.6s ease-out) via Framer Motion
- [x] **4.4** Respect `prefers-reduced-motion` — Disable all animations when set
- [x] **4.5** Ensure generous whitespace — No background images or gradients; content breathes

**Deliverable:** Hero section — centered, spacious, Apple-style with minimal CTAs and smooth entrance.

---

## Phase 5: About Section

- [x] **5.1** Create About component (`src/components/about.tsx`) — Professional bio (3-5 sentences), 7 YoE highlight; `max-w-3xl` centered layout with `py-24`–`py-32` vertical spacing
- [x] **5.2** Add skills as monochrome pills — Small `neutral-800` bg / `neutral-300` text tags grouped by category; category labels in small muted text (`neutral-500`) above each group; no colors, no icons
- [x] **5.3** Add scroll-triggered animation — Fade-in on viewport entry with slight upward drift (10–15px), 0.4–0.6s ease-out

**Deliverable:** About section — clean bio, monochrome skill pills, generous spacing.

---

## Phase 6: Experience Section

- [x] **6.1** Create Experience component (`src/components/experience.tsx`) — Section heading (2xl–3xl, semibold) + vertical timeline layout: thin vertical line on the left (desktop), centered or hidden on mobile
- [x] **6.2** Create Experience Card component — Each entry along the timeline: company name (semibold, white) with link to company website, role title(s) stacked under one company if multiple, date range in `neutral-500`, tools/tech as small monochrome tags, key accomplishments as bullet points (muted body text)
- [x] **6.3** Support multiple roles per company — If multiple roles at the same company (e.g., Flip.id: DE Manager + Senior DE, JULO: Senior DE + DE), show them stacked under one company entry with individual date ranges
- [x] **6.4** Add scroll-triggered staggered animation — Each experience entry fades in as it enters viewport with 100ms stagger delay
- [x] **6.5** Mobile layout — Single-column layout, timeline line hidden or minimal; all content fully usable on mobile

**Deliverable:** Experience timeline — vertical timeline with company cards, multiple roles support, staggered scroll animation.

---

## Phase 7: Projects Section

- [x] **7.1** Create Projects component (`src/components/projects.tsx`) — Section heading (2xl–3xl, semibold) + clean grid layout (2-col desktop `max-w-5xl`, 1-col mobile)
- [x] **7.2** Create Project Card component — Borderless or ultra-thin `border-neutral-800`; title (semibold, white), description (muted `neutral-300`), tech stack as small monochrome tags, links as text/icon links (no big buttons)
- [x] **7.3** Add hover effect — Subtle background lighten (`neutral-800/50`) or `translateY(-2px)`, 200ms ease; no scale transforms, no drop shadows
- [x] **7.4** Add staggered entrance animation — Scroll-triggered fade-in with 100ms delay between cards

**Deliverable:** Projects grid — borderless cards, monochrome tags, subtle hover, staggered entrance.

---

## Phase 8: Contact & Footer

- [x] **8.1** Create Contact component (`src/components/contact.tsx`) — Large centered bold heading "Get In Touch", one short muted line below, social links as minimal icon buttons (thin Lucide icons) in a row — Email, LinkedIn, GitHub; generous `py-24`–`py-32` padding
- [x] **8.2** Create Footer component (`src/components/footer.tsx`) — Minimal: thin `neutral-800` divider line, small muted centered copyright text (dynamic year), repeat social icon links; no multi-column layout
- [x] **8.3** Wire up homepage (`src/app/page.tsx`) — Compose all sections: Hero, About, Experience, Projects, Contact in single-page layout with consistent spacing

**Deliverable:** Complete single-page homepage — minimal contact section, thin footer.

---

## Phase 9: Blog — Listing Page

- [x] **9.1** Create MDX utilities (`src/lib/mdx.ts`) — Functions to read/parse MDX files from `content/blog/`, extract frontmatter, calculate read time
- [x] **9.2** Create sample blog post — `content/blog/example-post.mdx` with frontmatter (title, date, description, tags)
- [x] **9.3** Create BlogCard component (`src/components/blog-card.tsx`) — Minimal card: title (white, semibold), date + read time in `neutral-500`, short excerpt in `neutral-300`, monochrome tags; borderless or ultra-thin border
- [x] **9.4** Create Blog listing page (`src/app/blog/page.tsx`) — Clean list of blog cards, sorted newest first, SSG; `max-w-3xl` centered layout

**Deliverable:** `/blog` page — clean, minimal blog card list.

---

## Phase 10: Blog — Post Page

- [x] **10.1** Create MDX components (`src/components/mdx-components.tsx`) — Custom renderers for headings, code blocks (syntax highlighting), links (no underlines, color/opacity hover), images
- [x] **10.2** Create Blog Post page (`src/app/blog/[slug]/page.tsx`) — Full MDX-rendered article; metadata header: title, date, read time, tags in muted text; `max-w-3xl` centered
- [x] **10.3** Add prose typography — Tailwind Typography or custom prose; relaxed line-height (1.7–1.8) for body, tight for headings; `neutral-300` body text
- [x] **10.4** Add code syntax highlighting — Install and configure `rehype-pretty-code` or `shiki`; dark theme matching the site palette
- [x] **10.5** Add back-to-blog link — Minimal text link at top, no big button

**Deliverable:** Blog post pages — readable typography, syntax highlighting, matching the minimalist theme.

---

## Phase 11: SEO & Polish

- [x] **11.1** Add page metadata — Title, description, Open Graph tags for homepage and blog pages
- [x] **11.2** Add dynamic OG metadata for blog posts — Generate OG title/description from MDX frontmatter
- [x] **11.3** Generate sitemap — Use `next-sitemap` or Next.js built-in sitemap generation
- [x] **11.4** Add `robots.txt` — Allow all crawlers
- [x] **11.5** Semantic HTML review — Ensure proper heading hierarchy, landmarks (`main`, `nav`, `footer`, `section`)
- [x] **11.6** Design consistency review — Verify Apple-style minimalism across all pages: monochrome palette, consistent spacing (`py-24`–`py-32`), no rogue colors/shadows/borders
- [x] **11.7** Performance review — Check Lighthouse scores, optimize images, verify SSG
- [x] **11.8** Final responsive QA — Test all breakpoints (mobile, tablet, desktop); verify full-screen mobile menu, spacing scales down properly

**Deliverable:** Production-ready site with SEO metadata, sitemap, consistent design, and 90+ Lighthouse scores.

---

## Summary

| Phase | Name | Tasks | Status |
|-------|------|-------|--------|
| 1 | Project Setup | 6 | Done |
| 2 | Data & Config Files | 4 | Done |
| 3 | Layout & Navbar | 5 | Done |
| 4 | Hero Section | 5 | Done |
| 5 | About Section | 3 | Done |
| 6 | Experience Section | 5 | Done |
| 7 | Projects Section | 4 | Done |
| 8 | Contact & Footer | 3 | Done |
| 9 | Blog — Listing | 4 | Done |
| 10 | Blog — Post Page | 5 | Done |
| 11 | SEO & Polish | 8 | Done |
| **Total** | | **52** | |
