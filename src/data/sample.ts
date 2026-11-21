// Datos de ejemplo (en dólares; ver BRAND-VOICE.md). Se muestran siempre junto a la
// etiqueta "Datos de ejemplo". No añadir cifras nuevas aquí sin actualizar la guía.
export type StatusKind = 'auto' | 'ok' | 'okDone' | 'blocked';

export const sample = {
  agentId: 'AID-3F7A',
  publicKey: 'ed25519:3f7a...c19e',
  currency: 'USD',
  balanceStart: 300,
  balance: 231,
  monthSpent: 69,
  monthLimit: 300,
  perPurchaseLimit: 80,
} as const;

export function formatUSD(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}
