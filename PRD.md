# Product Requirements Document (PRD)

## Portfolio Website — Senior Data Engineer

---

## 1. Overview

A personal portfolio website for a Senior Data Engineer with 7 years of experience. The site serves as a professional showcase to highlight technical expertise, projects, and thought leadership through a blog. It targets recruiters, hiring managers, and peers in the data engineering community.

---

## 2. Goals

- Present a professional online presence as a Senior Data Engineer
- Showcase key projects and technical accomplishments
- Publish technical blog posts on data engineering topics
- Provide easy ways for visitors to get in touch
- Deliver a fast, polished, and modern user experience

---

## 3. Target Audience

| Audience | What They Look For |
|---|---|
| Recruiters / Hiring Managers | Experience summary, skills, projects, contact info |
| Engineering Peers | Technical blog posts, project deep-dives |
| Potential Collaborators | Areas of expertise, contact channels |

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router, Static Site Generation) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Blog Engine | MDX via `next-mdx-remote` |
| Icons | Lucide React |
| Theme | Dark only |
| Package Manager | npm |
| Deployment | Vercel |
| Version Control | Git + GitHub |

---

## 5. Site Structure & Pages

### 5.1 Single-Page Layout (Home)

The homepage is a single scrollable page with the following sections:

#### 5.1.1 Navbar

- Fixed top navigation, transparent by default
- Name on the left — plain text, no logo graphic
- Navigation links: About, Experience, Projects, Blog, Contact — small, lightweight text
- Smooth scroll to sections (except Blog, which navigates to `/blog`)
- Mobile: minimal hamburger icon, full-screen overlay menu with large centered links
- On scroll: gains backdrop-blur and faint background

#### 5.1.2 Hero Section

- Full-viewport height, vertically centered content
- Large bold name as the focal point
- Title "Senior Data Engineer" below in muted/secondary text
- One-line tagline — concise, no fluff
- CTA buttons: "View Projects" and "Read Blog" — minimal style (ghost/outline)
- Generous whitespace above and below; no background images or gradients
- Subtle entrance animation (fade-in + slide-up)

#### 5.1.3 About Section

- Brief professional bio (3-5 sentences)
- Years of experience highlight (7 YoE)
- Tech skills displayed as small monochrome pills/tags grouped by category — no colors, no icons
  - **Languages**: Python, SQL, Scala, Java
  - **Big Data**: Apache Spark, Kafka, Flink, Hadoop
  - **Orchestration**: Apache Airflow, Dagster, Prefect
  - **Cloud**: AWS (Glue, Redshift, S3, EMR), GCP (BigQuery, Dataflow), Azure
  - **Data Modeling**: dbt, Data Vault, Star Schema
  - **Databases**: PostgreSQL, MySQL, MongoDB, Cassandra, DynamoDB
  - **DevOps/Infra**: Docker, Kubernetes, Terraform, CI/CD
  - **Other**: Git, Linux, REST APIs, GraphQL
- Category labels in small muted text above each group
- Scroll-triggered fade-in animation

> **Note**: The skills listed above are placeholders. The actual skills will be updated based on the user's real experience.

#### 5.1.4 Experience Section

- Vertical timeline layout — a thin vertical line on the left (desktop) or centered (mobile)
- Each experience entry as a card along the timeline:
  - **Company name** (semibold, white) with link to company website
  - **Role title(s)** — if multiple roles at the same company, show them stacked under one company entry with date ranges
  - **Date range** (muted text, `neutral-500`)
  - **Tools/tech** as small monochrome tags
  - **Key accomplishments** as bullet points (muted body text)
- Companies ordered chronologically (most recent first)
- Content sourced from a TypeScript data file (`/data/experience.ts`)
- Scroll-triggered staggered fade-in animation (each entry animates in as it enters viewport)
- On mobile: single-column layout, timeline line hidden or minimal

**Experience data (from CV):**

1. **Funding Societies** — fundingsocieties.com
   - Senior Data Engineer (11/2024 – Present)
   - Tools: Airflow, AWS, Snowflake, QLIK, Python, Docker
   - Led Finance & Risk DE Team for Finance Closing, FP&A Reports, ECL, and Regulatory Reports
   - Migrating old pipelines to a more sustainable approach using ECS
   - Handling several high priority projects with external partners

2. **Paper.id** — paper.id
   - Senior Data Engineer (05/2024 – 10/2024)
   - Tools: Airflow, DBT, Google BigQuery, ArangoDB, Datastream, Pub/Sub, Python, Docker
   - Built streaming pipeline from App DB to BigQuery using Datastream, Pub/Sub, and Dataflow
   - Fixed DBT ELT inefficiencies improving development time by ~100%
   - Reduced BigQuery cost by ~20% per month
   - Created a cost management dashboard tracking daily project costs

