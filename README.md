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

### Build static output locally

```bash
npm run build   # outputs to ./out/
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

### GitHub Pages

The site is configured for static export (`output: 'export'` in `next.config.ts`). A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes automatically on every push to `main`.

**One-time GitHub UI setup:**
1. Go to the repository on GitHub: **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will deploy automatically

**If GitHub Pages serves at a subpath** (e.g. `beBitTECH.github.io/beBit-handover-Aston` without a custom domain), add this to `next.config.ts`:
```ts
basePath: '/beBit-handover-Aston',
```
If using a custom domain mapped to the root, no `basePath` is needed.

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
