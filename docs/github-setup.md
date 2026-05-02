# GitHub Setup

Target GitHub account: `shubhankardeshpande102701-ops`

Target repository: `ugly-actions`

Recommended visibility: private

## What Git Does

Git tracks file changes. GitHub stores a copy of those tracked changes online.

## Setup Commands

First install:

- Git: https://git-scm.com/downloads
- GitHub CLI: https://cli.github.com/

After installing, close and reopen your terminal so `git` and `gh` are available on PATH.

Run these after Git is installed and available in your terminal:

```bash
git init
git add .
git commit -m "Scaffold Ugly Actions storefront"
```

Then create a private GitHub repository named `ugly-actions` under your account and connect it:

```bash
git branch -M main
git remote add origin https://github.com/shubhankardeshpande102701-ops/ugly-actions.git
git push -u origin main
```

If you use GitHub CLI later:

```bash
gh auth login
gh repo create shubhankardeshpande102701-ops/ugly-actions --private --source=. --remote=origin --push
```

Do not commit `.env` files or API keys.
