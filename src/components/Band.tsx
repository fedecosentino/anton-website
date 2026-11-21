import type { ReactNode } from 'react';
import Pattern from './Pattern';
import Photo, { type PhotoName } from './Photo';

export type BandTone = 'page' | 'white' | 'ink' | 'teal' | 'sand';

const bg: Record<BandTone, string> = {
  page: 'bg-page text-ink',
  white: 'bg-surface text-ink',
  ink: 'bg-ink text-page',
  teal: 'bg-teal text-teal-on',
  sand: 'bg-sand text-ink',
};
/** Texto secundario y etiqueta según el fondo de la banda. */
export const bandSub: Record<BandTone, string> = { page: 'text-muted', white: 'text-muted', sand: 'text-muted', ink: 'text-onink', teal: 'text-teal-on' };
export const bandEyebrow: Record<BandTone, string> = { page: 'text-teal-text', white: 'text-teal-text', sand: 'text-teal-text', ink: 'text-teal', teal: 'text-teal-on' };

interface Props {
  tone: BandTone;
  children: ReactNode;
  /** Trama decorativa (bloques de color). */
  pattern?: 'rings' | 'dots' | 'lines';
  /** Foto de fondo muy tenue y en gris; solo sobre negro, donde el texto sigue con contraste alto. */
  photo?: PhotoName;
  photoPosition?: string;
  className?: string;
  id?: string;
}

/** Sección a todo el ancho con su propio fondo; el contenido va en el contenedor de 1280px. */
export default function Band({ tone, children, pattern, photo, photoPosition, className = '', id }: Props) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${bg[tone]} ${id ? 'scroll-mt-16' : ''}`}>
      {photo && tone === 'ink' && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.17] grayscale">
          <Photo name={photo} alt="" sizes="100vw" position={photoPosition} className="h-full w-full" />
        </div>
      )}
      {pattern && <Pattern kind={pattern} />}
      <div className={`container-site relative ${className}`}>{children}</div>
    </section>
  );
}
