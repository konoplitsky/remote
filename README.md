# Rsbuild Project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Production deploy

For cross-origin Module Federation deployments, set a public URL for the remote app so
`mf-manifest.json` points chunk requests to the remote origin instead of the host origin.

Example Vercel environment variable:

```bash
REMOTE_PUBLIC_URL=https://your-remote-domain.vercel.app
```

