# Deployment

## Production build

Use Node.js 18.17 or newer:

```bash
npm ci
npm run build
npm start
```

The application listens on port `3000` by default. Set `PORT` when your hosting provider assigns a different port:

```bash
PORT=8080 npm start
```

## Environment

Copy `.env.example` to `.env.local` for local production testing, or configure the variable in your hosting provider:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
CONTACT_EMAIL_TO=you@yourdomain.com
```

This value is used for canonical metadata, `sitemap.xml`, and `robots.txt`. Do not leave it set to `localhost` in production.

`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is optional. The current contact page uses an embedded Google Maps URL, so no API key is required unless the map integration changes to the Google Maps JavaScript or Embed API.

`CONTACT_EMAIL_TO` is optional and defaults to `info@firstdestltd.com`. The current contact endpoint logs the validated submission and its destination; connect an email provider before relying on it for outbound email delivery.

## Hosting notes

- Build with `npm run build` and run with `npm start`.
- Keep `node_modules` out of uploaded archives when the host supports `npm ci`.
- Keep `.env*` files containing real secrets out of source control.
- The admin dashboard currently stores settings and uploaded images in each browser's `localStorage`; it is not a shared server-side CMS yet. Use a database and authenticated API before using it for multi-user production content management.
