import { motion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';
import { EASE } from '../lib/motion';
import { formatUSD, sample, type StatusKind } from '../data/sample';
import { AgentHeader } from './PhoneMock';
import { StatusTag } from './Bits';
import CountUp from './CountUp';
import TimelineItem from './TimelineItem';

type Op = { title: string; meta: string; amount: string; status: StatusKind };

/** Destello rojo que recorre el borde (rotación de un degradado cónico enmascarado). */
function RedSweep({ delay }: { delay: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2"
      style={{ background: 'conic-gradient(from 0deg, transparent 0 70%, #FF5D5D 88%, transparent 100%)' }}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 360, opacity: [0, 1, 1, 0] }}
      transition={{ delay, duration: 1.1, ease: 'easeInOut', times: [0, 0.1, 0.8, 1] }}
    />
  );
}

/** Pulso ámbar en el borde (solo opacidad). */
function AmberPulse({ delay }: { delay: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset ring-st-ok"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.15, 1, 0] }}
      transition={{ delay, duration: 1.6, times: [0, 0.2, 0.5, 0.7, 1] }}
    />
  );
}

export function OpRow({ op, play, delay = 0, enter = true }: { op: Op; play: boolean; delay?: number; enter?: boolean }) {
  return (
    <motion.li
      initial={play && enter ? { opacity: 0, x: 44 } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-phone-border"
        animate={play && op.status === 'blocked' ? { x: [0, -7, 6, -4, 3, 0] } : { x: 0 }}
        transition={{ delay: delay + 0.6, duration: 0.45 }}
      >
        {play && op.status === 'blocked' && <RedSweep delay={delay + 0.5} />}
        <div className="relative m-[1.5px] rounded-[15px] bg-phone-card px-3.5 py-3">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[14px] font-bold leading-snug">{op.title}</p>
            <p className="whitespace-nowrap font-mono text-[14px] font-bold">{op.amount}</p>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <p className="font-mono text-[11.5px] text-phone-muted">{op.meta}</p>
            <StatusTag kind={op.status} />
          </div>
        </div>
        {play && op.status === 'ok' && <AmberPulse delay={delay + 0.5} />}
      </motion.div>
    </motion.li>
  );
}

function FreezeLook({ active = false, delay = 0 }: { active?: boolean; delay?: number }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const tr = reduce ? { duration: 0 } : { duration: 0.35, delay };
  return (
    <motion.div
      className="mt-4 grid [grid-template-areas:'s']"
      animate={active && !reduce ? { scale: [1, 1.05, 1] } : { scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="flex min-h-[46px] items-center justify-center rounded-full border border-st-blocked/70 text-[14px] font-bold text-st-blocked [grid-area:s]"
        animate={{ opacity: active ? 0 : 1 }}
        transition={tr}
        aria-hidden={active}
      >
        {t.phone.freeze}
      </motion.div>
      <motion.div
        className="flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-st-blocked text-[14px] font-bold text-teal-on [grid-area:s]"
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={tr}
        aria-hidden={!active}
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><rect x="3" y="3" width="4" height="10" rx="1" /><rect x="9" y="3" width="4" height="10" rx="1" /></svg>
        {t.phone.frozen}
      </motion.div>
    </motion.div>
  );
}

/** Saldo, contador mensual, tres operaciones y "Congelar agente". */
export function WalletScreen({ animated = false }: { animated?: boolean }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const play = animated && !reduce;
  const delays = [1.2, 1.8, 2.4];
  const pct = sample.monthSpent / sample.monthLimit;
  return (
    <div>
      <AgentHeader />
      <div className="mt-5">
        <p className="text-[13px] text-phone-muted">{t.phone.balance}</p>
        <p className="mt-1 flex items-baseline gap-2 font-mono text-[38px] font-bold leading-none tracking-tight">
          {play ? (
            <CountUp from={sample.balanceStart} to={sample.balance} delay={1.2} duration={1.3} trigger="mount" format={formatUSD} />
          ) : (
            formatUSD(sample.balance)
          )}
          <span className="text-[12px] font-normal text-phone-muted">{sample.currency}</span>
        </p>
        <div className="mt-4">
          <div className="h-1.5 overflow-hidden rounded-full bg-phone-border">
            <motion.div
              className="h-full w-full origin-left rounded-full bg-teal"
              initial={play ? { scaleX: 0 } : false}
              animate={{ scaleX: pct }}
              transition={{ delay: 1.2, duration: 1.3, ease: EASE }}
            />
          </div>
          <p className="mt-2 font-mono text-[12px] text-phone-muted">
            <span className="sr-only">{t.phone.monthlyLabel}: </span>
            {t.phone.monthly}
          </p>
        </div>
      </div>
      <p className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.phone.recent}</p>
      <ul className="space-y-2">
        {t.phone.ops.map((op, i) => (
          <OpRow key={op.title} op={op} play={play} delay={delays[i]} />
        ))}
      </ul>
      <FreezeLook />
    </div>
  );
}

/** Compra autónoma: entra en la regla, se paga sola y el saldo baja. */
export function AutoScreen({ active = true }: { active?: boolean }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const play = active && !reduce;
  return (
    <div>
      <AgentHeader />
      <div className="mt-5">
        <p className="text-[13px] text-phone-muted">{t.phone.balance}</p>
        <p className="mt-1 flex items-baseline gap-2 font-mono text-[38px] font-bold leading-none tracking-tight">
          {play ? (
            <CountUp from={sample.balanceStart} to={sample.balance} delay={0.7} duration={1.1} trigger="mount" format={formatUSD} />
          ) : (
            formatUSD(sample.balance)
          )}
          <span className="text-[12px] font-normal text-phone-muted">{sample.currency}</span>
        </p>
      </div>
      <p className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.phone.recent}</p>
      <ul>
        <OpRow key={String(play)} op={t.phone.ops[0]} play={play} delay={0.15} />
      </ul>
      <div className="mt-3 rounded-xl bg-phone-card p-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.timeline.whyLabel}</p>
        <p className="mt-1 text-[13.5px] leading-snug">{t.timeline.items[2].why}</p>
      </div>
    </div>
  );
}

/** El agente pide OK. Con resolve, pasa a "Con tu OK · aprobado en 11 s". */
export function ApprovalScreen({ active = true, resolve = false }: { active?: boolean; resolve?: boolean }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const resolved = resolve && active;
  const tr = reduce ? { duration: 0 } : { duration: 0.4, delay: resolved ? 1.1 : 0 };
  return (
    <div>
      <AgentHeader />
      <div className="relative mt-5 overflow-hidden rounded-2xl bg-phone-border">
        <div className="relative m-[1.5px] rounded-[15px] bg-phone-card p-4">
          <p className="font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-st-ok">{t.approval.header}</p>
          <p className="mt-3 text-[17px] font-bold leading-snug">{t.approval.title}</p>
          <p className="text-[13px] text-phone-muted">{t.approval.store}</p>
          <p className="mt-3 font-mono text-[30px] font-bold leading-none">{t.approval.amount}</p>
          <div className="mt-4 rounded-xl bg-phone-bg p-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.approval.whyLabel}</p>
            <p className="mt-1 text-[13.5px] leading-snug">{t.approval.why}</p>
          </div>
          <div className="mt-4 grid [grid-template-areas:'s']">
            <motion.div className="grid grid-cols-2 gap-2 [grid-area:s]" initial={false} animate={{ opacity: resolved ? 0 : 1 }} transition={tr} aria-hidden={resolved}>
              <div className="flex min-h-[46px] items-center justify-center rounded-full bg-teal text-[14px] font-bold text-teal-on">{t.approval.approve}</div>
              <div className="flex min-h-[46px] items-center justify-center rounded-full border border-phone-border text-[14px] font-bold">{t.approval.reject}</div>
            </motion.div>
            <motion.div
              className="flex min-h-[46px] flex-wrap items-center justify-center gap-x-2 rounded-full border border-phone-border px-3 [grid-area:s]"
              initial={false}
              animate={{ opacity: resolved ? 1 : 0 }}
              transition={tr}
              aria-hidden={!resolved}
            >
              <StatusTag kind="okDone" />
              <span className="font-mono text-[11.5px] text-phone-muted">{t.approval.approved}</span>
            </motion.div>
          </div>
        </div>
        {active && !reduce && <AmberPulse delay={0.4} />}
      </div>
    </div>
  );
}

/** Regla en una frase con chips que aparecen y vista previa. */
export function RuleScreen({ active = true }: { active?: boolean }) {
  const { t } = useI18n();
  const reduce = useReduce();
  return (
    <div>
      <AgentHeader />
      <div className="mb-2 mt-5 flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.ruleScreen.header}</p>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-[10.5px] font-bold uppercase text-st-auto">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current" />
          {t.ruleScreen.active}
        </span>
      </div>
      <p className="rounded-2xl border border-phone-border bg-phone-card p-4 text-[15.5px] leading-snug">“{t.rule.sentence}”</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {t.rule.chips.map((c, i) => (
          <motion.li
            key={c}
            className="rounded-full border border-teal/50 px-3 py-1.5 font-mono text-[12px] text-phone-text"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={active || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: active ? 0.35 + i * 0.18 : 0, duration: 0.45, ease: EASE }}
          >
            {c}
          </motion.li>
        ))}
      </ul>
      <div className="mt-4 rounded-2xl bg-phone-card p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.rule.previewLabel}</p>
        <p className="mt-1.5 text-[14px] font-bold">{t.rule.previewParts.map((p) => `${p.n} ${p.label}`).join(' · ')}</p>
      </div>
    </div>
  );
}

