import type { BjorkTone } from './palette';

/** Tono efectivo. El site no tiene modo oscuro, así que el valor por defecto es claro. */
export function useBjorkTone(tone?: BjorkTone): BjorkTone {
  return tone ?? 'light';
}
