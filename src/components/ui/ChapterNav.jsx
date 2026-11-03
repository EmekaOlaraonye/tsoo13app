import { useEffect, useRef, useState } from 'react';

/**
 * Eleven chapters over fourteen screens, with nothing to say which one you
 * were in or how to reach the rest. This sticks under the navbar: it marks
 * where you are and jumps you anywhere in one press.
 *
 * Position is worked out on scroll rather than with an IntersectionObserver,
 * because what matters is which chapter has most recently crossed the line
 * under the navbar — not which ones happen to be on screen, which near the
 * end of a long page is several at once.
 */
const ChapterNav = ({ chapters }) => {
  const [active, setActive] = useState(chapters[0]?.id);
  const wrapRef = useRef(null);   // the sticky bar: measured for the offset
  const stripRef = useRef(null);  // the element that actually scrolls
  const pillRefs = useRef({});

  // The line everything is measured against: under the navbar and this strip.
  const lineOffset = () => {
    const nav = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 64;
    const strip = wrapRef.current?.offsetHeight || 0;
    return nav + strip + 16;
  };

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const line = lineOffset() + 8;
      let current = chapters[0]?.id;
      for (const c of chapters) {
        const el = document.getElementById(`sec-${c.id}`);
        if (el && el.getBoundingClientRect().top <= line) current = c.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [chapters]);

  // Keep the marked pill in view without ever moving the page itself, which
  // scrollIntoView would do on a strip that is taller than it looks.
  useEffect(() => {
    const strip = stripRef.current;
    const pill = pillRefs.current[active];
    if (!strip || !pill) return;
    // Measured from the rects rather than offsetLeft, which is relative to
    // whichever ancestor happens to be positioned, not to the strip.
    const delta = pill.getBoundingClientRect().left - strip.getBoundingClientRect().left;
    const left = strip.scrollLeft + delta - (strip.clientWidth - pill.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(left, 0), behavior: 'smooth' });
  }, [active]);

  const jump = (id) => {
    const el = document.getElementById(`sec-${id}`);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const y = el.getBoundingClientRect().top + window.scrollY - lineOffset();
    window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div className="chapnav" ref={wrapRef}>
      <nav className="chapnav__strip" ref={stripRef} aria-label="Jump to a chapter">
        {chapters.map((c, i) => (
          <button
            key={c.id}
            type="button"
            ref={(el) => { pillRefs.current[c.id] = el; }}
            className={`chapnav__pill ${active === c.id ? 'is-on' : ''}`}
            onClick={() => jump(c.id)}
            aria-current={active === c.id ? 'true' : undefined}
          >
            <span className="chapnav__n">{i + 1}</span>
            {c.nav}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ChapterNav;
