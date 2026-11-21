import type { ReactNode } from 'react';
import { useI18n } from '../i18n/useI18n';
import type { StatusKind } from '../data/sample';

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Etiqueta "Datos de ejemplo". */
export function SampleTag({ dark = false, onTeal = false, className = '' }: { dark?: boolean; onTeal?: boolean; className?: string }) {
  const { t } = useI18n();
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] ${
        dark ? 'border border-phone-border text-phone-muted' : onTeal ? 'border border-teal-on text-teal-on' : 'bg-surface2 text-muted'
      } ${className}`}
    >
      {t.common.sample}
    </span>
  );
}

const statusColor: Record<StatusKind, string> = {
  auto: 'text-st-auto',
  ok: 'text-st-ok',
  okDone: 'text-st-ok',
  blocked: 'text-st-blocked',
};
const statusShape: Record<StatusKind, string> = {
  auto: 'rounded-full',
  ok: 'rounded-[2px] rotate-45',
  okDone: 'rounded-[2px] rotate-45',
  blocked: 'rounded-[1px]',
};

/** Estado siempre con etiqueta de texto (y forma distinta). Solo sobre superficies oscuras. */
export function StatusTag({ kind, className = '' }: { kind: StatusKind; className?: string }) {
  const { t } = useI18n();
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.06em] ${statusColor[kind]} ${className}`}>
      <span aria-hidden="true" className={`inline-block h-2 w-2 bg-current ${statusShape[kind]}`} />
      {t.status[kind]}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, body, className = '', tone = 'page' }: { eyebrow?: string; title: string; body?: string; className?: string; tone?: 'page' | 'white' | 'sand' | 'ink' | 'teal' }) {
  const sub = tone === 'ink' ? 'text-onink' : tone === 'teal' ? 'text-teal-on' : 'text-muted';
  const eye = tone === 'ink' ? 'text-teal' : tone === 'teal' ? 'text-teal-on' : 'text-teal-text';
  return (
    <div className={`max-w-3xl [container-type:inline-size] ${className}`}>
      {eyebrow && <Eyebrow className={`mb-4 ${eye}`}>{eyebrow}</Eyebrow>}
      <h2 className="h2">{title}</h2>
      {body && <p className={`lead mt-5 ${sub}`}>{body}</p>}
    </div>
  );
}

export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
