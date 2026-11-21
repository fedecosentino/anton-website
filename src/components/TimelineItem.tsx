import { useI18n } from '../i18n/useI18n';
import type { Dict } from '../i18n/es';
import { StatusTag } from './Bits';

type Item = Dict['timeline']['items'][number];

/** Una operación de la línea de tiempo. Siempre sobre superficie oscura. */
export default function TimelineItem({ item, showWhy = false }: { item: Item; showWhy?: boolean }) {
  const { t } = useI18n();
  return (
    <li className="rounded-2xl border border-phone-border bg-phone-card p-3.5 text-phone-text">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <p className="font-mono text-[11.5px] text-phone-muted">
          {item.day} {item.time}
        </p>
        <StatusTag kind={item.status} />
      </div>
      <div className="mt-2 flex items-start justify-between gap-3">
        <p className="text-[14.5px] font-bold leading-snug">
          {item.title}
          {item.store && <span className="block text-[12.5px] font-normal text-phone-muted">{item.store}</span>}
        </p>
        <p className="whitespace-nowrap font-mono text-[14.5px] font-bold">{item.amount}</p>
      </div>
      {item.detail && <p className="mt-1 font-mono text-[11.5px] text-phone-muted">{item.detail}</p>}
      {showWhy && (
        <p className="mt-2.5 border-t border-phone-border pt-2.5 text-[13px] leading-snug">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-phone-muted">{t.timeline.whyLabel}: </span>
          {item.why}
        </p>
      )}
    </li>
  );
}
