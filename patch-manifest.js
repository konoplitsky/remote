import { readFileSync, writeFileSync } from 'fs';

const PUBLIC_PATH = 'https://remote-cw7z.vercel.app/';
const manifest = JSON.parse(readFileSync('./dist/mf-manifest.json', 'utf-8'));

manifest.metaData.publicPath = PUBLIC_PATH;
manifest.metaData.remoteEntry.path = PUBLIC_PATH;

writeFileSync('./dist/mf-manifest.json', JSON.stringify(manifest, null, 2));
console.log('✅ mf-manifest.json patched with publicPath:', PUBLIC_PATH);
