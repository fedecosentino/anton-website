import { useI18n } from '../i18n/useI18n';
import PhotoHero, { FloatingCard } from './PhotoHero';
import { BalanceCard, PaidCard } from './ProductCards';
import PillButton from './PillButton';

/** Hero de la home (y del demo): foto + tarjeta "Pagado" y saldo que cuenta de $5,000 a $3,701. */
export default function HomeHero({ text, demo: howLink = true }: { text?: { eyebrow: string; titleLead: string; titleAccent: string; body: string }; demo?: boolean }) {
  const { t } = useI18n();
  return (
    <PhotoHero
      {...(text ?? t.home.hero)}
      photo="hero"
      alt={t.photos.hero}
      position="30% 0%"
      actions={
        <>
          <PillButton href="#unirme">{t.common.joinLong}</PillButton>
          {howLink && (
            <PillButton href="#como-funciona" variant="secondary">
              {t.home.heroCta2}
            </PillButton>
          )}
        </>
      }
    >
      <FloatingCard slot="right" delay={1.3}>
        <PaidCard />
      </FloatingCard>
      <FloatingCard slot="bottom" delay={1.05}>
        <BalanceCard count />
      </FloatingCard>
    </PhotoHero>
  );
}
