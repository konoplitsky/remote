import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const publicPath = "function() { return \"https://remote-cw7z.vercel.app/\"; }"

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
  getPublicPath: publicPath
});
