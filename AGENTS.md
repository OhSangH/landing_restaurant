# Agent Notes

- Frontend-only Vite + React + TypeScript project for a western restaurant landing page.
- Styling rule: only `src/styles/reset.css` as CSS; all component styles live in `.styles.ts` using MUI/emotion.
- Routing: `/` home, `/menu`, `/menu/:id`, `/directions` with Leaflet map (no leaflet CSS import; minimal styles via MUI GlobalStyles).
- Dummy data lives in `src/data`, types in `src/types`, and utilities in `src/utils`.
