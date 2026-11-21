import { motion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';
import { sample } from '../data/sample';
import { SampleTag } from './Bits';

/** Tarjeta tipo pasaporte con sello VERIFICADO. */
export default function PassportCard({ stampDelay = 1.6, className = '' }: { stampDelay?: number; className?: string }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const rows: [string, string, boolean?][] = [
    [t.passport.nameLabel, t.agent.name],
    [t.passport.idLabel, sample.agentId, true],
    [t.passport.ownerLabel, t.agent.owner],
    [t.passport.keyLabel, sample.publicKey, true],
    [t.passport.levelLabel, t.agent.level],
  ];
  return (
    <div role="group" aria-label={t.passport.aria} className={`relative w-full max-w-[380px] overflow-hidden rounded-[32px] bg-surface p-6 text-ink shadow-[0_30px_60px_rgba(6,6,8,.28)] sm:p-7 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-[22px] font-extrabold leading-none">ANTON</p>
          <p className="eyebrow mt-2 text-teal-text">{t.passport.kicker}</p>
        </div>
        <SampleTag />
      </div>
      <dl className="mt-6 grid gap-3.5">
        {rows.map(([k, v, mono]) => (
          <div key={k} className="border-t border-surface2 pt-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{k}</dt>
            <dd className={`mt-1 break-words ${mono ? 'font-mono text-[15px]' : 'text-[16px] font-bold'}`}>{v}</dd>
          </div>
        ))}
      </dl>
      <motion.div
        className="ml-auto mt-5 grid h-[104px] w-[104px] place-items-center rounded-full border-[3px] border-teal-text text-teal-text"
        initial={reduce ? false : { scale: 1.8, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: -14 }}
        style={reduce ? { rotate: -14 } : undefined}
        transition={{ delay: stampDelay, type: 'spring', stiffness: 260, damping: 16 }}
      >
        <div className="grid h-[88px] w-[88px] place-items-center rounded-full border border-teal-text text-center">
          <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.1em]">
            <svg aria-hidden="true" viewBox="0 0 16 16" width="18" height="18" className="mx-auto mb-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3 3 7-7" /></svg>
            {t.passport.stamp}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