/** Pago bloqueado y "Congelar agente" activándose. */
export function BlockedScreen({ active = true }: { active?: boolean }) {
  const { t } = useI18n();
  const reduce = useReduce();
  const play = active && !reduce;
  const op = t.phone.ops[2];
  return (
    <div>
      <AgentHeader />
      <p className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.phone.recent}</p>
      <ul>
        <OpRow key={String(play)} op={op} play={play} delay={0.15} enter={false} />
      </ul>
      <div className="mt-3 rounded-xl bg-phone-card p-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.timeline.whyLabel}</p>
        <p className="mt-1 text-[13.5px] leading-snug">{t.timeline.items[0].why}</p>
      </div>
      <FreezeLook active={active} delay={reduce ? 0 : 1.1} />
    </div>
  );
}

/** Política de un agente (Empresas). */
export function PolicyScreen() {
  const { t } = useI18n();
  return (
    <div>
      <AgentHeader />
      <p className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.policy.header}</p>
      <dl className="space-y-2">
        <div className="rounded-2xl bg-phone-card p-3.5">
          <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.policy.ownerLabel}</dt>
          <dd className="mt-1 text-[14.5px] font-bold">{t.agent.owner}</dd>
        </div>
        <div className="rounded-2xl bg-phone-card p-3.5">
          <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.policy.levelLabel}</dt>
          <dd className="mt-1 text-[14.5px] font-bold">{t.agent.level}</dd>
        </div>
        <div className="rounded-2xl bg-phone-card p-3.5">
          <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.policy.rulesLabel}</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {t.rule.chips.map((c) => (
              <span key={c} className="rounded-full border border-teal/50 px-2.5 py-1 font-mono text-[11.5px]">{c}</span>
            ))}
          </dd>
        </div>
      </dl>
      <p className="mt-3 text-[13px] text-phone-muted">{t.policy.exceptions}</p>
    </div>
  );
}

/** Línea de tiempo (Observatory). */
export function TimelineScreen({ limit = 5, showWhy = false }: { limit?: number; showWhy?: boolean }) {
  const { t } = useI18n();
  return (
    <div>
      <AgentHeader right={<span className="font-mono text-[11px] uppercase tracking-[0.1em] text-phone-muted">{t.timeline.header}</span>} />
      <ul className="mt-5 space-y-2">
        {t.timeline.items.slice(0, limit).map((it) => (
          <TimelineItem key={it.time + it.day} item={it} showWhy={showWhy} />
        ))}
      </ul>
    </div>
  );
}
