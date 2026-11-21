import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useI18n, LANGS } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';
import PillButton from './PillButton';
import AnimatedLogo from './AnimatedLogo';

const companyLinks = [
  { to: '/manifiesto', key: 'manifesto' },
  { to: '/equipo', key: 'team' },
  { to: '/inversores', key: 'investors' },
] as const;

const mainLinks = [
  { to: '/personal', key: 'personal' },
  { to: '/empresas', key: 'empresas' },
  { to: '/builders', key: 'builders' },
] as const;

export function Logo({ className = '' }: { className?: string }) {
  return <span className={`font-display text-[26px] font-extrabold leading-none tracking-[-0.02em] ${className}`}>ANTON</span>;
}

function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div role="group" aria-label={t.lang.groupLabel} className={`flex items-center font-mono text-[13px] ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="px-0.5 text-muted">/</span>}
          <button
            type="button"
            lang={l}
            aria-pressed={lang === l}
            aria-label={t.lang[l]}
            onClick={() => setLang(l)}
            className={`grid min-h-[44px] min-w-[40px] place-items-center rounded-full px-1.5 uppercase ${lang === l ? 'font-bold text-ink underline decoration-2 underline-offset-[6px]' : 'text-muted hover:text-ink'}`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `inline-flex min-h-[44px] items-center px-3 text-[16px] ${isActive ? 'font-bold underline decoration-2 underline-offset-[8px]' : 'font-medium hover:underline hover:decoration-2 hover:underline-offset-[8px]'}`;

function CompanyMenu() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const active = companyLinks.some((l) => pathname.startsWith(l.to));

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative">
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="company-menu"
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex min-h-[44px] items-center gap-1.5 px-3 text-[16px] ${active ? 'font-bold underline decoration-2 underline-offset-[8px]' : 'font-medium'}`}
      >
        {t.nav.company}
        <svg aria-hidden="true" viewBox="0 0 12 12" width="11" height="11" className={`transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id="company-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full mt-2 w-56 rounded-3xl bg-surface p-2 shadow-[0_20px_40px_rgba(6,6,8,.14)]"
          >
            {companyLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => `flex min-h-[44px] items-center rounded-2xl px-4 text-[16px] hover:bg-surface2 ${isActive ? 'font-bold' : 'font-medium'}`}
                >
                  {t.nav[l.key]}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { t } = useI18n();
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>('a, button');
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const big = ({ isActive }: { isActive: boolean }) =>
    `flex min-h-[52px] items-center font-display text-[34px] font-extrabold leading-none tracking-[-0.02em] ${isActive ? 'underline decoration-teal decoration-[5px] underline-offset-[8px]' : ''}`;

  return (
    <motion.div
      ref={panel}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-page"
    >
      <div className="container-site flex h-[68px] items-center justify-between">
        <Link to="/" aria-label={t.nav.home} className="inline-flex min-h-[44px] items-center">
          <Logo />
        </Link>
        <button ref={closeBtn} type="button" onClick={onClose} aria-label={t.nav.closeMenu} className="grid h-11 w-11 place-items-center rounded-full bg-surface2">
          <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>
      </div>
      <nav aria-label={t.nav.main} className="container-site pb-10 pt-6">
        <ul className="space-y-3">
          {mainLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={big}>
                {t.nav[l.key]}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="eyebrow mt-10 text-muted">{t.nav.company}</p>
        <ul className="mt-3 space-y-1">
          {companyLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => `flex min-h-[44px] items-center text-[20px] ${isActive ? 'font-bold underline decoration-2 underline-offset-[6px]' : 'font-medium'}`}>
                {t.nav[l.key]}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-6">
          <LangToggle className="-ml-1.5" />
          <PillButton to="/lista-de-espera">{t.common.joinShort}</PillButton>
        </div>
      </nav>
    </motion.div>
  );
}

/** Cabecera fija: se compacta y gana fondo translúcido con desenfoque al bajar 80px. */
export default function Header() {
  const { t } = useI18n();
  const reduce = useReduce();
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [menu, setMenu] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, 'change', (v) => setCompact(v > 80));
  useEffect(() => setMenu(false), [pathname]);

  const close = () => {
    setMenu(false);
    burger.current?.focus();
  };
  const tr = reduce ? { duration: 0 } : { duration: 0.3, ease: [0.2, 0.7, 0.2, 1] as const };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[68px] border-b border-ink/5 bg-[rgba(243,245,242,0.78)] backdrop-blur-md"
        initial={false}
        animate={{ opacity: compact ? 1 : 0 }}
        transition={tr}
      />
      <motion.div className="container-site relative flex h-[88px] items-center justify-between gap-4" initial={false} animate={{ y: compact ? -10 : 0 }} transition={tr}>
        <Link to="/" aria-label={t.nav.home} className="inline-flex min-h-[44px] items-center">
          <motion.span className="inline-block origin-left" initial={false} animate={{ scale: compact ? 0.9 : 1 }} transition={tr}>
            <AnimatedLogo />
          </motion.span>
        </Link>
        <nav aria-label={t.nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkCls}>
                  {t.nav[l.key]}
                </NavLink>
              </li>
            ))}
            <li>
              <CompanyMenu />
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle className="hidden lg:flex" />
          <PillButton to="/lista-de-espera" size="sm" className="hidden sm:inline-flex">
            {t.common.joinShort}
          </PillButton>
          <button
            ref={burger}
            type="button"
            onClick={() => setMenu(true)}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={t.nav.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full bg-surface2 lg:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          </button>
        </div>
      </motion.div>
      <AnimatePresence>{menu && <MobileMenu onClose={close} />}</AnimatePresence>
    </header>
  );
}
