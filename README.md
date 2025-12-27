# ClipLinks

Simple Next.js URL shortener — create short links and redirect to originals.

## Features

- Shorten URLs via a Next.js route
- Server-side storage using MongoDB (`lib/mongodb.js`)
- API route to generate shortened links (`/api/generate/route.js`)
- Simple UI in the `app/` directory

## Tech Stack

- Next.js 15
- React 19
- MongoDB (using the `mongodb` driver)
- Tailwind CSS (for styling)

## Getting Started

Prerequisites:

- Node.js (recommended v18+)
- A running MongoDB instance (Atlas or local)

Install dependencies:

```bash
npm install
```

Local development:

```bash
# set env var then run dev server
setx MONGODB_URI "your-mongodb-connection-string"
npm run dev
```

On PowerShell you can temporarily set the environment variable for the current session:

```powershell
$env:MONGODB_URI = "your-mongodb-connection-string"
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Environment Variables

- `MONGODB_URI` — MongoDB connection string used by `lib/mongodb.js`.

Add other secrets as needed for deployment.

## Project Structure (important files)

- `app/` — Next.js App Router pages and components
- `components/` — UI components (e.g., `Navbar.js`)
- `lib/mongodb.js` — MongoDB connection helper
- `app/api/generate/route.js` — API route that creates shortened links
- `public/` — static assets

## Scripts

Available npm scripts (from `package.json`):

- `npm run dev` — Starts Next.js dev server (uses Turbopack)
- `npm run build` — Builds the production app
- `npm run start` — Starts the production server
- `npm run lint` — Runs ESLint

## Deployment

You can deploy to Vercel or any platform that supports Next.js. Ensure `MONGODB_URI` is set in the platform's environment settings.

## Contributing

Contributions are welcome — open an issue or PR. Keep changes focused and add brief descriptions for commits.

## License

This project has no license specified. Add a `LICENSE` file if you want to make the project public with a chosen license.

---

If you want, I can commit `README.md` for you and push it to `origin/main`.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
