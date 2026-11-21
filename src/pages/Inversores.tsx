import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import HeroPanel from '../components/HeroPanel';
import Band from '../components/Band';
import PillButton from '../components/PillButton';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle } from '../components/BentoCard';
import { SectionHeading } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { numText, subText, toneAt } from './_shared';

export default function Inversores() {
  const { t } = useI18n();
  const v = t.inversores;
  usePageMeta(v.meta);
  return (
    <>
      <HeroPanel
        {...v.hero}
        actions={<PillButton href="#contacto">{v.heroCta}</PillButton>}
        float={false}
        panel="ink"
        pattern="rings"
        visual={
          <div className="w-full max-w-[400px] rounded-[32px] bg-surface p-8 text-ink shadow-[0_30px_60px_rgba(6,6,8,.4)]">
            <p className="eyebrow text-teal-text">{v.cardTitle}</p>
            <ol className="mt-6 space-y-4">
              {v.thesis.blocks.map((b) => (
                <li key={b.n} className="flex items-baseline gap-4 border-t border-surface2 pt-4">
                  <span className="font-mono text-[13px] font-bold text-teal-text">{b.n}</span>
                  <span className="font-display text-[22px] font-extrabold leading-tight">{b.title}</span>
                </li>
              ))}
            </ol>
          </div>
        }
      />
      <Band tone="white">
        <Reveal><SectionHeading eyebrow={v.thesis.eyebrow} title={v.thesis.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-2">
          {v.thesis.blocks.map((b, i) => {
            const tone = toneAt('white', i === 3 ? 0 : i);
            return (
              <BentoCard key={b.n} tone={tone} as="article">
                <p className={`font-mono text-[13px] font-bold ${numText(tone)}`}>{b.n}</p>
                <BentoTitle className="mt-auto pt-10">{b.title}</BentoTitle>
                <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{b.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>
      <WaitlistSection id="contacto" eyebrow={v.contact.eyebrow} title={v.contact.title} body={v.contact.body} variant="contact" photo="builders" />
    </>
  );
}
