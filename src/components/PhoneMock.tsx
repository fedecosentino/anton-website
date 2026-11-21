import type { ReactNode } from 'react';
import { SampleTag } from './Bits';
import { useI18n } from '../i18n/useI18n';
import { sample } from '../data/sample';

/** Teléfono oscuro donde siempre se muestra el producto. */
export default function PhoneMock({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`relative w-full max-w-[330px] rounded-phone border border-phone-border bg-phone-bg p-[22px] text-phone-text shadow-[0_30px_60px_rgba(6,6,8,.35)] ${className}`}
    >
      <div className="mb-4 flex justify-end">
        <SampleTag dark />
      </div>
      {children}
    </div>
  );
}

export function AgentHeader({ right }: { right?: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-teal font-display text-[15px] text-teal-on">
          CJ
        </span>
        <div>
          <p className="whitespace-nowrap text-[15px] font-bold leading-tight">{t.agent.name}</p>
          <p className="font-mono text-[11.5px] text-phone-muted">{sample.agentId}</p>
        </div>
      </div>
      {right}
    </div>
  );
}
