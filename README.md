# Takara Haya Medical Website

Production-ready static website for Takara Haya Medical L.L.C., built with React, TypeScript, Vite, React Router, Tailwind CSS, Framer Motion, and Lucide React.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/` and is deployable as a static website on Vercel.

## Deployment

On Vercel, use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Contact Form Endpoint

The contact form uses `VITE_CONTACT_ENDPOINT` when configured.

1. Copy `.env.example` to `.env`.
2. Set `VITE_CONTACT_ENDPOINT` to a serverless form endpoint.
3. The endpoint should accept a JSON `POST` payload with the visible form fields.
4. Do not place secrets in frontend environment variables.

When no endpoint is configured, the form shows a clear mailto fallback to `info@takarahaya.com` instead of displaying a false success message.

## Content Editing

Approved website copy is centralized in:

- `src/data/content.ts`
- `src/data/site.ts`
- `src/data/navigation.ts`

Update these files when the approved company PDF changes. Keep legal, positioning, leadership, product, and contact details factually aligned with the approved source.

## Asset Replacement

The official logo is currently `public/brand/logo.jpeg`. Replace or add official assets in `public/brand/` and update references in `src/data/site.ts` if filenames change.

See `ASSET_REQUIREMENTS.md` for recommended future assets.
