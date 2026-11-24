# Videos

Search YouTube and watch results in the page. Built with React and [Vite](https://vite.dev/).

## Setup

Requires Node 20.19+ or 22.12+.

```bash
npm install
```

Create `.env.local` in the project root with a YouTube Data API v3 key:

```
REACT_APP_GOOGLE_API_KEY=your_key_here
```

The key is bundled into the browser JavaScript, so restrict it in Google Cloud
to the YouTube Data API v3 and to your site's HTTP referrers
(for example `http://localhost:3000/*`).

## Scripts

- `npm start` (or `npm run dev`): dev server at http://localhost:3000
- `npm run build`: production build in `build/`
- `npm run preview`: serve the production build locally
