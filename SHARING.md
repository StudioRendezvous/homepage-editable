# Sharing this preview with teammates

This folder is a **self-contained static site** (~17 MB). Teammates view it in a browser after starting a tiny local web server. No Cursor, Node, or npm required—only **Python 3** (already on most Macs; easy to install on Windows).

## Why not “just open index.html”?

The homepage loads React components with `fetch()` and compiles JSX in the browser with Babel. Browsers block that on `file://` URLs. **`preview.sh` (or Python’s HTTP server) is required.**

A single merged HTML file is **not** practical without a large refactor (many scripts, fonts, images, and a hero `.webm`).

---

## Recommended: zip the whole folder (easiest)

### You (sender)

1. From this folder, create a share zip:

   ```bash
   cd "/Users/shanefrench/Projects/Human Interest - Cursor/homepage-editable"
   ./package-share.sh
   ```

   That writes `../homepage-editable-share-YYYYMMDD.zip` (parent directory).

   Or zip manually: include everything **except** `.git` if present.

2. Send the `.zip` (Slack, Drive, email—~17 MB).

### Teammate (viewer)

1. Unzip anywhere (e.g. Desktop → `homepage-editable/`).
2. Open Terminal (Mac) or Command Prompt / PowerShell (Windows).
3. Go into the folder:

   ```bash
   cd path/to/homepage-editable
   ```

4. Start the preview:

   **Mac / Linux**

   ```bash
   chmod +x preview.sh   # once, if needed
   ./preview.sh
   ```

   Or without the script:

   ```bash
   python3 -m http.server 8081
   ```

   **Windows**

   ```powershell
   py -m http.server 8081
   ```

   (Use `python` instead of `py` if that’s what works on their machine.)

5. Open in a browser:

   | Page | URL |
   |------|-----|
   | **Homepage** | http://localhost:8081/ |
   | **Pricing** | http://localhost:8081/pricing.html |

6. To stop the server: close the terminal or press `Ctrl+C` in the window where it’s running.

**Included in the zip:** `index.html`, `pricing.html`, `scripts/`, `styles/`, `assets/` (fonts, images, webm), and `vendor/` (React + Babel—no internet needed).

---

## GitHub Pages (team link — no zip)

Public preview hosted from [StudioRendezvous/homepage-editable](https://github.com/StudioRendezvous/homepage-editable). The site may take 1–2 minutes to build after a push.

| Page | URL |
|------|-----|
| **Homepage** | https://studiorendezvous.github.io/homepage-editable/ |

**Note:** The pricing page is **not** published on GitHub Pages yet (nav/footer links are disabled there). Local zip preview still includes `pricing.html` at http://localhost:8081/pricing.html if you keep that file in your copy.

---

## Optional: other shareable URLs (no zip for viewers)

Upload the **unzipped folder** to another static host if needed.

| Service | Steps |
|---------|--------|
| **[Netlify Drop](https://app.netlify.com/drop)** | Drag the `homepage-editable` folder onto the page → copy the URL → share. Free, no account required for a quick drop. |
| **Cloudflare Pages / Vercel** | Connect repo or upload folder; same idea as Netlify. |

Homepage: `https://your-site/`  
Pricing: `https://your-site/pricing.html`

---

## What teammates are *not* getting

- **Not** a single `.html` file they can double-click.
- **Not** the original 8 MB bundler draft (`Homepage_v1 (5-28-26).html`)—this is the editable recreation in this folder.
- **No** live CMS or deploy pipeline—only a local or static preview.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank page / red error about `file://` | Use `http://localhost:8081`, not double-clicking `index.html`. |
| Port 8081 in use | Run `python3 -m http.server 8082` and open http://localhost:8082/ |
| `python3` not found (Windows) | Install Python from https://www.python.org/downloads/ (check “Add to PATH”) or use `py -m http.server 8081`. |
| Missing images | Ensure the full `assets/` folder was included in the zip. |

---

## Quick reference for your message to teammates

> I’m sending a zip of our homepage preview. Unzip it, open Terminal in that folder, run `./preview.sh` (Mac) or `python3 -m http.server 8081`, then open **http://localhost:8081/** in Chrome. Pricing page: **http://localhost:8081/pricing.html**. You only need Python—no other installs.
