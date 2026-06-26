# Watch App

A React + Vite e-commerce app for watches, ready to deploy on Vercel.

## Project structure

- `frontend/` — React app (Vite + TypeScript + Tailwind)
- `backend/db.json` — Local development database for json-server
- `frontend/api/` — Vercel serverless API routes (used in production)

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
3. Set the **Root Directory** to `frontend`.
4. Vercel will auto-detect Vite. Build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Deploy.

Production uses the serverless API at `/api` — no separate backend is needed.

## Demo login

Use any user from `backend/db.json`, for example:

- Email: `shahd.ahmed32143@gmail.com`
- Password: `123456`
