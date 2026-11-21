import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, fmt } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';

/**
 * Pantalla de puntos LED para la 404: "PÁGINA NO ENCONTRADA", un 404 en relieve con la
 * tipografía del logo (Syne 800), "SEÑAL PERDIDA" y los anillos de señal de ANTON saliendo
 * de la base, donde está el botón para volver al inicio. Un clic en la pantalla cambia de
 * canal: teal, ámbar y rojo, los tres colores de estado de ANTON.
 *
 * Se pinta en un canvas de baja resolución (un píxel por LED) que el CSS escala y recorta
 * en círculos con una máscara; un segundo canvas desenfocado hace el resplandor.
 */

// Fuente de 5×7 puntos. Los acentos se pintan en dos filas extra por encima.
const FONT: Record<string, string[]> = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  C: ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  G: ['01110', '10001', '10000', '10111', '10001', '10001', '01111'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['01110', '00100', '00100', '00100', '00100', '00100', '01110'],
  J: ['00111', '00010', '00010', '00010', '00010', '10010', '01100'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
  W: ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  '2': ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
  '3': ['11110', '00001', '00001', '01110', '00001', '00001', '11110'],
  '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  '6': ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
  '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
  '-': ['00000', '00000', '00000', '11111', '00000', '00000', '00000'],
  '=': ['00000', '00000', '11111', '00000', '11111', '00000', '00000'],
  '.': ['00000', '00000', '00000', '00000', '00000', '01100', '01100'],
  '◆': ['00100', '01110', '11111', '11111', '11111', '01110', '00100'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
};
const MARKS: Record<string, [string, string]> = {
  '́': ['00010', '00100'], // agudo
  '̀': ['01000', '00100'], // grave
  '̃': ['01001', '10110'], // tilde (ñ, ã)
  '̂': ['00100', '01010'], // circunflejo
};
const CHAR_W = 6; // 5 puntos + 1 de separación
const LINE_H = 11; // 2 de acento + 7 de letra + 2 de aire

// Formas de estado de ANTON: círculo (autónoma), rombo (con tu OK), cuadrado (bloqueada) y señal.
const SHAPES = [
  ['0011100', '0100010', '1000001', '1000001', '1000001', '0100010', '0011100'],
  ['0001000', '0010100', '0100010', '1000001', '0100010', '0010100', '0001000'],
  ['1111111', '1000001', '1000001', '1000001', '1000001', '1000001', '1111111'],
  ['0111110', '1000001', '0011100', '0100010', '0001000', '0000000', '0000000'],
];

const INK = [6, 6, 8];
const CHANNELS = [
  [0, 229, 195], // teal
  [245, 181, 68], // ámbar
  [255, 93, 93], // rojo
];

interface Glyph {
  rows: string[];
  marks?: [string, string];
}
function glyphs(text: string): Glyph[] {
  const out: Glyph[] = [];
  for (const ch of text.toUpperCase().normalize('NFD')) {
    if (MARKS[ch]) {
      if (out.length) out[out.length - 1].marks = MARKS[ch];
      continue;
    }
    if (ch === '̧') continue; // cedilla: se pinta la letra base
    out.push({ rows: FONT[ch] ?? FONT[' '] });
  }
  return out;
}
const textWidth = (text: string) => glyphs(text).length * CHAR_W - 1;

function wrap(text: string, maxCols: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (line && textWidth(next) > maxCols) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

interface Mask {
  w: number;
  h: number;
  data: Uint8Array;
}
/** "404" en Syne 800 convertido a una rejilla de puntos de `height` filas. */
function buildMask(height: number): Mask {
  const ss = 4;
  const fontPx = Math.round((height / 0.7) * ss);
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d')!;
  const font = `800 ${fontPx}px Syne, 'Arial Black', sans-serif`;
  ctx.font = font;
  const tw = Math.ceil(ctx.measureText('404').width);
  c.width = tw + ss * 4;
  c.height = Math.ceil(fontPx * 1.3);
  ctx.font = font;
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#fff';
  ctx.fillText('404', ss * 2, Math.round(fontPx));
  const img = ctx.getImageData(0, 0, c.width, c.height).data;
  const gw = Math.floor(c.width / ss);
  const gh = Math.floor(c.height / ss);
  const full = new Uint8Array(gw * gh);
  let minX = gw, maxX = -1, minY = gh, maxY = -1;
  for (let y = 0; y < gh; y++) {
    for (let x = 0; x < gw; x++) {
      let sum = 0;
      for (let dy = 0; dy < ss; dy++) for (let dx = 0; dx < ss; dx++) sum += img[((y * ss + dy) * c.width + x * ss + dx) * 4 + 3];
      if (sum / (ss * ss) > 115) {
        full[y * gw + x] = 1;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) return { w: 0, h: 0, data: new Uint8Array(0) };
  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  const data = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) data[y * w + x] = full[(y + minY) * gw + x + minX];
  return { w, h, data };
}

// Ruido estable por celda (para textura y destellos sin parpadeo aleatorio por fotograma).
const hash = (x: number, y: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
};

interface Layout {
  cell: number;
  cols: number;
  rows: number;
}

export default function LedScreen404() {
  const { t } = useI18n();
  const n = t.notFound;
  const reduce = useReduce();
  const panelRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLCanvasElement>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [channel, setChannel] = useState(0);
  const [hover, setHover] = useState(false);
  const [fontTick, setFontTick] = useState(0);
  const [cta, setCta] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const staticUntil = useRef(0);

  const nextChannel = useCallback(() => {
    staticUntil.current = performance.now() + 320;
    setChannel((c) => (c + 1) % CHANNELS.length);
  }, []);

  // Tamaño de la rejilla según el panel.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      const cell = width < 520 ? 5 : width < 900 ? 6 : 7;
      setLayout({ cell, cols: Math.ceil(width / cell), rows: Math.ceil(height / cell) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Redibuja el 404 cuando Syne termina de cargar.
  useEffect(() => {
    let alive = true;
    document.fonts?.load("800 60px 'Syne'").then(() => alive && setFontTick((v) => v + 1), () => undefined);
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const dots = dotsRef.current;
    const glow = glowRef.current;
    if (!layout || !dots || !glow) return;
    const { cols, rows, cell } = layout;
    dots.width = glow.width = cols;
    dots.height = glow.height = rows;
    const ctx = dots.getContext('2d')!;
    const gctx = glow.getContext('2d')!;
    const img = ctx.createImageData(cols, rows);
    const buf = new Float32Array(cols * rows);
    const cx = Math.floor(cols / 2);
    const margin = 6;
    const maxText = cols - margin * 2;

    // --- Composición (se calcula una vez por tamaño / idioma / canal)
    const topLines = wrap(n.led.top, maxText);
    const subText = n.led.channels[channel] ?? n.led.channels[0];
    const subLines = wrap(subText, maxText);
    const ctaLines = wrap(n.led.cta, maxText - 6);
    const ctaW = Math.max(...ctaLines.map(textWidth));
    const padY = 5;
    const pedTextH = ctaLines.length * LINE_H;
    const pedH = pedTextH + padY * 2 + 2;
    const pedTop = rows - pedH - Math.max(4, Math.round(rows * 0.05));
    const pedTopW = ctaW + 14;
    const slope = 0.75;

    const topY = Math.max(8, Math.round(rows * 0.08));
    const topH = topLines.length * LINE_H;
    const subH = subLines.length * LINE_H;
    const free = pedTop - (topY + topH) - subH - 14;
    // El 404 deja sitio a los lados para las formas flotantes (Syne es muy ancha).
    const sideRoom = cols < 100 ? 6 : 56;
    let digitH = Math.max(12, Math.min(Math.round(free * 0.78), 44));
    let mask = buildMask(digitH);
    if (mask.w > cols - sideRoom) {
      digitH = Math.max(10, Math.floor((digitH * (cols - sideRoom)) / mask.w));
      mask = buildMask(digitH);
    }
    const depth = Math.max(2, Math.round(mask.h * 0.16));
    const blockH = mask.h + depth;
    const m404Y = topY + topH + Math.max(3, Math.round((free - blockH) / 2));
    const m404X = cx - Math.floor(mask.w / 2) + Math.floor(depth / 4);
    const subY = m404Y + blockH + 5;

    // Zona clicable del botón, en píxeles del panel.
    const pedLeft = cx - Math.floor(pedTopW / 2);
    setCta({ left: pedLeft * cell, top: pedTop * cell, width: pedTopW * cell, height: (rows - pedTop) * cell });

    const floats = [
      { s: 0, x: m404X - 16, y: m404Y + 1 },
      { s: 1, x: m404X - 27, y: m404Y + Math.round(mask.h * 0.5) },
      { s: 3, x: m404X - 15, y: m404Y + mask.h - 3 },
      { s: 2, x: m404X + mask.w + 9, y: m404Y + 1 },
      { s: 3, x: m404X + mask.w + 20, y: m404Y + Math.round(mask.h * 0.45) },
      { s: 1, x: m404X + mask.w + 8, y: m404Y + mask.h - 3 },
    ].filter((f) => f.x >= 2 && f.x + 7 <= cols - 2);

    const set = (x: number, y: number, v: number) => {
      if (x >= 0 && x < cols && y >= 0 && y < rows) buf[y * cols + x] = v;
    };
    const drawText = (text: string, xLeft: number, yTop: number, v: number) => {
      glyphs(text).forEach((g, i) => {
        const gx = xLeft + i * CHAR_W;
        g.rows.forEach((row, ry) => {
          for (let c = 0; c < 5; c++) if (row[c] === '1') set(gx + c, yTop + 2 + ry, v);
        });
        g.marks?.forEach((row, ry) => {
          for (let c = 0; c < 5; c++) if (row[c] === '1') set(gx + c, yTop + ry, v);
        });
      });
    };
    const drawCentered = (lines: string[], yTop: number, v: number, deco?: string) => {
      lines.forEach((line, i) => {
        const full = deco && lines.length === 1 && textWidth(`${deco} ${line} ${deco}`) <= maxText ? `${deco} ${line} ${deco}` : line;
        drawText(full, cx - Math.floor(textWidth(full) / 2), yTop + i * LINE_H, v);
      });
    };

    const paint = (time: number) => {
      const now = performance.now();
      // 1 · Rejilla apagada + destellos sueltos
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let v = 0.075;
          const h = hash(x, y);
          if (h > 0.9965) v = reduce ? 0.3 : 0.18 + 0.3 * (0.5 + 0.5 * Math.sin(time * 1.6 + h * 900));
          buf[y * cols + x] = v;
        }
      }
      // 2 · Anillos de señal que salen de la base
      const ringCy = rows + 6;
      const rMax = Math.min(cols * 0.8, rows * 0.85);
      const ringTop = subY + subH + 1;
      for (let y = ringTop; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const d = Math.hypot(x - cx, y - ringCy);
          if (d > rMax) continue;
          const phase = (d - (reduce ? 0 : time * 5)) / 10;
          const frac = phase - Math.floor(phase);
          if (frac < 0.2) {
            const fade = Math.max(0, 1 - d / rMax);
            const v = 0.14 + 0.5 * fade;
            if (v > buf[y * cols + x]) buf[y * cols + x] = v;
          }
        }
      }
      // 3 · Texto superior
      drawCentered(topLines, topY, 0.95, '=');
      // 4 · 404 en relieve: costado, cara y borde iluminado
      for (let k = depth; k >= 1; k--) {
        const sx = m404X - Math.floor(k / 2);
        for (let y = 0; y < mask.h; y++) for (let x = 0; x < mask.w; x++) if (mask.data[y * mask.w + x]) set(sx + x, m404Y + y + k, 0.34);
      }
      for (let y = 0; y < mask.h; y++) {
        for (let x = 0; x < mask.w; x++) {
          if (!mask.data[y * mask.w + x]) continue;
          const edge = y === 0 || !mask.data[(y - 1) * mask.w + x];
          set(m404X + x, m404Y + y, edge ? 1.3 : 0.86 + 0.12 * hash(x + 3, y + 7));
        }
      }
      // 5 · Subtítulo del canal
      drawCentered(subLines, subY, 0.95, '◆');
      // 6 · Formas de estado flotando alrededor
      floats.forEach((f, i) => {
        const bob = reduce ? 0 : Math.round(Math.sin(time * 1.3 + i * 1.7) * 1.4);
        SHAPES[f.s].forEach((row, ry) => {
          for (let c = 0; c < 7; c++) if (row[c] === '1') set(f.x + c, f.y + ry + bob, 0.8);
        });
      });
      // 7 · Base con el botón
      const lit = hover ? 1.08 : 0.9;
      for (let y = pedTop; y < rows; y++) {
        const half = Math.floor(pedTopW / 2 + (y - pedTop) * slope);
        for (let x = cx - half; x <= cx + half; x++) set(x, y, lit - 0.1 * hash(x, y));
      }
      ctaLines.forEach((line, i) => drawText(line, cx - Math.floor(textWidth(line) / 2), pedTop + padY + i * LINE_H, 0.1));
      // 8 · Nieve al cambiar de canal
      if (!reduce && now < staticUntil.current) {
        for (let i = 0; i < buf.length; i++) buf[i] = buf[i] * 0.35 + Math.random() * 0.75;
      }
      // Volcado a color
      const col = CHANNELS[channel];
      for (let i = 0; i < buf.length; i++) {
        const v = buf[i];
        const b = Math.min(1, v);
        const hi = v > 1 ? Math.min(1, (v - 1) * 2.2) * 0.7 : 0;
        for (let k = 0; k < 3; k++) {
          const base = INK[k] + (col[k] - INK[k]) * b;
          img.data[i * 4 + k] = base + (255 - base) * hi;
        }
        img.data[i * 4 + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      gctx.putImageData(img, 0, 0);
    };

    if (reduce) {
      paint(0);
      return;
    }
    let raf = 0;
    let last = 0;
    const loop = (ts: number) => {
      raf = requestAnimationFrame(loop);
      if (ts - last < 40) return; // ~25 fps: suficiente para una pantalla de puntos
      last = ts;
      paint(ts / 1000);
    };
    paint(performance.now() / 1000);
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [layout, channel, hover, reduce, fontTick, n.led.top, n.led.cta, n.led.channels]);

  const size = layout ? { width: layout.cols * layout.cell, height: layout.rows * layout.cell } : undefined;
  const dotMask = layout
    ? {
        WebkitMaskImage: 'radial-gradient(circle at center, #000 0 43%, transparent 47%)',
        maskImage: 'radial-gradient(circle at center, #000 0 43%, transparent 47%)',
        WebkitMaskSize: `${layout.cell}px ${layout.cell}px`,
        maskSize: `${layout.cell}px ${layout.cell}px`,
      }
    : {};

  return (
    <div
      ref={panelRef}
      onClick={nextChannel}
      className="relative h-[min(840px,calc(100svh-116px))] min-h-[540px] cursor-pointer overflow-hidden rounded-hero bg-teal-on"
    >
      <canvas ref={glowRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 opacity-60" style={{ ...size, filter: `blur(${(layout?.cell ?? 6) * 1.5}px)` }} />
      <canvas ref={dotsRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0" style={{ ...size, imageRendering: 'pixelated', ...dotMask }} />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          nextChannel();
        }}
        className="absolute right-3 top-2 max-w-[70%] rounded-full px-3 py-2 text-right font-mono text-[10.5px] uppercase leading-snug tracking-[0.14em] text-onink hover:text-page sm:right-5 sm:top-3 sm:text-[11.5px]"
      >
        {n.led.hint}
      </button>
      <p aria-live="polite" className="sr-only">
        {fmt(n.led.channel, { n: channel + 1, total: CHANNELS.length, name: n.led.channels[channel] })}
      </p>

      {cta && (
        <Link
          to="/"
          onClick={(e) => e.stopPropagation()}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          aria-label={n.led.cta}
          className="absolute rounded-2xl"
          style={cta}
        />
      )}
    </div>
  );
}
