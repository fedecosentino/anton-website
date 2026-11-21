import { useI18n } from '../i18n/useI18n';
import PillButton from '../components/PillButton';
import type { Tone } from '../components/BentoCard';
import type { BandTone } from '../components/Band';

/** Acabados de tarjeta que funcionan sobre cada fondo de banda (nunca el mismo que el fondo). */
export const cardTones: Record<BandTone, Tone[]> = {
  white: ['gray', 'ink', 'teal'],
  page: ['white', 'ink', 'teal'],
  sand: ['white', 'ink', 'teal'],
  teal: ['white', 'ink', 'gray'],
  ink: ['white', 'teal', 'gray'],
};
export const toneAt = (band: BandTone, i: number): Tone => cardTones[band][i % 3];
export const subText = (tone: Tone) => (tone === 'ink' ? 'text-onink' : tone === 'teal' ? 'text-teal-on' : 'text-muted');
export const numText = (tone: Tone) => (tone === 'ink' ? 'text-teal' : tone === 'teal' ? 'text-teal-on' : 'text-teal-text');

/** Botones estándar del hero: lista de espera + «Ver cómo funciona» (los pasos de la home). */
export function HeroActions({ demo = true }: { demo?: boolean }) {
  const { t } = useI18n();
  return (
    <>
      <PillButton href="#unirme">{t.common.joinLong}</PillButton>
      {demo && (
        <PillButton to="/#como-funciona" variant="secondary">
          {t.home.heroCta2}
        </PillButton>
      )}
    </>
  );
}
