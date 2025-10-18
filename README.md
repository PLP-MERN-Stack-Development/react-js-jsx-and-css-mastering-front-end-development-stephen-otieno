# React Mastering — JSX, CSS & API Integration

React Mastering is a small interactive front-end project built to demonstrate core front-end skills: component composition with React, styling (Tailwind-compatible), state management with hooks, local persistence, theming, and a lightweight external API integration for English word lookup.

It includes a Task Manager, a Word Explorer (random words + definitions), theme toggling, and simple page panels (About, Docs).

## Live Demo

No public demo is published yet. You can run the app locally (instructions below) or deploy to GitHub Pages or another static host.

## Key Features

### Task Manager

- Add tasks with a title
- Mark tasks complete / incomplete
- Delete tasks
- Tasks persist to the browser using `localStorage` via a `useLocalStorage` hook
- Search tasks by text

### Word Explorer

- Fetches a list of random words from a public API
- Looks up short definitions using the Datamuse API (no API key required)
- Manual lookup input for specific words
- Brief preview shown by default with a "Show more" option to expand full definitions

### Theming

- Light and Dark mode toggle
- Theme choice is saved to `localStorage` so it persists between sessions

### Navigation / Panels

- `Navbar` contains About and Docs buttons that open simple in-app panels
- `Footer` contains site footer information

## Tech Stack

| Component     | Technology                                          |
| ------------- | --------------------------------------------------- |
| Framework     | React (functional components, hooks)                |
| Bundler / Dev | Vite                                                |
| Styling       | Tailwind-compatible classes (optional) / plain CSS  |
| Persistence   | localStorage via custom hook                        |
| Word API      | Random-word API (Vercel) + Datamuse for definitions |

## Project Structure

```text
react-js-jsx-and-css-mastering-front-end-development-stephen-otieno/
│
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.cjs
├── tailwind.config.cjs
├── README.md
└── src/
  ├── App.jsx                 # Main app shell
  ├── App.css                 # Base styles (may include Tailwind directives)
  ├── main.jsx                # (optional) Vite entry file
  ├── components/
  │   ├── Navbar.jsx
  │   ├── Footer.jsx
  │   ├── Button.jsx
  │   ├── TaskManager.jsx
  │   └── Posts.jsx           # Word Explorer
  ├── hooks/
  │   └── useLocalStorage.js
  └── context/
    └── ThemeContext.jsx
```

## Installation Guide (PowerShell)

```powershell
# clone the repository (replace with your repo URL if needed)
git clone https://github.com/<your-username>/react-js-jsx-and-css-mastering-front-end-development-stephen-otieno.git
cd react-js-jsx-and-css-mastering-front-end-development-stephen-otieno

# install dependencies
npm install

# start development server
npm run dev

# open the URL printed by Vite (usually http://localhost:5173)
```

If `package.json` is missing or you want to scaffold locally, run:

```powershell
npm init -y
npm install react react-dom
npm install --save-dev vite
# add scripts in package.json: "dev": "vite", "build": "vite build", "preview": "vite preview"
```

## Build & Deploy (GitHub Pages)

Recommended (automatic) — use `gh-pages`:

```powershell
npm install --save-dev gh-pages
# add to package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

If the site will be served at `https://username.github.io/repo-name/`, set `base` in `vite.config.js` to `/repo-name/`.

Alternative: build (`npm run build`) and push `dist/` to a `gh-pages` branch or copy to a host of your choice.

## API Configuration

- Random words: `https://random-word-api.vercel.app/api?words=<n>`
- Definitions: `https://api.datamuse.com/words?sp={word}&md=d&max=1`

The app formats Datamuse `defs` results into readable previews. Datamuse does not guarantee definitions for all words; the manual lookup helps with targeted words.

## Notes & Troubleshooting

- If Vite reports `Missing script: "dev"`, add the `dev` script to `package.json`.
- If your editor flags Tailwind directives in `src/App.css`, install Tailwind/PostCSS or remove the directives if you don't intend to use Tailwind.
- If definitions are missing, Datamuse may not have that word — try reload or manual lookup.
- For deployment asset issues, ensure `vite.config.js` `base` matches your hosting path.

