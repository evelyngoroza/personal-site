# Evelyn Goroza — Portfolio

A single-page portfolio site built in plain HTML, CSS, and JavaScript. Fast, dependency-free, and easy to host anywhere.

---

## Project structure

```
portfolio/
├── index.html           # Everything renders from here
├── css/
│   └── style.css
├── js/
│   └── main.js          # Project content lives in the PROJECTS object here
├── assets/
│   ├── images/          # Card thumbnails + gallery images
│   │   └── gallery/
│   └── pdfs/            # Downloadable PDFs for each project
└── README.md
```

All project content (titles, descriptions, metadata, gallery images, download links) lives in the `PROJECTS` object at the top of `js/main.js`. Editing that object is the fastest way to update a project.

---

## Running locally

Any static-file server works. The simplest options:

**Python 3**
```bash
cd portfolio
python3 -m http.server 8000
```
Then open http://localhost:8000.

**Node (if you use it)**
```bash
cd portfolio
npx serve
```

You can also just double-click `index.html`, but fonts and PDFs may behave more reliably from a local server.

---

## Hosting options (all free)

### Option 1 — GitHub Pages (recommended if you already use GitHub)

1. Create a new repository on GitHub (e.g. `evelyn-portfolio`).
2. Push the contents of this `portfolio/` folder to the repo's root:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/evelyn-portfolio.git
   git push -u origin main
   ```
3. In the repo on GitHub, go to **Settings → Pages**.
4. Under **Source**, pick **Deploy from a branch**, then **main / (root)**, and save.
5. In about a minute, your site will be live at `https://YOUR_USERNAME.github.io/evelyn-portfolio/`.

If you want a custom domain (e.g. `evelyngoroza.com`), GitHub Pages supports it in **Settings → Pages → Custom domain**.

### Option 2 — Vercel

1. Sign up at https://vercel.com with your GitHub account.
2. Click **New Project**, import the GitHub repo containing this folder.
3. Vercel auto-detects the static site and deploys it (e.g. `https://your-project.vercel.app`).
4. You can add a custom domain under **Project Settings → Domains**.

Push to `main` and Vercel auto-deploys.

---

## Updating project content

Most edits happen in one of two places:

**To add or edit a project's copy, metadata, gallery, or download buttons**
→ edit the `PROJECTS` object at the top of `js/main.js`. Each entry follows the pattern:

```js
"project-id": {
  tag: "Category · Year",
  title: "Project title",
  lede: "One or two sentence intro.",
  meta: [
    { label: "Role", value: "Your role" },
    { label: "Tool", value: "Figma" }
  ],
  sections: [
    { h: "Section heading", p: "Body paragraph. HTML allowed." }
  ],
  gallery: ["assets/images/file1.jpg", "assets/images/file2.jpg"],
  actions: [
    { label: "Download PDF", href: "assets/pdfs/File.pdf", primary: true }
  ]
}
```

**To add or remove a card from a section**
→ edit `index.html`. Find the matching `<section>` and add/remove an `<article class="project-card" data-project="project-id">` block. The `data-project` attribute must match a key in the `PROJECTS` object.

---

## Design notes (for future you)

- Typography: **Fraunces** for display, **Geist** for body, **Geist Mono** for labels. All loaded from Google Fonts.
- Palette: warm cream ground, soft charcoal ink, single terracotta accent. All colors are CSS variables at the top of `style.css` (`--cream`, `--ink`, `--terracotta`, etc.).
- Layout is responsive. Below 860px, the side nav collapses; below 600px, it hides entirely and cards stack into one column.
- No frameworks, no build step. Edit the three source files and refresh.

---

## Quick checklist before sharing

- [ ] Update the contact email in `index.html` (search for `evelyn.goroza@example.com`)
- [ ] Update the LinkedIn URL in `index.html` (search for `linkedin.com`)
- [ ] Update the About section copy to taste
- [ ] Swap the `<title>` and `<meta name="description">` if you want different OG/SEO text
- [ ] Consider adding a favicon (`<link rel="icon" href="favicon.png">` in the `<head>`)
- [ ] Proof each project's description in `js/main.js`
