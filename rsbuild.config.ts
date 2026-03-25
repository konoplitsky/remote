import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const normalizePublicUrl = (value?: string) => {
  if (!value) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  return `${withProtocol.replace(/\/+$/, '')}/`;
};

const assetPrefix = normalizePublicUrl(
  process.env.REMOTE_PUBLIC_URL
  ?? process.env.VERCEL_PROJECT_PRODUCTION_URL
  ?? process.env.VERCEL_URL
) ?? 'auto';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  output: {
    assetPrefix,
  },
  server: {
    port: 3001
  }
});
