import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';
import { PROFILES, submitWaitlist, type Profile } from '../lib/waitlist';
import PillButton from './PillButton';
import Disclaimer from './Disclaimer';

type Variant = 'compact' | 'full' | 'contact';
type Tone = 'teal' | 'white' | 'dark';
type Field = 'name' | 'email' | 'company' | 'message' | 'consent';

interface Props {
  variant?: Variant;
  tone?: Tone;
  defaultProfile?: Profile;
  /** En "compact", mostrar además el campo empresa. */
  withCompany?: boolean;
  /** Centra el selector de perfil y el botón (lista de espera de la home). */
  center?: boolean;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Formulario simulado: valida en el navegador y no envía ni guarda nada. */
export default function WaitlistForm({ variant = 'compact', tone = 'teal', defaultProfile = 'persona', withCompany = false, center = false }: Props) {
  const { t } = useI18n();
  const uid = useId();
  const id = (f: string) => `${uid}-${f}`;
  const [profile, setProfile] = useState<Profile>(variant === 'contact' ? 'inversor' : defaultProfile);
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [done, setDone] = useState(false);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setProfile(variant === 'contact' ? 'inversor' : defaultProfile), [defaultProfile, variant]);
  useEffect(() => {
    if (done) doneRef.current?.focus();
  }, [done]);

