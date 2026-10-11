# Prakhar Agrawal | Portfolio

React + Vite, no router dependency (case studies use `#/work/<slug>`), so it deploys on Vercel with zero config.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/

## Deploy on Vercel
1. Push this folder to a GitHub repo (the decks in public/decks are ~64 MB, under GitHub's 100 MB per-file limit).
2. vercel.com > Add New > Project > import the repo. Framework: Vite (auto-detected). Build: `npm run build`. Output: `dist`.
3. Or from the terminal: `npm i -g vercel && vercel --prod`.

## Edit content
- All text is in `src/data.js` (projects, experience, achievements, skills, contact).
- Resume: replace `public/resume.pdf`. Portrait: replace `public/portrait.jpg`.
- Add a deck: put the PDF in `public/decks/`, render pages to `public/slides/<name>-01.jpg` (`pdftoppm -jpeg -scale-to 1400 deck.pdf name`), then add an entry to `projects`.
