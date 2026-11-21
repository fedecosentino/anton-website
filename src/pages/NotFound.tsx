import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import LedScreen404 from '../components/LedScreen404';

export default function NotFound() {
  const { t } = useI18n();
  const n = t.notFound;
  usePageMeta(n.meta);
  return (
    <section className="container-site pb-20 pt-3 sm:pb-28 sm:pt-4">
      {/* El texto real para lectores de pantalla; la pantalla LED es decorativa. */}
      <h1 className="sr-only">
        {n.titleLead} {n.titleAccent}
      </h1>
      <p className="sr-only">{n.body}</p>
      <LedScreen404 />
    </section>
  );
}
