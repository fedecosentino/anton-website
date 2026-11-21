import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { I18nProvider, useI18n } from './i18n/useI18n';
import { useReduce } from './lib/hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader, { introPending, markIntroSeen } from './components/Preloader';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Empresas from './pages/Empresas';
import Builders from './pages/Builders';
import Pasaporte from './pages/Pasaporte';
import CuentasYReglas from './pages/CuentasYReglas';
import Observatory from './pages/Observatory';
import Manifiesto from './pages/Manifiesto';
import Equipo from './pages/Equipo';
import Inversores from './pages/Inversores';
import ListaDeEspera from './pages/ListaDeEspera';
import Demo from './pages/Demo';
import { AvisoLegal, Privacidad } from './pages/Legal';
import NotFound from './pages/NotFound';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const { t } = useI18n();
  const location = useLocation();
  const reduce = useReduce();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-page">
        {t.common.skip}
      </a>
      <Header />
      <motion.main
        id="main"
        tabIndex={-1}
        key={location.pathname}
        className="pt-[88px] outline-none"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/builders" element={<Builders />} />
          <Route path="/pasaporte" element={<Pasaporte />} />
          <Route path="/cuentas-y-reglas" element={<CuentasYReglas />} />
          <Route path="/observatory" element={<Observatory />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/inversores" element={<Inversores />} />
          <Route path="/lista-de-espera" element={<ListaDeEspera />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
      <Footer />
    </>
  );
}

/**
 * Intro de bienvenida (una vez por sesión) y, al terminar, el site. El site se monta
 * cuando la intro acaba, así su animación de entrada empieza mientras la intro se funde.
 * Con prefers-reduced-motion no hay intro.
 */
function Root() {
  const reduce = useReduce();
  const [intro, setIntro] = useState(introPending);
  const showIntro = intro && !reduce;
  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <Preloader
            key="preloader"
            onDone={() => {
              markIntroSeen();
              setIntro(false);
            }}
          />
        )}
      </AnimatePresence>
      {!showIntro && (
        <>
          <ScrollManager />
          <Shell />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <MotionConfig reducedMotion="user">
          <Root />
        </MotionConfig>
      </I18nProvider>
    </BrowserRouter>
  );
}
