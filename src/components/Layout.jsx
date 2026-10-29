import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Holds the page's height while a route chunk is in flight, so the footer
 * does not jump up and then back down on the first visit to a page.
 */
const RouteFallback = () => (
  <div style={{ minHeight: '70vh' }} aria-busy="true" aria-live="polite">
    <span className="sr-only">Loading…</span>
  </div>
);

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    // The target section mounts with this same navigation, so it isn't in the
    // DOM on the first paint. Since the routes are code-split it may also be
    // waiting on a chunk, which a single frame does not cover — so keep
    // looking for it for a short while, then give up rather than hang.
    const id = hash.slice(1);
    const deadline = performance.now() + 2000;
    let raf = 0;

    const look = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (performance.now() < deadline) raf = requestAnimationFrame(look);
    };

    raf = requestAnimationFrame(look);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