  const showName = variant !== 'compact';
  const showCompany = variant !== 'compact' || withCompany;
  const showMessage = variant === 'contact';
  const showConsent = variant !== 'compact';
  const showProfile = variant !== 'contact';

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (showName && !values.name.trim()) e.name = t.form.errors.nameRequired;
    if (!values.email.trim()) e.email = t.form.errors.emailRequired;
    else if (!EMAIL.test(values.email.trim())) e.email = t.form.errors.email;
    if (showMessage && !values.message.trim()) e.message = t.form.errors.messageRequired;
    if (showConsent && !consent) e.consent = t.form.errors.consent;
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = (Object.keys(e) as Field[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(first))}`)?.focus();
      return;
    }
    await submitWaitlist({
      kind: variant === 'contact' ? 'contact' : 'waitlist',
      profile,
      email: values.email.trim(),
      name: values.name.trim() || undefined,
      company: values.company.trim() || undefined,
      message: values.message.trim() || undefined,
      consent: showConsent ? consent : undefined,
    });
    setDone(true);
  };

  const reset = () => {
    setValues({ name: '', email: '', company: '', message: '' });
    setConsent(false);
    setErrors({});
    setDone(false);
  };

  const onTeal = tone === 'teal';
  const dark = tone === 'dark';
  const inputCls = (f: Field) =>
    dark
      ? `mt-2 block w-full min-h-[52px] rounded-2xl border-2 bg-field px-4 py-3 text-[16px] text-page placeholder:text-onink ${errors[f] ? 'border-st-blocked' : 'border-phone-muted'}`
      : `mt-2 block w-full min-h-[52px] rounded-2xl border-2 bg-surface px-4 py-3 text-[16px] text-ink placeholder:text-muted ${errors[f] ? 'border-[#B42318]' : onTeal ? 'border-ink' : 'border-muted'}`;
  // En tono oscuro el texto va sobre la foto de fondo: st-blocked (#FF5D5D) se queda en 4.2:1
  // en las zonas claras, así que el mensaje usa un rojo más claro (≥ 4.5:1, WCAG 1.4.3).
  const errCls = `mt-2 flex items-center gap-1.5 text-[14px] font-bold ${dark ? 'text-[#FF8A8A]' : onTeal ? 'text-teal-on' : 'text-[#B42318]'}`;
  const success = variant === 'contact' ? t.form.successContact : t.form.success;

  const ErrorMsg = ({ f }: { f: Field }) =>
    errors[f] ? (
      <p id={id(`${f}-err`)} className={errCls}>
        <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.8 3.5h1.6v4.8H7.2zm0 6h1.6V12H7.2z" /></svg>
        {errors[f]}
      </p>
    ) : null;

  if (done) {
    return (
      <div role="status" className={`rounded-[28px] p-6 text-left sm:p-8 ${onTeal || dark ? 'bg-surface text-ink' : 'bg-surface2 text-ink'}`}>
        <h3 ref={doneRef} tabIndex={-1} className="card-title">
          {success.title}
        </h3>
        <p className="mt-3 text-[16px] leading-relaxed text-muted">{success.body}</p>
        <button type="button" onClick={reset} className="link-arrow mt-4">
          {success.again}
        </button>
        <Disclaimer className="mt-5" />
      </div>
    );
  }

  const label = 'block text-[15px] font-bold';
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className={dark ? 'text-page' : 'text-ink'}>
      <p aria-live="polite" className="sr-only">
        {hasErrors ? t.form.errors.summary : ''}
      </p>
      {showProfile && (
        <fieldset>
          <legend className={label}>{t.form.profileLegend}</legend>
          <div className={`mt-2 flex flex-wrap gap-2 ${center ? 'justify-center' : ''}`}>
            {PROFILES.map((p) => (
              <label key={p} className="relative">
                <input type="radio" name={id('profile')} value={p} checked={profile === p} onChange={() => setProfile(p)} className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                <span
                  className={`flex min-h-[44px] items-center rounded-full border-2 px-4 text-[15px] font-bold peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 ${dark ? 'peer-focus-visible:outline-teal' : 'peer-focus-visible:outline-ink'} ${
                    dark
                      ? profile === p
                        ? 'border-teal bg-teal text-teal-on'
                        : 'border-phone-muted text-page'
                      : profile === p
                        ? 'border-ink bg-ink text-page'
                        : onTeal
                          ? 'border-ink bg-surface text-ink'
                          : 'border-muted bg-surface text-ink'
                  }`}
                >
                  {profile === p && (
                    <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" className="mr-1.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3 3 7-7" /></svg>
                  )}
                  {t.form.profiles[p]}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className={`grid gap-4 text-left ${showProfile ? 'mt-5' : ''} ${variant === 'compact' && !withCompany ? 'sm:grid-cols-[1fr_auto] sm:items-end' : ''}`}>
        {showName && (
          <div>
            <label htmlFor={id('name')} className={label}>{t.form.name}</label>
            <input id={id('name')} name="name" autoComplete="name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? id('name-err') : undefined} className={inputCls('name')} />
            <ErrorMsg f="name" />
          </div>
        )}
        <div>
          <label htmlFor={id('email')} className={label}>{t.form.email}</label>
          <input id={id('email')} name="email" type="email" inputMode="email" autoComplete="email" placeholder={t.form.emailPlaceholder} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? id('email-err') : undefined} className={inputCls('email')} />
          <ErrorMsg f="email" />
        </div>
        {showCompany && (
          <div>
            <label htmlFor={id('company')} className={label}>
              {variant === 'contact' ? t.form.fund : t.form.company} <span className="font-normal">{t.form.optional}</span>
            </label>
            <input id={id('company')} name="company" autoComplete="organization" value={values.company} onChange={(e) => setValues({ ...values, company: e.target.value })} className={inputCls('company')} />
          </div>
        )}
        {showMessage && (
          <div>
            <label htmlFor={id('message')} className={label}>{t.form.message}</label>
            <textarea id={id('message')} name="message" rows={4} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? id('message-err') : undefined} className={inputCls('message')} />
            <ErrorMsg f="message" />
          </div>
        )}
        {showConsent && (
          <div>
            <div className="flex items-start gap-3">
              <input id={id('consent')} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? id('consent-err') : undefined} className={`mt-0.5 h-6 w-6 shrink-0 cursor-pointer ${dark ? 'accent-teal' : 'accent-ink'}`} />
              <label htmlFor={id('consent')} className="text-[15px] leading-snug">
                {t.form.consent}{' '}
                <Link to="/privacidad" className="font-bold underline underline-offset-2">{t.form.privacyLink}</Link>
              </label>
            </div>
            <ErrorMsg f="consent" />
          </div>
        )}
        <div className={variant === 'compact' && !withCompany ? 'sm:mb-0' : ''}>
          <PillButton type="submit" variant={dark ? 'teal' : 'primary'} className="w-full sm:w-auto">
            {variant === 'contact' ? t.form.submitContact : t.form.submit}
          </PillButton>
        </div>
      </div>
      <Disclaimer tone={dark ? 'ink' : onTeal ? 'teal' : 'page'} className="mt-5" />
    </form>
  );
}
