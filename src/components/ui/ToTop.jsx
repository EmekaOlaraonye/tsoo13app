import { useEffect, useState } from 'react';
import { ArrowDown } from './Icons';

/**
 * Gallery runs to fourteen screens and the Journey to twelve. Getting back
 * to the top meant a long flick or reaching for Home on a keyboard, so this
 * sits out of the way until you are well down the page.
 *
 * It appears after a screen and a half rather than immediately, so it never
 * covers anything on a short page: Contact is under two screens and never
 * shows it at all.
 */
const ToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`totop ${show ? 'is-on' : ''}`}
      onClick={toTop}
      aria-label="Back to the top of the page"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
    >
      <ArrowDown size={18} style={{ transform: 'rotate(180deg)' }} />
    </button>
  );
};

export default ToTop;
