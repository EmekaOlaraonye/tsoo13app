import React from 'react';

/**
 * Edge-to-edge scrolling strip. Pure CSS so it costs nothing on scroll,
 * and it pauses on hover so the words are actually readable.
 */
const Marquee = ({
  items,
  bg = 'var(--c-red)',
  fg = 'var(--white)',
  speed = '38s',
}) => {
  const line = (key) => (
    <div className="marquee__item" key={key} aria-hidden={key === 'b' ? 'true' : undefined}>
      {items.map((text, i) => (
        <React.Fragment key={i}>
          <span>{text}</span>
          <span className="marquee__dot" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      className="marquee"
      style={{ '--marquee-bg': bg, '--marquee-fg': fg, '--marquee-speed': speed }}
    >
      <div className="marquee__track">
        {line('a')}
        {line('b')}
      </div>
    </div>
  );
};

export default Marquee;
