import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useReduce } from '../lib/hooks';
import { staggerItem } from '../lib/motion';

const MotionLink = motion.create(Link);
export type Tone = 'white' | 'ink' | 'teal' | 'gray';
const toneCls: Record<Tone, string> = { white: 'bento-white', ink: 'bento-ink', teal: 'bento-teal', gray: 'bento-gray' };

interface Props {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  to?: string;
  as?: 'div' | 'li' | 'article';
}

/** Tarjeta bento. Debe vivir dentro de un StaggerGrid (hereda la entrada escalonada). */
export default function BentoCard({ tone = 'white', children, className = '', to, as = 'div' }: Props) {
  const reduce = useReduce();
  const cls = `bento ${toneCls[tone]} flex flex-col ${className}`;
  const hover = reduce ? undefined : { y: -8 };
  const transition = { type: 'spring' as const, stiffness: 300, damping: 26 };
  if (to) {
    return (
      <MotionLink to={to} className={cls} variants={staggerItem} whileHover={hover} transition={transition}>
        {children}
      </MotionLink>
    );
  }
  const Comp = as === 'li' ? motion.li : as === 'article' ? motion.article : motion.div;
  return (
    <Comp className={cls} variants={staggerItem} whileHover={hover} transition={transition}>
      {children}
    </Comp>
  );
}

export function BentoTitle({ children, as = 'h3', className = '' }: { children: ReactNode; as?: 'h2' | 'h3'; className?: string }) {
  const H = as;
  return (
    <H className={`card-title ${className}`}>
      <span className="bento-title">{children}</span>
    </H>
  );
}
