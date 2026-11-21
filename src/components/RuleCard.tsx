import { motion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';
import { EASE } from '../lib/motion';
import { Eyebrow, SampleTag } from './Bits';
import CountUp from './CountUp';

/** La regla escrita en una frase y sus tres chips. */
export function RuleCardBody({ dark = false }: { dark?: boolean }) {
  const { t } = useI18n();
  const reduce = useReduce();
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <Eyebrow className={dark ? 'text-teal' : 'text-teal-text'}>{t.rule.label}</Eyebrow>
        <SampleTag dark={dark} />
      </div>
      <p className="mt-6 text-[clamp(22px,2.4vw,32px)] font-medium leading-[1.25] tracking-[-0.01em]">“{t.rule.sentence}”</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-8">
        {t.rule.chips.map((c, i) => (
          <motion.li
            key={c}
            className={`chip ${dark ? 'border border-white/25 text-page' : 'bg-surface2 text-ink'}`}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.45, ease: EASE }}
          >
            {c}
          </motion.li>
        ))}
      </ul>
    </>
  );
}

/** Vista previa "11 autónomas · 1 te pide OK · 0 bloqueadas"; las cifras cuentan desde cero. */
export function RulePreviewBody({ title, body, dark = true }: { title: string; body: string; dark?: boolean }) {
  const { t } = useI18n();
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <Eyebrow className={dark ? 'text-teal' : 'text-teal-text'}>{t.rule.previewLabel}</Eyebrow>
        <SampleTag dark={dark} />
      </div>
      <ul className="mt-6 space-y-2">
        {t.rule.previewParts.map((p) => (
          <li key={p.label} className="flex items-baseline gap-3">
            <CountUp to={p.n} duration={1.1} className="font-display text-[44px] font-extrabold leading-none" />
            <span className="text-[17px] font-medium">{p.label}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[18px] font-bold leading-snug">{title}</p>
      <p className={`mt-2 text-[15.5px] leading-relaxed ${dark ? 'text-onink' : 'text-muted'}`}>{body}</p>
    </>
  );
}
