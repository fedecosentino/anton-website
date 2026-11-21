import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import HeroPanel from '../components/HeroPanel';
import Band from '../components/Band';
import { PhotoSlot } from '../components/Photo';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle, type Tone } from '../components/BentoCard';
import { ArrowIcon, Eyebrow, SectionHeading } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, subText, toneAt } from './_shared';

const N = 4;
const circle: Record<Tone, string> = { gray: 'bg-surface text-ink', white: 'bg-surface2 text-ink', ink: 'bg-teal text-teal-on', teal: 'bg-surface text-ink' };

export default function Equipo() {
  const { t } = useI18n();
  const e = t.equipo;
  const why = t.home.why;
  usePageMeta(e.meta);
  const tones = Array.from({ length: N }, (_, i) => toneAt('white', i));
  return (
    <>
      <HeroPanel
        {...e.hero}
        actions={<HeroActions demo={false} />}
        float={false}
        panel="sand"
        pattern="lines"
        visual={
          <div className="w-full max-w-[400px] rounded-[32px] bg-surface p-8 shadow-[0_30px_60px_rgba(6,6,8,.18)]">
            <div className="flex -space-x-3">
              {tones.map((tone, i) => (
                <span key={i} aria-hidden="true" className={`grid h-16 w-16 place-items-center rounded-full border-4 border-surface font-mono text-[13px] font-bold ${tone === 'ink' ? 'bg-ink text-page' : tone === 'teal' ? 'bg-teal text-teal-on' : 'bg-surface2 text-ink'}`}>
                  {e.member.initials}
                </span>
              ))}
            </div>
            <p className="eyebrow mt-8 text-teal-text">{e.cardTitle}</p>
          </div>
        }
      />

      <Band tone="white">
        <Reveal><SectionHeading eyebrow={e.section.eyebrow} title={e.section.title} body={e.section.body} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tones.map((tone, i) => (
            <BentoCard key={i} tone={tone} as="article">
              <span role="img" aria-label={e.initialsAria} className={`grid h-16 w-16 shrink-0 place-items-center rounded-full font-mono text-[14px] font-bold ${circle[tone]}`}>
                {e.member.initials}
              </span>
              <BentoTitle className="mt-auto pt-10">{e.member.name}</BentoTitle>
              <p className={`mt-2 font-mono text-[13px] uppercase tracking-[0.08em] ${subText(tone)}`}>{e.member.role}</p>
              <p className={`mt-3 text-[16px] leading-relaxed ${subText(tone)}`}>{e.member.bio}</p>
            </BentoCard>
          ))}
        </StaggerGrid>
      </Band>

      <Band tone="sand" pattern="lines">
        <Reveal className="grid overflow-hidden rounded-hero bg-surface lg:grid-cols-2">
          <PhotoSlot label={why.photoSlot} className="min-h-[280px] lg:min-h-[520px]" />
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 [container-type:inline-size]">
            <Eyebrow className="mb-4 text-teal-text">{why.eyebrow}</Eyebrow>
            <h2 className="h2">{why.title}</h2>
            <p className="lead mt-6 text-muted">{why.body}</p>
            <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.08em]">{why.signature}</p>
            <Link to="/manifiesto" className="link-arrow mt-4 w-fit text-teal-text">
              {why.link}
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </Band>

      <WaitlistSection title={e.waitlist.title} body={e.waitlist.body} photo="control" photoPosition="50% 40%" />
    </>
  );
}
