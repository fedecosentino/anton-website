import type { Profile } from '../lib/waitlist';
import { useI18n } from '../i18n/useI18n';
import Band from './Band';
import type { PhotoName } from './Photo';
import Reveal from './Reveal';
import { Eyebrow } from './Bits';
import WaitlistForm from './WaitlistForm';

interface Props {
  title?: string;
  body?: string;
  eyebrow?: string;
  variant?: 'compact' | 'full' | 'contact';
  defaultProfile?: Profile;
  withCompany?: boolean;
  id?: string;
  /** Foto de fondo, muy tenue, detrás del bloque negro. */
  photo?: PhotoName;
  photoPosition?: string;
}

/** Cierre de página: lista de espera centrada sobre negro, con campos oscuros y botón teal. */
export default function WaitlistSection({ title, body, eyebrow, variant = 'compact', defaultProfile, withCompany, id = 'unirme', photo = 'builders', photoPosition = '50% 35%' }: Props) {
  const { t } = useI18n();
  return (
    <Band tone="ink" id={id} photo={photo} photoPosition={photoPosition}>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center [container-type:inline-size]">
          <Eyebrow className="mb-4 text-teal">{eyebrow ?? t.waitlistBlock.eyebrow}</Eyebrow>
          <h2 className="h2">{title ?? t.waitlistBlock.title}</h2>
          <p className="lead mt-5 text-page">{body ?? t.waitlistBlock.body}</p>
        </div>
        <div className="mx-auto mt-10 max-w-xl text-center">
          <WaitlistForm variant={variant} defaultProfile={defaultProfile} withCompany={withCompany} tone="dark" center={variant !== 'contact'} />
        </div>
      </Reveal>
    </Band>
  );
}