3. **Flip.id** — flip.id
   - Data Engineer Manager (12/2022 – 05/2024)
   - Senior Data Engineer (09/2021 – 12/2022)
   - Tools: DBT, Google BigQuery, Apache Beam/Dataflow, Datastream, Pub/Sub, Python, Docker, GitLab CI
   - Built streaming pipeline and end-to-end ELT pipeline with DBT from scratch
   - Managed BigQuery cost optimization (~20% reduction/month)
   - Built and managed Data Engineer team from zero (hiring, career framework, interviews)
   - Managed a team of 3 Data Engineers
   - Created pipelines consuming Facebook, Google, and Appsflyer APIs
   - Built credit scoring POC with Docker and FastAPI
   - Provisioned Redash and Looker Studio dashboards

4. **JULO** — julo.co.id
   - Senior Data Engineer (01/2021 – 09/2021)
   - Data Engineer (08/2018 – 01/2021)
   - Tools: Airflow, Ansible, AWS, Alibaba, GCP, Docker, Spark, Postgres, CircleCI
   - Maintained 24/7 Airflow data pipelines
   - Feature generation for Data Science team
   - Designed PG 10 partitioning for large tables
   - Built action log data archiver for tables with near-billion rows
   - Integrated CircleCI for automated testing and deployment
   - Cost management across AWS and GCP

#### 5.1.5 Projects Section

- Clean grid layout (2 columns desktop, 1 column mobile)
- Each project card: borderless or ultra-thin border, minimal design
  - Project title (semibold, white)
  - Short description (2-3 sentences, muted text)
  - Tech stack as small monochrome tags
  - Links: GitHub repo, live demo, or case study — text links or icon links, no big buttons
- Hover: subtle background lighten or translateY (-2px), no scale
- Scroll-triggered staggered entrance animation
- Minimum 3 project cards with real content

#### 5.1.6 Contact Section

- Large heading: "Get In Touch" — centered, bold
- One short line of text below (muted)
- Social links as minimal icon buttons in a row — Email, LinkedIn, GitHub
- Generous vertical padding; feels like its own "page" within the scroll
- No contact form (keep it simple, use direct links)

#### 5.1.7 Footer

- Minimal — just a thin divider line, copyright text, and social links
- Copyright with current year (dynamic)
- Small muted text, centered
- No heavy footer blocks or multi-column layouts

### 5.2 Blog Page (`/blog`)

- Grid/list of blog post cards
- Each card shows:
  - Title
  - Publication date
  - Short excerpt / description
  - Read time estimate
  - Tags/categories
- Sorted by date (newest first)

### 5.3 Blog Post Page (`/blog/[slug]`)

- Full MDX-rendered article
- Metadata header: title, date, read time, tags
- Typography optimized for readability (prose styles)
- Code blocks with syntax highlighting
- Back to blog link
- Previous/Next post navigation (optional)

---

## 6. Design Requirements

### 6.0 Design Philosophy — Apple-Inspired Minimalism

The site follows a minimalist, Apple-style design language: clean, spacious, and confident. Every element earns its place. The design communicates professionalism through restraint, not decoration.

**Core principles:**
- **Whitespace is a feature** — generous padding and margins; sections breathe
- **Less is more** — no unnecessary borders, shadows, or visual noise
- **Content hierarchy through scale** — large bold headings, smaller muted body text; size does the work, not color
- **Subtle depth** — use translucency (backdrop-blur) and soft gradients instead of hard borders or drop shadows
- **Precision** — consistent spacing scale, pixel-perfect alignment, tight grid

### 6.1 Theme

- Dark-only theme (Apple dark mode aesthetic)
- Color palette:
  - **Background:** pure/near-black (`#000000` or `neutral-950`) — not slate, not blue-tinted
  - **Surface/Cards:** subtle gray (`neutral-900` / `#111`) with no visible border, or a 1px `neutral-800` border at most
  - **Primary text:** white (`#fff`) for headings, light gray (`neutral-300`) for body
  - **Secondary text:** muted gray (`neutral-500`) for captions, dates, labels
  - **Accent color:** single accent — clean white or a subtle blue (`#2997FF`, Apple-style) used sparingly for links and interactive elements only
  - **Dividers:** very faint (`neutral-800` or `neutral-800/50`) — barely visible, used only when needed
- No colorful badges or tags — use monochrome/neutral tones for skill pills and tech tags
- shadcn/ui dark theme as the base, customized to match the above palette

### 6.2 Typography

- **Primary font:** SF Pro Display feel — use Inter or Geist Sans via `next/font` (tracking tight for headings)
- **Monospace font:** Geist Mono or JetBrains Mono for code blocks
- **Hierarchy through size and weight:**
  - Hero heading: 4xl–6xl, font-bold, tight letter-spacing (`tracking-tight`)
  - Section headings: 2xl–3xl, font-semibold
  - Body: base–lg, font-normal, `neutral-300`
  - Captions/meta: sm, `neutral-500`
