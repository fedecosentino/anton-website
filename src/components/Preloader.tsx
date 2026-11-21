import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import es from '../i18n/es';
import en from '../i18n/en';
import pt from '../i18n/pt';
import { StrokeDrawType } from '@/components/ui/stroke-draw-type';

const KEY = 'anton.intro';

/** La intro se enseña una vez por sesión de navegador. */
export function introPending(): boolean {
  try {
    return window.sessionStorage.getItem(KEY) !== '1';
  } catch {
    return true;
  }
}
export function markIntroSeen() {
  try {
    window.sessionStorage.setItem(KEY, '1');
  } catch {
    /* almacenamiento no disponible */
  }
}

// Misma tipografía que el logo de la cabecera: Syne 800, tracking -0.02em.
const LOGO_FONT = "'Syne', system-ui, sans-serif";

/**
 * Pantalla de carga: "Welcome to / Bienvenido a / Bem-vindo à" (los tres idiomas a la vez) y ANTON
 * dibujándose con StrokeDrawType
 * (trazo y relleno teal). Al terminar avisa con onDone; el fundido de salida lo hace App.
 * Se puede saltar con el botón, con Escape o con cualquier clic.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const { t } = useI18n();
  const [fontReady, setFontReady] = useState(false);
  const finished = useRef(false);
  const holdTimer = useRef<number>();

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    window.clearTimeout(holdTimer.current);
    onDone();
  }, [onDone]);

  // Espera a Syne para que el trazo se dibuje ya con la tipografía del logo.
  useEffect(() => {
    let alive = true;
    const go = () => alive && setFontReady(true);
    const fallback = window.setTimeout(go, 1200);
    (document.fonts?.load("800 100px 'Syne'") ?? Promise.resolve()).then(go, go);
    return () => {
      alive = false;
      window.clearTimeout(fallback);
    };
  }, []);

  // Red de seguridad: la intro nunca retiene el site más de 6 s (p. ej., pestaña en segundo plano).
  useEffect(() => {
    const max = window.setTimeout(finish, 6000);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') finish();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(max);
      window.removeEventListener('keydown', onKey);
    };
  }, [finish]);

  const onComplete = useCallback(() => {
    holdTimer.current = window.setTimeout(finish, 600);
  }, [finish]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-ink text-page"
      initial={false}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onClick={finish}
    >
      <div className="w-full max-w-[760px] px-8 text-center">
        <motion.p
          className="eyebrow flex flex-col items-center justify-center gap-x-3 gap-y-1.5 text-[13.5px] text-onink sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span lang="en">{en.preloader.welcome}</span>
          <span aria-hidden="true" className="hidden text-teal sm:inline">/</span>
          <span lang="es">{es.preloader.welcome}</span>
          <span aria-hidden="true" className="hidden text-teal sm:inline">/</span>
          <span lang="pt">{pt.preloader.welcome}</span>
        </motion.p>
        <div className="mt-6 flex min-h-[72px] items-center sm:min-h-[150px]">
          {fontReady && (
            <StrokeDrawType
              text="ANTON"
              trigger="mount"
              drainOnHover={false}
              color="#00E5C3"
              fillColor="#00E5C3"
              accentColor="#F3F5F2"
              fontFamily={LOGO_FONT}
              fontWeight={800}
              letterSpacing={-0.02}
              fontSize={170}
              strokeWidth={2}
              duration={1.25}
              stagger={0.12}
              delay={0.2}
              onComplete={onComplete}
            />
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={finish}
        className="absolute bottom-6 right-6 inline-flex min-h-[44px] items-center rounded-full px-4 font-mono text-[12px] uppercase tracking-[0.1em] text-onink underline decoration-1 underline-offset-4 hover:text-page"
      >
        {t.preloader.skip}
      </button>
    </motion.div>
  );
}
