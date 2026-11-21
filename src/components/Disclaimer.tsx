import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';

type Tone = 'page' | 'teal' | 'ink';
const toneCls: Record<Tone, string> = {
  page: 'text-muted',
  teal: 'text-teal-on',
  ink: 'text-onink',
};

export default function Disclaimer({ tone = 'page', className = '' }: { tone?: Tone; className?: string }) {
  const { t } = useI18n();
  const { pathname } = useLocation();
  // /equipo no muestra el aviso (decisión del 21-11-2026).
  if (pathname === '/equipo') return null;
  return (
    <p role="note" className={`text-[13.5px] leading-relaxed ${toneCls[tone]} ${className}`}>
      {t.common.disclaimer}
    </p>
  );
}