- **Line height:** relaxed for body text (1.7–1.8), tight for headings (1.1–1.2)
- No underlines on links — use color change or opacity on hover

### 6.3 Layout & Spacing

- **Max content width:** `max-w-3xl` for text-heavy sections (About, Blog), `max-w-5xl` for grid sections (Projects)
- **Generous vertical spacing:** each section has `py-24` to `py-32` (desktop), scaled down on mobile
- **Centered layout** — all content centered with `mx-auto`
- **Grid:** clean 2-column grid for projects, single column on mobile
- Mobile-first responsive design
- Breakpoints: mobile (<768px), tablet (768–1024px), desktop (>1024px)
- All sections must be fully usable on mobile

### 6.4 Components Style

- **Buttons:** minimal — ghost/outline style by default; primary CTA is a simple white text on transparent with border, or a filled white button with black text (Apple-style). No rounded-full pills, use `rounded-lg`
- **Cards:** borderless or ultra-thin border (`border-neutral-800`); no drop shadows; hover state is a subtle background lighten (`neutral-800/50`) or slight translate-y
- **Badges/Tags:** small, monochrome pills (`neutral-800` bg, `neutral-300` text); no color coding
- **Icons:** thin stroke (Lucide default); used sparingly, never decorative
- **Navbar:** transparent by default, gains `backdrop-blur-xl` + faint `bg-black/80` on scroll; thin bottom border or none

### 6.5 Animations (Framer Motion)

- **Philosophy:** animations should feel invisible — the user notices the content, not the motion
- Hero: gentle fade-in + slide-up (20px, 0.6s ease-out) on load
- Sections: fade-in on scroll with slight upward drift (10–15px)
- Project cards: staggered entrance (100ms delay between cards)
- Hover states: subtle opacity or translateY (-2px), 200ms ease — no scale transforms
- Navbar: smooth opacity/blur transition on scroll
- **Timing:** ease-out curves, 0.4–0.6s duration; nothing bouncy or springy
- **Mandatory:** respect `prefers-reduced-motion` — disable all animations when set

---

## 7. Content Management

- All content is stored as static files in the repository
- Blog posts are `.mdx` files stored in `/content/blog/`
- Project data is stored in a TypeScript data file (`/data/projects.ts`)
- Experience/work history is stored in a TypeScript data file (`/data/experience.ts`)
- Personal info (name, bio, links) in a config file (`/data/config.ts`)
- No CMS or database required

---

## 8. SEO & Performance

- Static Site Generation (SSG) for all pages
- Metadata: title, description, Open Graph tags per page
- Blog posts: dynamic OG metadata from frontmatter
- Semantic HTML (proper heading hierarchy, landmarks)
- Lighthouse target: 90+ on all metrics
- Sitemap generation
- `robots.txt`

---

## 9. Project Structure

```
porto-web/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, theme, navbar, footer)
│   │   ├── page.tsx            # Homepage (hero, about, experience, projects, contact)
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Individual blog post
│   │   └── globals.css
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── blog-card.tsx
│   │   ├── mdx-components.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/
│   │   ├── utils.ts            # Utility functions (cn helper, etc.)
│   │   └── mdx.ts              # MDX parsing utilities
│   └── data/
│       ├── config.ts           # Personal info, social links
│       ├── experience.ts       # Work experience data
│       └── projects.ts         # Project data
├── content/
│   └── blog/
│       └── example-post.mdx    # Sample blog post
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
└── PRD.md
```

---

## 10. Milestones

| # | Milestone | Scope |
|---|---|---|
| 1 | Project Setup | Initialize Next.js, Tailwind, shadcn/ui, folder structure |
| 2 | Layout & Navbar | Root layout, responsive navbar with mobile menu |
| 3 | Hero Section | Hero content, CTA buttons, entrance animation |
| 4 | About Section | Bio, skills grid, scroll animation |
| 5 | Experience Section | Timeline layout, experience cards, CV data, scroll animation |
| 6 | Projects Section | Project cards grid, hover effects, placeholder data |
| 7 | Contact & Footer | Contact links, footer |
| 8 | Blog — Listing | MDX setup, blog listing page |
| 9 | Blog — Post Page | Individual post rendering, syntax highlighting, typography |
| 10 | SEO & Polish | Metadata, sitemap, performance optimization, final review |

---

## 11. Out of Scope (v1)

- Contact form with backend
- CMS integration (Contentful, Sanity, etc.)
- Analytics dashboard
- Authentication / admin panel
- Comments on blog posts
- Dark/light theme toggle (dark only for v1)
- Internationalization (i18n)
- Search functionality

---

## 12. Success Criteria

- Site loads in under 2 seconds on 3G
- Lighthouse score 90+ across all categories
- Fully responsive across mobile, tablet, and desktop
- Blog supports MDX with code syntax highlighting
- All sections render correctly with placeholder content
- Deployed and accessible on a Vercel URL
