import { useSearchParams } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import { isProfile } from '../lib/waitlist';
import HeroPanel from '../components/HeroPanel';
import Band from '../components/Band';
import WaitlistForm from '../components/WaitlistForm';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle } from '../components/BentoCard';
import { SectionHeading } from '../components/Bits';
import { numText, subText, toneAt } from './_shared';

export default function ListaDeEspera() {
  const { t } = useI18n();
  const l = t.listaDeEspera;
  usePageMeta(l.meta);
  const [params] = useSearchParams();
  const q = params.get('perfil');
  const profile = isProfile(q) ? q : 'persona';
  return (
    <>
      <HeroPanel
        {...l.hero}
        interactiveVisual
        panel="teal"
        pattern="rings"
        visual={
          <div id="unirme" className="w-full max-w-[560px] rounded-[32px] bg-surface p-6 text-left sm:p-8">
            <WaitlistForm variant="full" tone="white" defaultProfile={profile} />
          </div>
        }
      />
      <Band tone="white">
        <Reveal><SectionHeading eyebrow={l.next.eyebrow} title={l.next.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-3">
          {l.next.items.map((s, i) => {
            const tone = toneAt('white', i);
            return (
              <BentoCard key={s.n} tone={tone} as="article">
                <p className={`font-mono text-[13px] font-bold ${numText(tone)}`}>{s.n}</p>
                <BentoTitle className="mt-auto pt-10">{s.title}</BentoTitle>
                <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{s.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>
    </>
  );
}
