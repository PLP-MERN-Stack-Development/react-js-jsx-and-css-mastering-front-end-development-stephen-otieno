# React JSX & CSS Mastering — Week 3 Assignment

This repository contains a small React app built for the Week 3 assignment. The app demonstrates component-based UI, theme toggling, local persistence, and an example integration with an English word lookup API.

> Note: This README assumes the repository root is the workspace root shown in VS Code.

---

## Features

- Task Manager

  - Add, complete, delete tasks
  - Tasks persist to `localStorage` using a small `useLocalStorage` hook
  - Search tasks and filter by status

- Word Explorer (Posts)

  - Fetches a list of random words
  - Lookup short definitions using the Datamuse API (no API key required)
  - Manual lookup (enter a word to search directly)
  - Brief-by-default definitions with "Show more" for full text

- Theming

  - Light / dark theme toggle persisted to `localStorage`

- Layout
  - `Navbar` with About & Docs panels
  - `Footer`

## Quick setup (Windows, PowerShell)

This project is a front-end prototype. It expects a standard React toolchain (Vite recommended). If the repo does not include a `package.json` or dev scripts, follow these steps to scaffold and run locally.

1. Install Node.js (LTS) if you don't have it: https://nodejs.org/

2. From the repository root in PowerShell, run:

```powershell
# create package.json & install Vite + React
npm init -y
npm install --save-dev vite
npm install react react-dom

# optional: install Tailwind/PostCSS if you want to build styles exactly as in the course
# npm install -D tailwindcss postcss autoprefixer
# npx tailwindcss init
```

3. Add minimal `package.json` scripts (open package.json and add under "scripts"):

```json
"scripts": {
   "dev": "vite",
   "build": "vite build",
   "preview": "vite preview"
}
```

4. Start the dev server:

```powershell
npm run dev
```

5. Open the browser at the local dev URL printed by Vite (usually http://localhost:5173).

## Project structure (important files)

- `src/App.jsx` — Main app shell, includes `Navbar`, `TaskManager`, `Posts`, and `Footer`
- `src/components/TaskManager.jsx` — Task list UI and localStorage-backed hook usage
- `src/components/Posts.jsx` — Word Explorer; fetches random words and definition lookups
- `src/components/Navbar.jsx` — Top navigation and theme toggle
- `src/components/Footer.jsx` — Footer
- `src/hooks/useLocalStorage.js` — Small hook to keep state in localStorage
- `src/context/ThemeContext.jsx` — Theme provider that toggles the `dark` class on `document.documentElement`
- `src/App.css` — Tailwind directives and base styles (if Tailwind is configured)

## API notes

- Random words are fetched from: `https://random-word-api.vercel.app/api?words=...`
- Definitions are fetched from Datamuse: `https://api.datamuse.com/words?sp={word}&md=d&max=1`
  - Datamuse returns `defs` in the shape `['n\\tdefinition text']` when available
  - The app formats and shows a brief first-sentence by default and a "Show more" option for the full definitions

## Troubleshooting

- If dev server fails with `Missing script: "dev"`, add the scripts shown above to `package.json` and run `npm install`.
- If Tailwind CSS rules show unknown at-rule errors in your editor, ensure `postcss` and `tailwindcss` are installed and the Vite config includes PostCSS.

## Next improvements (suggested)

- Add caching for definition results to reduce API lookups
- Add React Router to make About/Docs bookmarkable routes
- Add unit tests for the `useLocalStorage` hook and the Posts lookup logic
- Improve definition coverage with a secondary API fallback (Wordnik or Free Dictionary with an API key)

## License & attribution

This project is an exercise and uses public APIs (Datamuse, random-word-api). No license is specified — add one if you plan to publish.

## Questions / help

If you want, I can:

- Scaffold `package.json` and `src/main.jsx` and start the dev server here
- Add React Router and make About/Docs proper routes
- Implement caching for definitions

Tell me which you want next and I'll implement it.

# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:

1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
