# beBit 交接總覽

Internal project handover documentation and successor onboarding website for beBit Tech.

**Confidential — Internal Use Only**

---

## What This Is

A Next.js static documentation site that centralizes:
- Project handover pages for all active beBit projects
- An account and credentials access note (no real secrets stored)

---

## Running Locally

### Prerequisites
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
app/                        Next.js App Router pages
  page.tsx                  Home / Handover Hub
  layout.tsx                Root layout (sidebar, fonts)
  globals.css               Global styles
  projects/
    page.tsx                Project Portfolio (5 projects)
    competitive-intelligence/page.tsx   Full CI system handover
    change-intelligence/page.tsx
    email-mvp/page.tsx
    creative-assets/page.tsx
    newsletter-research/page.tsx
  access-registry/page.tsx  Account and credentials access note

components/
  Sidebar.tsx               Navigation sidebar
  PageHeader.tsx            Reusable page header
  SectionCard.tsx           Content card wrapper
  StatusBadge.tsx           Status/priority badge
  InfoRow.tsx               Label-value row
  ProjectDetailTemplate.tsx Reusable project detail layout

data/
  projects.ts               Project definitions and metadata
```

---

## How to Edit Content

### Add or update a project
Edit `data/projects.ts`. Each object in the `projects` array drives the Project Portfolio page.

### Add a dedicated project handover page
1. Create `app/projects/[your-project-id]/page.tsx`
2. Either use `ProjectDetailTemplate` (see existing pages) or write a custom page
3. Add the route to the sidebar in `components/Sidebar.tsx`

---

## How to Deploy

### Vercel (recommended)
1. Push this repository to GitHub under the company organization
2. Import the repo in Vercel: https://vercel.com/new
3. No environment variables are required for the base documentation site
4. Every push to `main` will auto-deploy

### Other static hosts
```bash
npm run build
```
The output in `.next/` can be served with `npm start` or exported with `next export` if you add `output: 'export'` to `next.config.ts`.

---

## Security Rules

- **Do not commit real credentials.** All sensitive values must use placeholders.
- If you add links to internal tools, ensure those URLs require authentication before accessing sensitive data.
- Treat this repository as potentially readable by anyone in the company.

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **No database** — all content is static TypeScript data files
