import type { PointerEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useMediaQuery, useReduce } from '../lib/hooks';

const MotionLink = motion.create(Link);

type Variant = 'primary' | 'secondary' | 'light' | 'teal';

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: Variant;
  size?: 'md' | 'sm';
  className?: string;
}

const variantCls: Record<Variant, string> = { primary: 'pill-primary', secondary: 'pill-secondary', light: 'pill-light', teal: 'pill-teal' };

const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

export default function PillButton({ children, to, href, type = 'button', onClick, variant = 'primary', size = 'md', className = '' }: Props) {
  const reduce = useReduce();
  const finePointer = useMediaQuery('(pointer: fine)');
  const magnetic = (variant === 'primary' || variant === 'teal') && finePointer && !reduce;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 260, damping: 18, mass: 0.4 });

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!magnetic) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(clamp((e.clientX - (r.left + r.width / 2)) * 0.12, 6));
    my.set(clamp((e.clientY - (r.top + r.height / 2)) * 0.25, 6));
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const cls = `pill ${variantCls[variant]} ${size === 'sm' ? 'pill-sm' : ''} ${className}`;
  const motionProps = reduce
    ? {}
    : magnetic
      ? { style: { x, y }, whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 }, onPointerMove, onPointerLeave }
      : { whileHover: { y: -3, scale: 1.03 }, whileTap: { scale: 0.98 } };
  const transition = { type: 'spring' as const, stiffness: 400, damping: 25 };

  if (to) {
    return (
      <MotionLink to={to} className={cls} transition={transition} {...motionProps}>
        {children}
      </MotionLink>
    );
  }
  if (href) {
    return (
      <motion.a href={href} className={cls} transition={transition} {...motionProps}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} className={cls} transition={transition} {...motionProps}>
      {children}
    </motion.button>
  );
}
