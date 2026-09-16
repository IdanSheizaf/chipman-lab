# Project Progress & Changelog
**The Evo Devo Lab Website (Prof. Ariel Chipman)**  
*Alexander Silberman Institute of Life Sciences, The Hebrew University of Jerusalem*

---

## Summary of Accomplishments & Milestones

### 1. Navigation & Institutional Branding
- **Life Sciences Institute Link**: Updated the Institute of Life Sciences logo in the header of `index.html` to link to `https://www.bio.huji.ac.il/en` with tooltip and safe external link attributes (`target="_blank"`, `rel="noreferrer"`).
- **HUJI Logo Integration**:
  - Placed the official Hebrew University logo (`huji_logo.png`) into `images/logos/`.
  - Added dynamic support in `data.js` under `labInfo.logos.hujiLogo`.
  - Integrated a dedicated logo preview and path editor card into the **Hero Banners & Logos** panel in `admin.html`.
- **Navigation & Section Visibility Panel**:
  - Fixed a null-element reference in `admin.html` (`admin-info-lifeSciencesUrl`) that previously broke `populateAdminViews()`.
  - Added full toggle switches, reorder arrows, and rename controls for all 7 built-in sections (Home, Research, Group, Publications, Gallery, What's happening, Contact) as well as custom sections.

---

### 2. Media Asset Organization & Broken Image Resolution
- **Subdirectory Restructuring**: Organized all flat, hash-based Wix image downloads into logical semantic folders:
  - `images/banners/` (Home, Research, Group, Publications, Gallery, News, Contact)
  - `images/team/` (PI and lab member portraits)
  - `images/gallery/animals/` (Embryos, microscopy, model organisms)
  - `images/gallery/activities/` (Lab photos, field work, group events)
  - `images/logos/` (Lab logos and HUJI emblems)
  - `images/icons/` (Academic and social icons)
- **Path Migration in `data.js`**: Updated all 37 dynamic image references across `labInfo`, `team`, and `gallery` to point directly to their new organized subdirectory paths.
- **Runtime Auto-Migrator (`autoMigrateImagePaths`)**:
  - Embedded automatic path migration logic into both `index.html` and `admin.html`.
  - Stale drafts in browser `localStorage` or older JSON snapshots are transparently translated to modern subfolder paths on startup before rendering.
- **Cache-Busting**: Added version query parameters (`data.js?v=3`) to ensure browsers immediately load updated assets without serving cached legacy files.

---

### 3. Gallery Lightbox & User Experience
- **Keyboard Navigation (Escape Key)**: Added a global `keydown` event listener in `index.html` allowing users to exit the fullscreen image viewer instantly by pressing the `Esc` key, in addition to clicking the "X" button or backdrop.
- **Scroll Lock**: Configured `document.body.style.overflow = 'hidden'` while the lightbox is active to prevent page scrolling behind open images, restoring normal scrolling when dismissed.

---

### 4. Universal Multi-Entry Ordering in CMS (`admin.html`)
Added intuitive reordering controls across every multi-entry section of the site:
- **Publications**: `↑` / `↓` buttons to move articles up and down.
- **Research Projects**: `↑` / `↓` buttons to reorder project highlights.
- **News ("What's Happening")**: `↑` / `↓` buttons to arrange announcements chronologically.
- **Home Approaches**: `↑` / `↓` buttons with automated step renumbering (`1, 2, 3...`).
- **Gallery Photos**: `←` / `→` arrow buttons on each photo card within albums/sub-sections.
- **Custom Pages & Blocks**: Reordering arrows for custom pages and individual blocks within the modal page builder.

---

### 5. Active Save Progress Indicator (`admin.html`)
- **Interactive Save Button**: Disables during save operations, displaying an animated SVG spinner and changing label to *"Saving progress..."*.
- **Floating Toast Banner**: A modern notification toast (`#admin-save-toast`) slides in displaying *"Saving progress to data.js & archive..."* and updates to a green checkmark upon completion before fading.

---

### 6. Performance & Memory Optimizations
- **Lazy Loading**: Applied native `loading="lazy"` across all offscreen images (gallery grids, team member portraits, modal blocks) to drastically reduce initial memory footprint and network transfer.
- **Asynchronous Decoding**: Added `decoding="async"` to all images in both `index.html` and `admin.html` to prevent main UI thread blocking during image decompression.

---

### 7. Copyright & Attribution
- Added a discreet, elegant copyright attribution to **Idan Sheizaf** (`© Idan Sheizaf`) using muted styling (`text-[11px] text-slate-400/80`):
  - **Public Site**: In the footer of `index.html`.
  - **CMS Admin**: In the bottom bar of `admin.html` alongside the site navigation link.

---

### 8. Project Directory & Workspace Cleanup
- **Removed Deprecated & Redundant Directories**:
  - `wix_pages_json/` (empty folder)
  - `wix_extracted_pages/` (9 raw scraping JSON dumps)
  - `archive/images_root_backup/` (14 MB redundant backup from initial image reorganization)
  - `data/` (redundant duplicate of `src/data/`)
- **Removed 15 Loose Wix Scrape Files from Root**:
  - Deleted obsolete scrape files (`wix_raw.html`, `wix_viewer_model.json`, `all_comp_props.json`, `prefetch_features_masterPage.json`, `dynamicmodel.json`, `wix_extracted_summary.txt`, `all_wix_extracted_content.json`, `prefetch_features_c1dmp.json`, `prefetch_platform_masterPage.json`, `wix_essential_model.json`, `image_mapping.json`, `prefetch_platform_c1dmp.json`, `wix_warmup_data.json`, `wix_images.json`, `data_old.js`).
- **Updated `README.md`**: Clarified the simplified static setup and visual CMS editing workflow.
- **Full Verification**: Ran automated integrity scripts confirming zero syntax errors and 100% active, verified image links.

---

### 9. Deployment Roadmap & Architecture Decisions
- **GitHub Hosting & In-Browser Publishing Plan**:
  - **Selected Approach**: **Option 1 (Direct In-Browser GitHub Sync)**.
  - **Design & Security**: `admin.html` will interface directly with the GitHub REST API (`PUT /repos/{owner}/{repo}/contents/data.js`). A fine-grained GitHub Personal Access Token (scoped exclusively to write `data.js` on this repo) will be stored in the PI's browser `localStorage`.
  - **User Flow**: Enables the PI to edit lab members, papers, news, and banners directly in the web browser and push changes to the live site via a "Publish to GitHub" button, triggering automatic deployment on GitHub Pages without requiring Git or command-line tools.
  - **Status**: Decided and logged; awaiting user greenlight to implement.

---

### 10. Local Runner Enhancements & Data Restoration
- **Restored Latest Admin Edits in `data.js`**:
  - Restored the user's latest updates from the 15:59 snapshot (`archive/data_archive_2026-09-14_15-59-44.js`), including the **"future projects"** custom section and the updated **Google Scholar** profile ID.
- **Enhanced `run_site.bat`**:
  - Added `cd /d "%~dp0"` to guarantee the server always runs in the project directory regardless of how it was launched.
  - Switched from standard `python -m http.server` to a custom `server.py` that sends `Cache-Control: no-store, no-cache, must-revalidate, max-age=0`. This ensures that any change made to `data.js` or `index.html` is instantly visible in the browser upon refresh without needing a hard reload (`Ctrl + F5`).
- **Cache-Busting Update**:
  - Incremented data script query parameter to `?v=4` across `index.html` and `admin.html` to invalidate any stale browser disk cache.

---

### 11. Current Production File Manifest
- **`index.html`**: Main public website. Modern, responsive, zero-dependency static page powered by Tailwind CSS and Lucide icons.
- **`admin.html`**: Visual CMS editor for lab members, research, publications, gallery, news, hero banners, logos, and custom sections with reordering controls and save indicators.
- **`data.js`**: Central data store for the website.
- **`server.py`**: Local development server sending `Cache-Control: no-store` headers to ensure changes show immediately.
- **`run_site.bat`**: One-click launcher that opens the browser and starts `server.py`.
- **`images/`**: Organized semantic directories (`banners/`, `team/`, `gallery/animals/`, `gallery/activities/`, `logos/`, `icons/`).
- **`archive/`**: Automated timestamped backups of `data.js` created on every CMS save.
- **`CHANGELOG.md`**: Chronological log of all milestones, features, fixes, and architecture decisions.
- **`README.md`**: Site documentation and hosting instructions.

---

### 12. In-Browser GitHub 1-Click Publishing & Authority Protection
- **Direct GitHub 1-Click Publishing**:
  - Added a dedicated **"Publish to GitHub"** action button in `admin.html`.
  - Automatically fetches the current `data.js` SHA, compiles Unicode Base64 payload, and pushes commits directly to GitHub via the REST API (`PUT /repos/{owner}/{repo}/contents/data.js`).
  - Triggers live GitHub Pages deployments within 30–60 seconds without requiring any local Git tools.
- **Two-Layer Authority & Access Protection**:
  - **Layer 1 (Admin Passcode Gate)**: Unlocked by default passcode (`chipman2024`, configurable), preventing casual visitors from viewing or interacting with the CMS editor.
  - **Layer 2 (Cryptographic GitHub Token Verification)**: Live server-side authority check via `checkGitHubAuthority()`. Checks whether the token possesses active `push` (write) permissions on the repository before any commit can take place. Denies and blocks unauthorized publication attempts.
- **GitHub Sync Configuration (PAT Only)**:
  - Streamlined the setup to require **only the Personal Access Token (PAT)**. The repository owner (`IdanSheizaf`), repository (`chipman-lab`), and branch (`main`) are pre-configured constants, eliminating unnecessary configuration steps for both the user and the PI.
- **Enforced Passcode Gate by Default**:
  - The admin authentication gate is rendered visible by default with an instant session check, ensuring `admin.html` is strictly locked until authorized.
  - Removed the default passcode hint text entirely from the unlock screen to prevent unauthorized access.

---

### 13. Admin Passcode Security & Cryptographic Protection (SHA-256 + Salt)
- **Passcode Hint Removal**:
  - Completely purged the *"Default passcode: chipman2024"* hint text from `#admin-auth-gate` in `admin.html`.
- **SHA-256 Passcode Encryption**:
  - Replaced plaintext passcode verification with browser-native **SHA-256 cryptographic hashing** via the Web Crypto API (`crypto.subtle`) combined with a dedicated salt (`chipman_evo_devo_lab_salt_2026`).
  - Neither the default passcode nor any future passcode is ever stored in plaintext within HTML, JavaScript, or public GitHub files. Only the irreversible 64-character hexadecimal hash is stored in `data.js` (`adminPasscodeHash`).
  - When unlocking, the entered passcode is salted and hashed on the fly and compared against the stored hash.
- **In-Browser Passcode Settings**:
  - Added a dedicated **Admin Security & Passcode** card within the **Lab Info & Settings** tab in `admin.html`.
  - Authorized lab administrators can update the passcode directly from the CMS interface with validation (minimum 6 characters), confirmation matching, and a show/hide visibility toggle.
  - Clicking *"Save New Passcode"* computes the new SHA-256 hash and updates `siteData.adminPasscodeHash`. A subsequent click on *"Publish to GitHub"* deploys the new security credential live.
- **Purge of Legacy "Future Projects" Tab**:
  - Cleaned up the legacy "future-projects" navigation item and custom section from `data.js`.
  - Added automatic sanitization filters in `admin.html` startup to strip `future-projects` from legacy browser drafts in `localStorage`.

---

### 14. Public Site Copyright & Cache Invalidation (2026)
- **Copyright Year Update**:
  - Updated the public footer attribution in `index.html` to `© 2026 by the Evo-Devo lab`.
- **Cache-Busting Query**:
  - Incremented the data script cache-busting query parameter to `?v=6` across both `index.html` and `admin.html` to ensure browsers load updated site data immediately.

---

### 15. Direct Image Asset Upload Pipeline to GitHub `images/` Subfolders
- **Architecture Transition**:
  - Eliminated bulky Base64 data URL embedding inside `data.js`, preventing multi-megabyte bloat, speeding up site loading, and enabling independent browser caching of images.
- **Automatic Subdirectory Routing**:
  - Configured file selectors to automatically route uploads into organized repository subfolders:
    - **PI & Team Members**: `images/team/`
    - **Lab Animals Gallery**: `images/gallery/animals/`
    - **Lab Activities Gallery**: `images/gallery/activities/`
    - **Banners & Custom Sections**: `images/banners/`
    - **Lab & University Logos**: `images/logos/`
- **Filename Sanitization**:
  - Filenames are normalized automatically (converted to lowercase, spaces converted to underscores, special characters stripped, and valid extensions preserved, e.g. `Prof. Ariel Chipman (2026).JPG` $\rightarrow$ `prof_ariel_chipman_2026.jpg`).
- **Immediate Preview & Clean Data References**:
  - Local images are rendered instantly in the CMS preview element.
  - Form input fields and `data.js` record only clean relative paths (e.g. `./images/team/ariel_chipman_2026.jpg`).
- **Sequential GitHub Upload Pipeline**:
  - When clicking **"Publish to GitHub"**, `publishToGitHub()` checks for queued images and uploads each binary file directly to GitHub via `PUT /repos/{owner}/{repo}/contents/images/...` before committing `data.js`.
  - Displays real-time progress in the save modal (e.g. *"Uploading image 1/2: images/team/photo.jpg..."*).
  - Automatically fetches file SHA if updating an existing image file to prevent commit collisions.
- **Local Directory Access Support**:
  - Added support to write queued binary image files directly into the local `images/` folder when saving via the modern File System Access API.
