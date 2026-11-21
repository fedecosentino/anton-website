import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';
import { useReduce } from '../lib/hooks';

interface Props {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  /** 'view': empieza al entrar en pantalla. 'mount': empieza al montar (con delay). */
  trigger?: 'view' | 'mount';
  format?: (n: number) => string;
  className?: string;
}

const plain = (n: number) => String(Math.round(n));

export default function CountUp({ to, from = 0, duration = 1.3, delay = 0, trigger = 'view', format = plain, className = '' }: Props) {
  const reduce = useReduce();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(reduce ? to : from);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    if (trigger === 'view' && !inView) return;
    const controls = animate(from, to, { duration, delay, ease: [0.2, 0.7, 0.2, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [reduce, inView, trigger, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true" className="tabular-nums">{format(value)}</span>
      <span className="sr-only">{format(to)}</span>
    </span>
  );
}
