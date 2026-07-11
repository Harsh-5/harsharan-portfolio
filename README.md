# Harsharan Gorli — Portfolio Website

A clean, warm, and modern portfolio site. It's plain HTML/CSS/JS — no build step,
no frameworks — so it's fast, free to host, and easy to update for years to come.

```
portfolio/
├── index.html          ← page structure (rarely needs editing)
├── css/styles.css      ← all styling / colors / fonts
├── js/data.js          ← YOUR CONTENT — edit this to update the site
├── js/main.js          ← rendering logic (rarely needs editing)
├── assets/
│   ├── profile.jpg     ← your headshot (add this — see below)
│   └── Harsharan_Gorli_Resume.pdf
├── .nojekyll           ← tells GitHub Pages to serve files as-is
└── README.md
```

---

## ⭐ 1. Add your photo (1 minute)

Save your headshot as **`assets/profile.jpg`**. That's it — the page picks it up
automatically. (Until you do, it shows a tasteful "HG" placeholder.)
A roughly portrait/square image works best.

---

## ✏️ 2. How to update content later

**You only ever edit `js/data.js`.** It's written in plain English with comments.
Everything else renders automatically.

### Add a new job
Open `js/data.js`, find `experience:` and copy an existing block to the **top**
(most recent first):

```js
{
  role: "Senior Data Analyst",
  org: "New Company",
  location: "City, State",
  date: "2026 – Present",
  points: [
    "What you did and the measurable result.",
    "Another accomplishment with a number in it.",
  ],
  stack: ["Tool", "Tool", "Tool"],
},
```

### Add a new project
Find `projects:` and add a block. Set `type` to `"work"` or `"personal"`
(the filter buttons update on their own). `icon` is any emoji.

```js
{
  title: "My New Project",
  type: "personal",
  icon: "🚀",
  date: "2026",
  blurb: "One or two sentences on what it is and why it's interesting.",
  stack: ["Python", "LLMs"],
  links: [{ label: "GitHub", url: "https://github.com/Harsh-5/repo" }],
},
```

Add skills, certs, interests, languages, or education entries the same way — just
follow the existing pattern in the matching section. Save the file, refresh the page, done.

### Update the "How I Built This With AI" section
Find `buildWithAI:` in `js/data.js`. Edit the `intro`, the `efficiency` and
`improvements` lists, and the `principle`. The three `stats` (session count,
estimated cost, edit size) are an **honest estimate** — if you ever track your
real token/cost numbers, drop them in there to make the efficiency story concrete.

### Change colors
Open `css/styles.css` and edit the variables at the very top (`:root { ... }`).
The accent color is `--accent`. Dark-mode colors are in `[data-theme="dark"]`.

---

## 🚀 3. Deploy to GitHub Pages (free, ~5 minutes)

1. Create a free account at **github.com** (if you don't have one).
2. Create a new repository named **`harsharan-portfolio`** (Public).
3. Upload the contents of this `portfolio/` folder:
   - On the new repo page click **"uploading an existing file"**, then drag in
     `index.html`, `README.md`, `.nojekyll`, and the `css`, `js`, and `assets`
     folders. Commit.
4. Go to the repo's **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **"Deploy from a branch"**,
   pick branch **`main`** and folder **`/ (root)`**, and **Save**.
6. Wait ~1 minute. Your live site appears at:
   **`https://<your-username>.github.io/harsharan-portfolio/`**

That URL is what you share with recruiters. To update the site later, just edit
`js/data.js` in GitHub (pencil icon → commit) and the live site refreshes in
about a minute.

> **Tip — cleaner URL:** name the repo `<your-username>.github.io` instead, and
> your site lives at `https://<your-username>.github.io/` (no subfolder).
> You can also add a custom domain later under Settings → Pages.

---

## Local preview
Double-click `index.html` to open it in your browser, or run a tiny local server
from this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

Built to grow with your career. 🌱
