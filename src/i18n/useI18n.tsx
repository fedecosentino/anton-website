import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import es, { type Dict } from './es';
import en from './en';
import pt from './pt';

export type Lang = 'es' | 'en' | 'pt';
export const LANGS: Lang[] = ['es', 'en', 'pt'];
const dicts: Record<Lang, Dict> = { es, en, pt };
const KEY = 'anton.lang';

function readStored(): Lang {
  try {
    const v = window.localStorage.getItem(KEY);
    if (v === 'es' || v === 'en' || v === 'pt') return v;
  } catch {
    /* almacenamiento no disponible */
  }
  // Sin preferencia guardada: el primer idioma del navegador que tengamos (es, en o pt);
  // si no hay ninguno, inglés.
  const langs = typeof navigator !== 'undefined' ? navigator.languages ?? [navigator.language] : [];
  for (const l of langs) {
    const code = (l || '').toLowerCase();
    if (code.startsWith('es')) return 'es';
    if (code.startsWith('pt')) return 'pt';
    if (code.startsWith('en')) return 'en';
  }
  return langs.length ? 'en' : 'es';
}

interface Ctx {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* ignorar */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, t: dicts[lang], setLang }), [lang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}

export function fmt(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}
