import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ToTop from './ui/ToTop';

/**
 * Holds the page's height while a route chunk is in flight, so the footer
 * does not jump up and then back down on the first visit to a page.
 */
const RouteFallback = () => (
  <div style={{ minHeight: '70vh' }} aria-busy="true" aria-live="polite">
    <span className="sr-only">Loading…</span>
  </div>
);

/**
 * Every page shared one title, so three open tabs were indistinguishable
 * and so was the browser history. The page name leads, because that is the
 * part a truncated tab actually shows.
 */
const TITLES = {
  '/': 'Tsoo...13 — Farming. Creating. Growing.',
  '/journey': 'The Journey — Tsoo...13',
  '/goods': 'The Goods — Tsoo...13',
  '/wins': 'The Wins — Tsoo...13',
  '/news': 'The News — Tsoo...13',
  '/gallery': 'Gallery — Tsoo...13',
  '/contact-us': 'Contact Us — Tsoo...13',
};

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    document.title = TITLES[clean] || 'Page not found — Tsoo...13';
  }, [pathname]);

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
      {/* First stop for anyone on a keyboard: hidden until focused. */}
      <a href="#main" className="skip">Skip to the content</a>
      <Navbar />
      <motion.main
        id="main"
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
      <ToTop />
    </>
  );
};

export default Layout;
