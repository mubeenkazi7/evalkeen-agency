# evalkeen website

Static marketing site built with [Astro](https://astro.build). Three pages: `/`, `/clinics`, `/immigration`.
No backend, no database: it builds to plain HTML/CSS with a few lines of JavaScript.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Fill in your details — one file

Everything you need to change is in **`src/site.config.ts`**:

| Field | What to put |
|---|---|
| `phone` | Number shown for "Call us", e.g. `+91 98765 43210` |
| `whatsapp` | Digits with country code, e.g. `919876543210` |
| `email` | e.g. `hello@evalkeen.com` |
| `bookingUrl` | Your Cal.com / Google Calendar booking link |
| `socials` | Instagram, YouTube, LinkedIn URLs (each shows in the footer once filled) |
| `videos` | YouTube or Loom links for the two demos (see below) |
| `plausibleDomain` | Optional analytics, e.g. `evalkeen.com` |

Empty values fall back safely: buttons scroll to the contact section, videos show a "coming soon" frame,
and empty social links are hidden.

Also set your real domain in `astro.config.mjs` (`site:`), used for canonical URLs and link previews.

## Adding the demo videos (YouTube or Loom)

Paste the share link into `src/site.config.ts`:

```ts
videos: {
  clinic: { url: 'https://www.loom.com/share/<id>', vertical: false, poster: '' },
  immigration: { url: 'https://youtube.com/shorts/<id>', vertical: true, poster: '' },
},
```

- Accepted links: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/shorts/…`, `loom.com/share/…`. A plain `.mp4` path also works.
- `vertical: true` shows a phone-shaped 9:16 frame (phone screen recordings, YouTube Shorts).
  `vertical: false` shows a 16:9 frame (Loom screen recordings, normal YouTube videos).
- Nothing from YouTube or Loom loads until the visitor presses play, so the page stays fast.
  Normal (16:9) YouTube videos show their thumbnail automatically. For Shorts and Loom, add an optional
  `poster` image (put it in `public/` and use e.g. `'/videos/clinic-poster.jpg'`), otherwise a dark frame with a play button shows.
- Set YouTube videos to **Unlisted** (not Private) and Loom videos to **anyone with the link can view**, or they won't play on the site.

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo. Vercel detects Astro; keep the defaults.
3. Deploy. Then **Settings → Domains** → add your domain and follow the DNS instructions.

Netlify or Cloudflare Pages work the same way (build command `npm run build`, output folder `dist`).

## Where things live

```
src/
  site.config.ts          ← your details
  styles/global.css       ← colours, type, shared classes
  layouts/Base.astro      ← <head>, SEO tags, header + footer
  components/
    Header.astro          ← nav with Industries dropdown
    Footer.astro
    ContactCTA.astro      ← red "book / WhatsApp / call / email" band
    DemoVideo.astro       ← phone-frame video player
    IndustryHero.astro    ← hero + video for industry pages
    IndustryBody.astro    ← leak table, steps, safety/compliance note
  pages/
    index.astro           ← homepage (copy lives at the top of the file)
    clinics.astro
    immigration.astro
```

To add a new industry page later (e.g. business setup), copy `immigration.astro` to a new file,
change the copy, and add a link to it in `Header.astro`'s dropdown and the Industries section of `index.astro`.
