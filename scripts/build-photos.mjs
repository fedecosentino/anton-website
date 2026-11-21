// Genera las fotos de la home a partir de los originales en scripts/photo-sources/.
// Uso: node scripts/build-photos.mjs
// Por foto: recorte al formato pedido, un ajuste suave para que las seis se lean como
// serie (temperatura y contraste) y dos tamaños en WebP + JPG dentro del peso máximo.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(root, 'photo-sources');
const OUT = path.join(root, '..', 'src', 'assets', 'photos');
const KB = 1024;

// src: original en photo-sources/. crop: región del original. warm: >1 calienta, <1 enfría.
const photos = [
  // Home
  { name: 'hero', src: 'hero', crop: { left: 0, top: 300, width: 2200, height: 2750 }, widths: [1200, 720], budget: 180 * KB, warm: 1.0, sat: 1.0 },
  { name: 'personal', src: 'personal', crop: { left: 0, top: 150, width: 2200, height: 1467 }, widths: [880, 560], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'empresas', src: 'empresas', crop: { left: 0, top: 0, width: 2200, height: 1467 }, widths: [880, 560], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'builders', src: 'builders', crop: { left: 0, top: 0, width: 2200, height: 1467 }, widths: [880, 560], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'retrato', src: 'retrato', crop: { left: 150, top: 1150, width: 1900, height: 1900 }, widths: [760, 420], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'control', src: 'control', crop: { left: 0, top: 150, width: 2200, height: 2750 }, widths: [960, 560], budget: 90 * KB, warm: 0.985, sat: 0.97 },
  // Heros de páginas interiores: recorte vertical 4:5 de los mismos originales
  { name: 'personal-v', src: 'personal', crop: { left: 0, top: 0, width: 2200, height: 2750 }, widths: [900, 600], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'empresas-v', src: 'empresas', crop: { left: 600, top: 0, width: 1173, height: 1467 }, widths: [1040, 640], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'builders-v', src: 'builders', crop: { left: 350, top: 0, width: 1173, height: 1467 }, widths: [1040, 640], budget: 90 * KB, warm: 1.0, sat: 1.0 },
  { name: 'calle-v', src: 'calle', crop: { left: 0, top: 350, width: 2200, height: 2750 }, widths: [1040, 640], budget: 90 * KB, warm: 1.0, sat: 1.0 },
];

function base(p, width) {
  const w = p.warm;
  return sharp(path.join(SRC, `${p.src}.jpg`))
    .extract(p.crop)
    .resize({ width })
    .recomb([
      [w, 0, 0],
      [0, 1, 0],
      [0, 0, 2 - w],
    ])
    .modulate({ saturation: p.sat })
    .linear(1.02, -3); // contraste un punto más firme, igual en toda la serie
}

async function encode(p, width, format) {
  for (let q = 80; q >= 36; q -= 4) {
    const img = base(p, width);
    const buf = format === 'webp' ? await img.webp({ quality: q, effort: 6 }).toBuffer() : await img.jpeg({ quality: q, mozjpeg: true }).toBuffer();
    if (buf.length <= p.budget) return { buf, q };
  }
  throw new Error(`No cabe en el peso máximo: ${p.name}-${width}.${format}`);
}

await mkdir(OUT, { recursive: true });
const manifest = {};
for (const p of photos) {
  const ratio = p.crop.height / p.crop.width;
  manifest[p.name] = { ratio: +(p.crop.width / p.crop.height).toFixed(4), sizes: [] };
  for (const width of p.widths) {
    const height = Math.round(width * ratio);
    for (const format of ['webp', 'jpg']) {
      const { buf, q } = await encode(p, width, format);
      const file = `${p.name}-${width}.${format}`;
      await writeFile(path.join(OUT, file), buf);
      console.log(`${file.padEnd(22)} ${String(Math.round(buf.length / KB)).padStart(4)} KB  q${q}`);
    }
    manifest[p.name].sizes.push({ width, height });
  }
}
await writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
