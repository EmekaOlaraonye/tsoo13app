import Reveal from './ui/Reveal';
import { Blob } from './ui/Blobs';
import { Instagram, Facebook, WhatsApp, Arrow } from './ui/Icons';
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  FACEBOOK_URL,
  FACEBOOK_HANDLE,
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
} from '../siteConfig';
import Photo from './ui/Photo';

/**
 * Follow us — closes the homepage, and sits at the end of the gallery.
 *
 * This used to speak only of Instagram, which was never the whole picture:
 * there is a Facebook page as well, and WhatsApp is how most people here
 * actually start a conversation. All three get a button, in that order of
 * how much there is to see on them.
 */
const channels = [
  {
    key: 'instagram',
    url: INSTAGRAM_URL,
    handle: INSTAGRAM_HANDLE,
    label: 'Instagram',
    blurb: 'The raw footage, posted as it happens.',
    Icon: Instagram,
    modifier: 'follow__card--instagram',
  },
  {
    key: 'facebook',
    url: FACEBOOK_URL,
    handle: FACEBOOK_HANDLE,
    label: 'Facebook',
    blurb: 'The longer posts, and the people who comment.',
    Icon: Facebook,
    modifier: 'follow__card--facebook',
  },
  {
    key: 'whatsapp',
    url: WHATSAPP_URL,
    handle: WHATSAPP_NUMBER,
    label: 'WhatsApp',
    blurb: 'Straight through to the farm, no form in between.',
    Icon: WhatsApp,
    modifier: 'follow__card--whatsapp',
  },
];

const posts = [
  { src: '/farm/bag-over-pile.jpg', caption: "A morning's picking." },
  { src: '/farm/seedling-planted.jpg', caption: 'Into the bag it goes.' },
  { src: '/farm/tunnels-sunset.jpg', caption: 'The tunnels at last light.' },
  { src: '/farm/roadside-stall.jpg', caption: 'Crates out. Ask for the 13.' },
  { src: '/farm/team-group.jpg', caption: 'The crew, before the heat.' },
  { src: '/farm/bags-young.jpg', caption: 'First leaves up.' },
];

const FollowUs = ({ standalone = false }) => (
  <section className={`section ig ${standalone ? 'section--top' : ''}`} id="follow">
    <Blob color="red" size={16} top="12%" left="7%" />
    <Blob color="green" size={22} top="22%" right="9%" />
    <Blob color="soft-red" size={280} bottom="-8%" left="-8%" opacity={0.7} />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <Reveal variant="left" style={{ marginBottom: 'clamp(2rem, 4vw, 2.75rem)' }}>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
          The story continues
        </p>
        {standalone ? (
          <h1 className="display display--lg" style={{ color: 'var(--c-red)' }}>
            Follow our<br />
            <span className="t-green">journey</span> daily.
          </h1>
        ) : (
          <h2 className="display display--lg" style={{ color: 'var(--c-red)' }}>
            Follow our<br />
            <span className="t-green">journey</span> daily.
          </h2>
        )}
        <p className="lede" style={{ marginTop: '1.2rem', maxWidth: '40ch' }}>
          The website is the edit. Everything else is the raw footage — every
          harvest, every rebuild day, every small win as it happens.
        </p>
      </Reveal>

      <div className="follow__row">
        {channels.map(({ key, url, handle, label, blurb, Icon, modifier }, i) => (
          <Reveal key={key} delay={i * 0.07} variant="scale">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`follow__card ${modifier}`}
            >
              <span className="follow__icon"><Icon size={22} /></span>
              <span className="follow__text">
                <span className="follow__label">{label}</span>
                <span className="follow__handle">{handle}</span>
                <span className="follow__blurb">{blurb}</span>
              </span>
              <span className="follow__arrow" aria-hidden="true"><Arrow size={16} /></span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="ig__grid" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        {posts.map((post, i) => (
          <Reveal key={post.src} delay={i * 0.05} y={16}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ig__tile"
              aria-label={`Instagram: ${post.caption}`}
            >
              <Photo src={post.src} alt="" />
              <span className="ig__overlay">
                <Instagram size={16} />
                <span>{post.caption}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green-lt)' }}>
          #AskFor13 &nbsp;·&nbsp; #FreshFrom13 &nbsp;·&nbsp; #PushaBW
        </p>
      </Reveal>
    </div>
  </section>
);

export default FollowUs;
