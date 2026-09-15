# The Evo Devo Lab Website

Official website for **The Evo Devo Lab** (Prof. Ariel Chipman), Department of Ecology, Evolution and Behavior, The Alexander Silberman Institute of Life Sciences, The Hebrew University of Jerusalem.

Built with modern **HTML5, Tailwind CSS, Lucide Icons, and Vanilla JavaScript** — with **zero dependencies to install**, **no heavy `node_modules`**, and **100% free hosting compatibility** with GitHub Pages, Netlify, and Vercel.

---

## 🚀 How to View the Website (Instant Local Preview)

You can launch and view the website in two simple ways:

### Method 1: Double-Click (Windows)
Just double-click the file **`run_site.bat`** in this folder! It will automatically start a local server and open `http://localhost:8000` in your default browser.

### Method 2: From Terminal / PowerShell
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

*(You can also double-click `index.html` directly in Chrome or Edge!)*

---

## 📝 How to Update Lab Data (No Coding Required)

All site data is neatly organized in **`data.js`** (which can also be edited visually using **`admin.html`**):

| Data File / Section | What You Can Edit |
| :--- | :--- |
| **`labInfo`** | Lab name, PI title, campus address, email, phone, Google Scholar, ORCID, and ResearchGate links |
| **`research`** | Research themes, full project descriptions, key biological questions, and model organisms |
| **`team`** | PI bio, active lab members (Postdocs, PhDs, MScs, Lab Manager), projects, emails, and Alumni list |
| **`publications`** | Articles with title, authors, journal, year, DOI link, and research topic tags |
| **`news`** | "What's Happening" timeline items (papers accepted, grants awarded, conference talks) |
| **`gallery`** | Microscopy images, embryo staining, SEM micrographs, captions, and categories |

To update any text or add a paper, simply open **`data.js`** in any text editor (like VS Code or Notepad), edit the text, and refresh your browser!

---

## 🌐 100% Free Hosting Deployment

Because this site is a clean, static web application, you can host it for **$0/month forever** with zero maintenance:

### Option A: GitHub Pages (Recommended for Academic Labs)
1. Initialize Git in this directory (or create a repo on GitHub):
   ```bash
   git init
   git add .
   git commit -m "Initial lab website"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings** → **Pages** → Source: **Deploy from a branch** (`main` / `root`).
3. Your site is instantly live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`!
4. You can also connect a custom domain (e.g. `evodevolab.org` or `chipmanlab.huji.ac.il`) for free under **Custom domain**.

### Option B: Netlify / Vercel
Simply drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub.
