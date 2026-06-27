# Watch App

A React + Vite e-commerce app for watches, ready to deploy on Vercel.

## Project structure

- `frontend/` — React app (Vite + TypeScript + Tailwind)
- `backend/db.json` — Local development database for json-server
- `api/` — Vercel serverless API routes (used in production)

## Local development

1. Install dependencies:

```bash
cd frontend
npm install
cd ..
npm install
```

2. Start the API (json-server):

```bash
npm run dev:api
```

3. In another terminal, start the frontend:

```bash
npm run dev
```

The app runs at `http://localhost:5173` and uses the API at `http://localhost:5000`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Leave **Root Directory** empty (use the repo root). Vercel reads `vercel.json` at the project root.
4. Deploy — no extra settings needed.

Production uses the serverless API at `/api` — no separate backend is needed.

## Demo login

Use any user from `backend/db.json`, for example:

- Email: `shahd.ahmed32143@gmail.com`
- Password: `123456`
##live demo (https://real-watch-app-h47o.vercel.app/)
