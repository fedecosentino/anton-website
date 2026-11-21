import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import HomeHero from '../components/HomeHero';
import WaitlistSection from '../components/WaitlistSection';

export default function Demo() {
  const { t } = useI18n();
  const d = t.demo;
  usePageMeta(d.meta);
  return (
    <>
      <HomeHero text={d.hero} demo={false} />
      <WaitlistSection title={d.waitlist.title} body={d.waitlist.body} photo="builders" />
    </>
  );
}
