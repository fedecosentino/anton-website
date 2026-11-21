import { useI18n } from '../i18n/useI18n';
import type { Dict } from '../i18n/es';
import { usePageMeta } from '../lib/hooks';
import HeroPanel from '../components/HeroPanel';
import Reveal from '../components/Reveal';

type LegalData = Dict['privacidad'];

function LegalPage({ data }: { data: LegalData }) {
  usePageMeta(data.meta);
  const words = data.title.split(' ');
  const accentCount = Math.min(2, words.length);
  return (
    <>
      <HeroPanel
        eyebrow={data.eyebrow}
        titleLead={words.slice(0, words.length - accentCount).join(' ')}
        titleAccent={words.slice(words.length - accentCount).join(' ')}
        body={data.updated}
      />
      <article className="container-site mt-12 pb-20 sm:mt-16 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <p role="note" className="rounded-3xl bg-surface2 px-6 py-5 text-[15.5px] font-medium leading-relaxed">
            {data.template}
          </p>
          <div className="mt-10 space-y-10">
            {data.sections.map((s) => (
              <Reveal key={s.title} as="section">
                <h2 className="card-title">{s.title}</h2>
                <p className="mt-3 text-[18px] leading-[1.65]">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

export function Privacidad() {
  const { t } = useI18n();
  return <LegalPage data={t.privacidad} />;
}

export function AvisoLegal() {
  const { t } = useI18n();
  return <LegalPage data={t.avisoLegal} />;
}
