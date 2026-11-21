// Colores por defecto de StrokeDrawType cuando no se pasan `color` / `accentColor`.
// Adaptados a los tokens de ANTON.
export type BjorkTone = 'light' | 'dark';

export const BJORK_PALETTE: Record<BjorkTone, { text: string; accentInk: string }> = {
  light: { text: '#0B0D0C', accentInk: '#006B5C' },
  dark: { text: '#F3F5F2', accentInk: '#00E5C3' },
};
