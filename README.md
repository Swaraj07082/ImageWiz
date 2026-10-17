# ImageWiz

AI-powered text-to-image web app. Describe what you want, generate unique images, and browse curated galleries across categories like anime, animals, food, fashion, landscapes, sci-fi, and cars.

## Features

- **Text-to-image generation** — create images from prompts via [Pollinations AI](https://pollinations.ai/)
- **Explore gallery** — browse curated images by category
- **Google sign-in** — Firebase Authentication for signed-in generation and usage tracking
- **Responsive UI** — Next.js App Router, Tailwind CSS, and Radix/shadcn-style components

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS |
| Auth & data | Firebase Auth, Firestore |
| Cache / store | Vercel KV |
| Image API | Pollinations AI |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm / bun)
- A Firebase project (Auth + Firestore)
- A Vercel KV store (for category gallery data)

### Install

```bash
npm install
```

### Environment

Configure Firebase in `src/app/services/firebase.ts` (or move credentials to env vars) and ensure Vercel KV is linked for local/API use:

```bash
# Example if you migrate Firebase to env vars later
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
# ...other Firebase client keys

KV_REST_API_URL=
KV_REST_API_TOKEN=
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/
    page.tsx              # Home
    generate/             # Prompt → image
    explore/              # Category gallery
    aboutme/              # About
    api/                  # Category + user data routes
    services/firebase.ts  # Firebase client
  components/             # UI + feature components
public/                   # Static assets & category JSON seeds
```

## How it works

1. Sign in with Google.
2. Enter a prompt on **Generate** — ImageWiz requests an image from Pollinations AI.
3. Browse **Explore** for themed galleries loaded from Vercel KV / API routes.
4. Usage (images created) is stored per user in Firestore.

## License

Private project (`"private": true` in `package.json`). Add an open-source license here if you decide to publish one.
