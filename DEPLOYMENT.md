# Deployment Guide — porto-web

Deploy your Next.js portfolio site to Vercel via GitHub.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- GitHub account (with `gh` CLI or browser)
- Vercel account (https://vercel.com)

---

## Step 1: Create a GitHub Repository

Go to https://github.com/new and create a new repository:

- **Name:** `porto-web` (or whatever you prefer)
- **Visibility:** Public or Private
- **Do NOT** initialize with README, .gitignore, or license (we already have local files)

Click **Create repository**.

---

## Step 2: Push Your Code to GitHub

Run these commands from the project root (`/Users/andrew/porto-web`):

```bash
# Stage all files
git add .

# Create the first commit
git commit -m "Initial commit"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/porto-web.git

# Push to GitHub
git push -u origin main
```

> **Tip:** If you have `gh` CLI installed, you can do this instead:
> ```bash
> gh repo create porto-web --public --source=. --remote=origin --push
> ```

---

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"** and select your `porto-web` repo
4. Vercel auto-detects Next.js — no configuration needed
5. Click **"Deploy"**
6. Wait for the build to finish. Your site will be live at `https://porto-web-xxxx.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? porto-web
# - Directory? ./
# - Override settings? N
```

---

## Step 4: Verify

1. Open the Vercel URL provided after deployment
2. Check that all pages load correctly
3. Test navigation and content rendering

---

## Automatic Deployments

Once connected, Vercel will **automatically redeploy** every time you push to `main`:

```bash
# Make changes, then:
git add .
git commit -m "Update something"
git push
```

Vercel also creates **preview deployments** for pull requests automatically.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Create GitHub repo |
| 2 | `git add . && git commit && git push` |
| 3 | Import repo in Vercel dashboard |
| 4 | Site is live, auto-deploys on push |
