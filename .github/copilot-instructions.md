# Copilot / AI Agent Instructions — TechGadget

**Purpose:** Help an AI coding agent become productive quickly in this React + Vite storefront.

**Quick facts:**

- **Framework:** React 19 + Vite
- **Routing:** `react-router-dom` configured in `src/App.jsx` (routes: `/`, `/product/:id`, `/cart`, `/login`)
- **State:** `@reduxjs/toolkit` is listed, but `src/app/store.js` and `src/features/cartSlice.js` are currently empty — do not assume a working store unless files are populated.
- **Data source:** Local JSON at `data/products.json`. Hooks like `src/hooks/useFetchData.js` and `src/hooks/useFetchProducts.js` read from that file (they simulate async with `setTimeout`).
- **Styling:** Tailwind CSS (`tailwind.config.js`) + `index.css`.
- **Assets:** Static images under `public/` (e.g., `public/banner`); components reference these via `src` attributes.

**Developer workflows (what works now):**

- Start dev server: `npm run dev` (uses `vite`)
- Build: `npm run build`; Preview build: `npm run preview`
- Lint: `npm run lint` (ESLint config lives at project root)

**Architecture & data flow (essential):**

- App shell and routes: `src/App.jsx` mounts `Navbar`, `Footer`, and page routes.
- Pages are under `src/pages/` (e.g., `Home.jsx`, `ProductDetails.jsx`, `Cart.jsx`).
- Reusable UI lives in `src/components/` (e.g., `ProductCard.jsx`, `Navbar.jsx`, `Button.jsx`).
- Data fetching pattern: lightweight custom hooks in `src/hooks/` that read from `data/products.json`. Use `useFetchData('products')` or `useFetchProducts()` as examples.
- Navigation: `ProductCard` uses `useNavigate()` to open `/product/:id`.

**Project-specific conventions & patterns**

- Hook naming: `useFetchX` returns `{ data/..., isLoading, error }` or similar; prefer that shape when adding new hooks.
- Component exports: most components are default exports—follow same pattern.
- CSS/utility classes: Tailwind-first utility classes used directly in JSX.
- Small delays: hooks intentionally simulate latency with `setTimeout` / `Promise` — tests or dev flows should account for that.

**Integration points & dependencies to watch**

- `react-router-dom` (v7): check route component props and hooks.
- `react-redux` + `@reduxjs/toolkit`: present in deps but store/slices may be incomplete — open `src/app/store.js` before adding Redux code.
- Font Awesome: icons imported via `@fortawesome/*` packages in `src/components/FontAwesome.jsx`.

**When editing / adding features**

- Prefer existing hooks for data access instead of adding ad-hoc `fetch` calls; update `data/products.json` if you need new fixtures.
- If adding Redux, create or wire `src/app/store.js` and update `src/main.jsx` to wrap `<App />` with `<Provider store={store}>`.
- Keep route changes centralized in `src/App.jsx`.

**Files to inspect first (examples):**

- `src/App.jsx` — routing & app shell
- `src/hooks/useFetchData.js` — canonical data-fetch pattern
- `src/hooks/useFetchProducts.js` — products hook example
- `data/products.json` — single source of product & cart fixtures
- `src/components/ProductCard.jsx` — navigation + UI pattern

If any of the above areas are unclear or you need permission to add infra (tests, CI, or initialize Redux), ask the human to confirm before changing global patterns.

---

Please tell me which section to expand or if you want a version focused on running tests/CI or on adding Redux integration steps.
