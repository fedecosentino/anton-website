import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia(query);
    const on = () => setMatches(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return matches;
}

/** true si el usuario pidió reducir movimiento. */
export function useReduce(): boolean {
  return !!useReducedMotion();
}

function setMeta(selector: string, attr: string, key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function usePageMeta(meta: { title: string; description: string }) {
  const { lang } = useI18n();
  useEffect(() => {
    document.title = meta.title;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', lang === 'es' ? 'es_LA' : lang === 'pt' ? 'pt_PT' : 'en_US');
  }, [meta.title, meta.description, lang]);
}
