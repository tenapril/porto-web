# Deployment Guide — porto-web

Deploy your Next.js portfolio site to Vercel via GitHub.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- [GitHub CLI](https://cli.github.com/) (`gh`) installed
- Vercel account (https://vercel.com)

---

## Step 1: Create a GitHub Repository (Done)

```bash
gh repo create porto-web --public --source=. --remote=origin --push
```

Repository: https://github.com/tenapril/porto-web

---

## Step 2: Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"** and select `porto-web`
4. Vercel auto-detects Next.js — no configuration needed
5. Click **"Deploy"**
6. Wait for the build to finish — your site will be live at the provided `.vercel.app` URL

---

## Step 3: Verify

1. Open the Vercel URL provided after deployment
2. Check that all pages load correctly
3. Test navigation and content rendering

---

## Pushing Updates (Day-to-Day Workflow)

Once Vercel is connected to your GitHub repo, it **automatically redeploys** every time you push to `main`. Here's the workflow:

### Quick push (most common)

```bash
git add .
git commit -m "Describe what you changed"
git push
```

### Push specific files only

```bash
git add src/components/hero.tsx src/data/config.ts
git commit -m "Update hero section and config"
git push
```

### Check what changed before pushing

```bash
# See which files were modified
git status

# See the actual changes
git diff

# Then stage, commit, and push
git add .
git commit -m "Your message"
git push
```

### Adding a new blog post

```bash
# After creating a new .mdx file in content/blog/
git add content/blog/my-new-post.mdx
git commit -m "Add new blog post: my-new-post"
git push
```

> After every `git push`, Vercel will automatically build and deploy your updated site within ~30-60 seconds.

---

## Preview Deployments

Vercel creates **preview deployments** for pull requests. To use this:

```bash
# Create a feature branch
git checkout -b feature/new-section

# Make changes, then push the branch
git add .
git commit -m "Add new section"
git push -u origin feature/new-section

# Create a PR (Vercel will auto-deploy a preview)
gh pr create --title "Add new section" --body "Description of changes"
```

The preview URL will appear in the PR comments on GitHub.

---

## Summary

| Action | Command |
|--------|---------|
| Push changes | `git add . && git commit -m "message" && git push` |
| Check status | `git status` |
| View changes | `git diff` |
| New branch | `git checkout -b feature/name` |
| Create PR | `gh pr create` |
