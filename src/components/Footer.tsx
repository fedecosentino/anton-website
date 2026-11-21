import { Link } from 'react-router-dom';
import { useI18n, fmt } from '../i18n/useI18n';
import Disclaimer from './Disclaimer';
import { Logo } from './Header';

export default function Footer() {
  const { t } = useI18n();
  const cols = [
    { title: t.footer.forWhom, links: [['/personal', t.nav.personal], ['/empresas', t.nav.empresas], ['/builders', t.nav.builders]] },
    { title: t.footer.product, links: [['/pasaporte', t.footer.passport], ['/cuentas-y-reglas', t.footer.accounts], ['/observatory', t.footer.observatory], ['/demo', t.footer.demo]] },
    { title: t.footer.company, links: [['/manifiesto', t.nav.manifesto], ['/equipo', t.nav.team], ['/inversores', t.nav.investors], ['/lista-de-espera', t.footer.waitlist]] },
  ];
  return (
    <footer className="border-t border-ink/10 bg-page pb-10 pt-16 text-ink">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-[34px]" />
            <p className="mt-4 max-w-xs text-muted">{t.footer.tagline}</p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="eyebrow text-teal-text">{c.title}</p>
              <ul className="mt-3">
                {c.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="inline-flex min-h-[44px] items-center text-[16px] hover:underline hover:decoration-2 hover:underline-offset-4">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-ink/10 pt-8">
          <Disclaimer tone="page" className="max-w-3xl" />
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <nav aria-label={t.footer.legalNav}>
              <ul className="flex flex-wrap gap-x-6">
                <li>
                  <Link to="/privacidad" className="inline-flex min-h-[44px] items-center text-[15px] underline decoration-1 underline-offset-4 hover:decoration-2">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link to="/aviso-legal" className="inline-flex min-h-[44px] items-center text-[15px] underline decoration-1 underline-offset-4 hover:decoration-2">
                    {t.footer.legal}
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="font-mono text-[12.5px] text-muted">{fmt(t.footer.copyright, { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
