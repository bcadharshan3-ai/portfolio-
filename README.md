# Dharshan A — Full-Stack Software Engineer Portfolio

A modern, high-performance, responsive portfolio website built for **Dharshan A**, Full-Stack Software Engineer (React.js, Next.js, Node.js, Express.js, AWS).

Combines the sleek dark aesthetic of [lustrous-horse](https://lustrous-horse-e213f5.netlify.app/) with the warm editorial typography of [gleaming-sherbet](https://gleaming-sherbet-d1aba8.netlify.app/), equipped with an instant **Theme Switcher** (Midnight Dark 🌙 / Editorial Warm ☀️).

---

## 🌟 Key Highlights & Architecture

- **Quantifiable Impact Metrics:**
  - ⚡ **30% Faster Page Loads** (Next.js SSR/SSG, GraphQL batching, Lambda caching)
  - 🛡️ **90% Unit Test Coverage** (Jest & SonarQube quality gates)
  - 🐛 **20% Fewer Post-Release Bugs** (Strict peer reviews, automated CI/CD)
  - 🚀 **4+ Major Feature Releases** delivered ahead of schedule
  - 🥇 **9.86 BCA CGPA** (1st Rank Holder & Gold Medallist at Thiagarajar College)
- **Interactive Project Showcase:**
  - 6 featured enterprise & client platforms (Katon Classroom, Reuters Admin Portal, Memomatic AI, Tring Hub, Revolt AEM, Revolt Creator Network).
  - Category filters (*EdTech, Enterprise, AI, Real-Time, Media CMS, Fintech*).
  - Interactive **Architecture Deep-Dive Modal** detailing system designs, libraries, and engineering decisions.
- **Interactive Skills Matrix:**
  - Categorized skill cards with interactive filtering tabs (*Frontend, Backend & APIs, Cloud & DevOps, Databases & Search, Testing & Quality, Leadership*).
- **Dual-Theme Design System:**
  - **Midnight Tech Mode** (Default): Radial glows, cyan/violet accents, high-contrast dark panels.
  - **Editorial Warm Paper Mode**: Georgia serif typography, forest green & terracotta orange accents, newspaper-style layout.
  - Remembers user preference in `localStorage`.
- **Integrated Contact & Resume Tools:**
  - One-click **Copy Email** and **Copy Phone** with instant toast notifications.
  - Direct **Download Resume** button referencing `Dharshan_A.pdf`.
  - Validated interactive contact form with client-side feedback.

---

## 🚀 How to Host on Netlify (Like the Reference Sites)

This repository is pre-configured with `netlify.toml` for 100% turnkey deployment to Netlify. Choose any of the 3 quick options below:

### Option 1: Netlify Drop (Instant · 30 Seconds · No Terminal Needed)
1. Open your browser and navigate to **[Netlify Drop](https://app.netlify.com/drop)**.
2. Sign in with your free Netlify account (or sign up via GitHub/Google/Email).
3. Open your file manager to `d:\DSA\Portfollio`.
4. Drag and drop the `Portfollio` folder into the Netlify Drop box in your browser.
5. Netlify will instantly upload, build, and deploy your site, giving you a live URL like `https://dharshan-portfolio.netlify.app/`!

---

### Option 2: Netlify CLI (Direct from Terminal)
1. In this project directory (`d:\DSA\Portfollio`), run:
   ```powershell
   npx.cmd netlify deploy
   ```
2. Follow the prompt to authorize your Netlify account in your browser.
3. When prompted for the publish directory, press Enter (defaults to `.`).
4. To deploy directly to production, run:
   ```powershell
   npx.cmd netlify deploy --prod --dir=.
   ```
5. Your custom URL will be printed in the terminal.

---

### Option 3: Connect via GitHub (Automatic Continuous Deployment)
1. Initialize Git and commit the project:
   ```powershell
   git init
   git add .
   git commit -m "feat: initial commit of Dharshan A portfolio"
   ```
2. Create a new GitHub repository (e.g. `dharshan-portfolio`) and push:
   ```powershell
   git remote add origin https://github.com/<your-username>/dharshan-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **[Netlify Dashboard](https://app.netlify.com/)** > **Add new site** > **Import an existing project**.
4. Select GitHub, pick your repository, and click **Deploy Site**. Every time you push changes to GitHub, Netlify will automatically update your live site!

---

## 🧪 Local Development & Unit Tests

### Run Unit Tests
```powershell
node --test tests/portfolio.test.js
```
Runs 11 automated test cases verifying data integrity, form validation, filter logic, and edge cases.

### Run Local Development Server
```powershell
npm start
# or
node server.js
```
Visit `http://localhost:3000` (or the configured port).

---

## 📁 Project Structure

```
d:\DSA\Portfollio/
├── index.html              # Main semantic HTML5 webpage
├── css/
│   └── style.css           # Dual-theme CSS design system (Dark & Editorial)
├── js/
│   ├── app.js              # Theme switcher, modals, toast, filters, copy actions
│   └── portfolio-data.js   # Structured data module & validation logic
├── tests/
│   └── portfolio.test.js   # Automated unit tests with node:test
├── netlify.toml            # Turnkey Netlify deployment & security headers
├── package.json            # Node.js project configuration
├── server.js               # Zero-dependency local preview server
├── Dharshan_A.pdf          # Verified official resume PDF
└── README.md               # Documentation & hosting guide
```
