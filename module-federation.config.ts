import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const normalizePublicUrl = (value?: string) => {
  if (!value) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  return withProtocol.replace(/\/+$/, '');
};

const publicUrl = normalizePublicUrl(
  process.env.REMOTE_PUBLIC_URL
  ?? process.env.VERCEL_PROJECT_PRODUCTION_URL
  ?? process.env.VERCEL_URL
);

const publicPathExpression = publicUrl
  ? `function() { return ${JSON.stringify(`${publicUrl}/`)}; }`
  : `function() { return "auto"; }`;

export default createModuleFederationConfig({
  name: 'remote',
  exposes: {
    './About': './src/pages/About.tsx',
    './export-app': './src/export-app.tsx'
  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.3.1', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^18.3.1', eager: true },
    '@happycode-core/counter-store': { singleton: true }
  },
  shareStrategy: 'version-first',
  dts: {
    consumeTypes: true
  },
  bridge: {
    enableBridgeRouter: true
  },
  manifest: {
    fileName: 'mf-manifest.json',
  },
  remoteType: "global",
  getPublicPath: publicPathExpression
});
