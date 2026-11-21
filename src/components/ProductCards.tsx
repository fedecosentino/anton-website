import { motion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';
import { EASE } from '../lib/motion';
import { formatUSD, sample } from '../data/sample';
import CountUp from './CountUp';
import { StatusTag } from './Bits';

const dark = 'rounded-[26px] border border-phone-border bg-phone-bg p-5 text-phone-text shadow-[0_18px_40px_rgba(6,6,8,.4)]';
const teal = 'rounded-[26px] bg-teal p-5 text-teal-on shadow-[0_18px_40px_rgba(6,6,8,.28)]';
const white = 'rounded-[26px] bg-surface p-5 text-ink shadow-[0_18px_40px_rgba(6,6,8,.28)]';
const label = 'font-mono text-[11px] uppercase tracking-[0.1em]';

/** Saldo del agente + contador mensual. Con count, el saldo cuenta de $5,000 a $3,701. */
export function BalanceCard({ count = false, delay = 1.25 }: { count?: boolean; delay?: number }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const play = count && !reduce;
  const pct = sample.monthSpent / sample.monthLimit;
  return (
    <div className={dark}>
      <p className="text-[13px] text-phone-muted">{t.phone.balance}</p>
      <p className="mt-1 flex items-baseline gap-2 font-mono text-[34px] font-bold leading-none tracking-tight">
        {play ? <CountUp from={sample.balanceStart} to={sample.balance} delay={delay} duration={1.3} trigger="mount" format={formatUSD} /> : formatUSD(sample.balance)}
        <span className="text-[12px] font-normal text-phone-muted">{sample.currency}</span>
      </p>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-phone-border">
        <motion.div className="h-full w-full origin-left rounded-full bg-teal" initial={play ? { scaleX: 0 } : false} animate={{ scaleX: pct }} transition={{ delay, duration: 1.3, ease: EASE }} />
      </div>
      <p className="mt-2 font-mono text-[12px] text-phone-muted">
        <span className="sr-only">{t.phone.monthlyLabel}: </span>
        {t.phone.monthly}
      </p>
    </div>
  );
}

/** "Pagado $1,299 · Tienda Norte · Dentro de tu regla, sin pedirte nada." */
export function PaidCard() {
  const { t } = useI18n();
  const c = t.home.heroCards;
  return (
    <div className={teal}>
      <p className="eyebrow">{c.paid}</p>
      <p className="mt-2 font-mono text-[28px] font-bold leading-none">{formatUSD(sample.monthSpent)}</p>
      <p className="mt-2 text-[14px] font-bold">{c.store}</p>
      <p className="mt-1 text-[13.5px] leading-snug">{c.note}</p>
    </div>
  );
}

/** El agente pide OK por una compra de $3,200. */
export function ApprovalMiniCard() {
  const { t } = useI18n();
  const a = t.approval;
  return (
    <div className={dark}>
      <p className={`${label} font-bold text-st-ok`}>{a.header}</p>
      <p className="mt-2.5 text-[15.5px] font-bold leading-snug">{a.title}</p>
      <p className="font-mono text-[11.5px] text-phone-muted">{a.store}</p>
      <p className="mt-2 font-mono text-[28px] font-bold leading-none">{a.amount}</p>
      <div className="mt-3.5 grid grid-cols-2 gap-2">
        <div className="flex min-h-[40px] items-center justify-center rounded-full bg-teal text-[13.5px] font-bold text-teal-on">{a.approve}</div>
        <div className="flex min-h-[40px] items-center justify-center rounded-full border border-phone-border text-[13.5px] font-bold">{a.reject}</div>
      </div>
    </div>
  );
}

/** Política de un agente: responsable y límites. */
export function PolicyMiniCard() {
  const { t } = useI18n();
  return (
    <div className={dark}>
      <p className={`${label} text-phone-muted`}>{t.policy.header}</p>
      <p className="mt-2 text-[15.5px] font-bold leading-snug">{t.agent.name}</p>
      <p className="font-mono text-[11.5px] text-phone-muted">{sample.agentId}</p>
      <p className={`${label} mt-3.5 text-phone-muted`}>{t.policy.ownerLabel}</p>
      <p className="mt-1 text-[14px] font-bold">{t.agent.owner}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {t.rule.chips.slice(0, 2).map((c) => (
          <li key={c} className="rounded-full border border-teal/50 px-2.5 py-1 font-mono text-[11.5px]">{c}</li>
        ))}
      </ul>
    </div>
  );
}

/** Pasaporte resumido, con sello de verificado. */
export function PassportMiniCard() {
  const { t } = useI18n();
  return (
    <div className={white}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-[18px] font-extrabold leading-none">ANTON</p>
          <p className={`${label} mt-1.5 font-bold text-teal-text`}>{t.passport.kicker}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border-2 border-teal-text px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-teal-text">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3 3 7-7" /></svg>
          {t.passport.stamp}
        </span>
      </div>
      <p className="mt-4 text-[15.5px] font-bold leading-snug">{t.agent.name}</p>
      <p className="font-mono text-[12.5px]">{sample.agentId}</p>
      <p className="mt-2.5 break-all border-t border-surface2 pt-2.5 font-mono text-[11.5px] text-muted">{sample.publicKey}</p>
    </div>
  );
}

/** La regla resumida en dos límites. */
export function RuleMiniCard() {
  const { t } = useI18n();
  return (
    <div className={teal}>
      <p className="eyebrow">{t.ruleScreen.active}</p>
      <ul className="mt-2.5 space-y-1.5">
        {t.rule.chips.slice(0, 2).map((c) => (
          <li key={c} className="font-mono text-[15px] font-bold leading-snug">{c}</li>
        ))}
      </ul>
    </div>
  );
}

/** Dos operaciones de la línea de tiempo. */
export function TimelineMiniCard() {
  const { t } = useI18n();
  const rows = [t.timeline.items[0], t.timeline.items[2]];
  return (
    <div className={dark}>
      <p className={`${label} text-phone-muted`}>{t.timeline.header}</p>
      <ul className="mt-2.5 space-y-2.5">
        {rows.map((r) => (
          <li key={r.time} className="border-t border-phone-border pt-2.5 first:border-0 first:pt-0">
            <div className="flex items-center justify-between gap-2">
              <StatusTag kind={r.status} />
              <span className="font-mono text-[11.5px] text-phone-muted">{r.detail}</span>
            </div>
            <div className="mt-1 flex items-baseline justify-between gap-3">
              <span className="text-[13.5px] font-bold leading-snug">{r.title}</span>
              <span className="whitespace-nowrap font-mono text-[13.5px] font-bold">{r.amount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
