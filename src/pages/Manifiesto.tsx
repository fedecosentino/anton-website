import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import HeroPanel from '../components/HeroPanel';
import Band, { bandEyebrow, type BandTone } from '../components/Band';
import Reveal from '../components/Reveal';
import { ArrowIcon } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions } from './_shared';

// Un fondo por bloque; nunca dos seguidos iguales (el cierre es negro).
const blockTones: BandTone[] = ['white', 'sand', 'ink', 'white', 'teal'];
const blockPattern = [undefined, 'lines', 'rings', undefined, 'rings'] as const;

export default function Manifiesto() {
  const { t } = useI18n();
  const m = t.manifiesto;
  usePageMeta(m.meta);
  return (
    <>
      <HeroPanel
        {...m.hero}
        actions={<HeroActions demo={false} />}
        float={false}
        panel="ink"
        pattern="dots"
        visual={
          <figure className="w-full max-w-[420px]">
            <blockquote className="font-display text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.05] tracking-[-0.02em]">“{m.quote}”</blockquote>
            <figcaption className="eyebrow mt-8 text-teal">{m.quoteBy}</figcaption>
          </figure>
        }
      />
      <article>
        {m.blocks.map((b, i) => {
          const tone = blockTones[i % blockTones.length];
          return (
            <Band key={b.n} tone={tone} pattern={blockPattern[i % blockPattern.length]}>
              <Reveal className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[280px_1fr] md:gap-12">
                <div className="[container-type:inline-size]">
                  <p className={`font-mono text-[13px] font-bold ${bandEyebrow[tone]}`}>{b.n}</p>
                  <h2 className="card-title mt-3">{b.title}</h2>
                </div>
                <div className="space-y-5">
                  {b.paragraphs.map((p) => (
                    <p key={p} className="text-[clamp(18px,1.7vw,22px)] leading-[1.6]">{p}</p>
                  ))}
                  {b.n === '04' && (
                    <Link to="/equipo" className={`link-arrow ${bandEyebrow[tone]}`}>
                      {m.teamLink}
                      <ArrowIcon />
                    </Link>
                  )}
                </div>
              </Reveal>
            </Band>
          );
        })}
      </article>
      <WaitlistSection title={m.waitlist.title} body={m.waitlist.body} photo="builders" />
    </>
  );
}
