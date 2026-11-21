import { useCallback, useEffect, useRef, type RefObject } from 'react';

/**
 * Bucle de requestAnimationFrame que solo corre mientras el elemento está en pantalla y
 * `frame(dt)` devuelve true (sigue habiendo movimiento). `wake()` lo reanuda.
 */
export function useVisibleLoop(ref: RefObject<Element | null>, frame: (dt: number) => boolean, { enabled }: { enabled: boolean }) {
  const frameRef = useRef(frame);
  const state = useRef({ raf: 0, last: 0, visible: true, enabled });

  useEffect(() => {
    frameRef.current = frame;
  }, [frame]);

  const tick = useCallback((now: number) => {
    const s = state.current;
    s.raf = 0;
    if (!s.enabled || !s.visible) {
      s.last = 0;
      return;
    }
    const dt = s.last ? Math.min(0.05, (now - s.last) / 1000) : 0;
    s.last = now;
    if (frameRef.current(dt)) s.raf = requestAnimationFrame(tick);
    else s.last = 0;
  }, []);

  const wake = useCallback(() => {
    const s = state.current;
    if (!s.enabled || !s.visible || s.raf) return;
    s.raf = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    const s = state.current;
    s.enabled = enabled;
    if (enabled) wake();
    return () => {
      if (s.raf) cancelAnimationFrame(s.raf);
      s.raf = 0;
      s.last = 0;
    };
  }, [enabled, wake]);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => {
      state.current.visible = entry.isIntersecting;
      if (entry.isIntersecting) wake();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, wake]);

  return { wake };
}