## Future Improvements

- Add caching for word definitions (localStorage) to reduce API calls
- Add React Router for real routes (About, Docs, Posts) and bookmarkable URLs
- Add user accounts and remote persistence (backend) for tasks
- Add tests for hooks and Posts lookup behavior

## Developer

Developed by `Stemiot Softwares`  
Email: info.stemiotsoftwares@gmail.com  
Location: Nairobi, Kenya

# Project: React JSX & CSS Mastering — Week 3

This is a small React front-end application created as a Week 3 exercise. It demonstrates:

- Component-based UI with React
- (Optional) Tailwind-based styling
- Theme toggling (light/dark)
- A Task Manager with localStorage persistence
- A Word Explorer that fetches random words and short definitions via Datamuse

This README explains how to run the app locally, build & deploy (GitHub Pages), the project structure, and troubleshooting tips.

---

## Features

- Task Manager

  - Add, complete, delete tasks
  - Tasks persisted to `localStorage` via `useLocalStorage`
  - Search/filter tasks

- Word Explorer (Posts)

  - Displays a batch of random words
  - Looks up definitions using Datamuse (`md=d`) and presents a short preview with a "Show more" option
  - Manual lookup input for specific words

- Theme

  - Light/dark toggle persisted across sessions

- Layout
  - `Navbar` (About & Docs), `Footer`, responsive content area

---

## Project layout (key files)

- `index.html` — app shell
- `src/App.jsx` — main application component
- `src/components/` — UI components (TaskManager, Posts, Navbar, Footer, Button)
- `src/hooks/useLocalStorage.js` — localStorage helper hook
- `src/context/ThemeContext.jsx` — theme provider
- `src/App.css` — base styles (may contain Tailwind directives)
- `vite.config.js`, `postcss.config.cjs`, `tailwind.config.cjs` — optional build tooling files

---

## Local setup (Windows PowerShell)

Prerequisites: Node.js (LTS) and npm.

1. If `package.json` exists in this repo (recommended):

```powershell
npm install
npm run dev
```

2. If this repo doesn't have `package.json`, scaffold a minimal local setup:

```powershell
npm init -y
npm install react react-dom
npm install --save-dev vite

# add scripts to package.json:
# "dev": "vite", "build": "vite build", "preview": "vite preview"

npm run dev
```

Open the browser at the URL printed by Vite (commonly `http://localhost:5173`).

---

## Build & Deploy to GitHub Pages

Recommended: use `gh-pages` to push `dist/` to a `gh-pages` branch.

```powershell
npm install --save-dev gh-pages
```

Add to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

If the site will live at `https://username.github.io/repo-name/`, set `base` in `vite.config.js` to `/repo-name/`.

Deploy:

```powershell
npm run deploy
```

Alternative: build (`npm run build`) and push `dist/` manually to `gh-pages` or use the `docs/` folder.

---

## API notes

- Random words are fetched from `https://random-word-api.vercel.app/api?words=<n>`.
- Definitions are fetched from Datamuse: `https://api.datamuse.com/words?sp={word}&md=d&max=1`.

Datamuse returns `defs` as an array of strings like `"n\tdefinition text"`. The app formats these into readable short definitions.

---

## Troubleshooting

- `Missing script: "dev"`: add the scripts shown earlier to `package.json` and run `npm install`.
- Tailwind directives (`@tailwind`, `@apply`) may show editor warnings unless `tailwindcss` and `postcss` are installed and configured. Install `tailwindcss`, `postcss`, and `autoprefixer` if you want the Tailwind tooling.
- Datamuse may not contain definitions for every random word — try manual lookup or reload words.
- If deployed assets 404, verify `base` in `vite.config.js`.

---

## Next steps I can help with

- Scaffold `package.json` and `src/main.jsx` so `npm run dev` works right away.
- Add `gh-pages` deployment scripts and run the first deploy (requires GitHub remote and push access).
- Add React Router for route-based navigation (About/Docs routes).

Tell me which you'd like and I'll implement it.
