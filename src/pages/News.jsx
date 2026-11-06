import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import OpenDay from '../components/OpenDay';
import { Blob } from '../components/ui/Blobs';
import { Tomato } from '../components/ui/Tomato';
import Band from '../components/ui/Band';
import { Arrow, Play } from '../components/ui/Icons';
import { VIDEO } from '../siteConfig';
import Photo from '../components/ui/Photo';

const CATEGORIES = ['All', 'Events', 'Company updates', 'Articles', 'Videos', 'Interviews'];

const stories = [
  {
    id: 'squaremart',
    category: 'Events',
    date: 'June 2025',
    title: 'The first crates into Gaborone.',
    body: 'Gaborone asked, so we packed the crates and drove them in ourselves — the first time Tsoo...13 bags went to the city under their own number.',
    image: '/farm/crate-of-bags.jpg',
    color: 'var(--c-red)',
  },
  {
    id: 'cuttings',
    category: 'Articles',
    date: 'January 2025',
    title: 'Cuttings over seeds.',
    body: 'Losing a run of seedlings forced a new method: no seeds, just stems, roots and patience. They flowered faster than the parent plant.',
    image: '/farm/planting-row.jpg',
    color: 'var(--c-green-lt)',
  },
  {
    id: 'opendays',
    category: 'Events',
    // Dated from the farm's own poster, which is the second photograph in
    // the block further down this page.
    date: 'November 2021',
    title: 'A Day the 13 Way: we open the gate.',
    body: 'Once in a while the farm stops being only ours for a day. Other growers come out to Mookane and we walk them through the whole of it — hydroponics, the open field, the spraying programmes, the layout, and the pitfalls we have already paid for. A farmer’s best friend is another farmer.',
    image: '/farm/open-day-group.jpg',
    color: 'var(--c-lime)',
  },
  {
    id: 'pusha',
    category: 'Company updates',
    title: 'Pusha BW.',
    body: 'Every crate sold is a vote for a local grower, a local hustle, a local standard. Produced in Botswana, on borehole water, by people from the village it is grown in.',
    image: '/farm/bags-crated.jpg',
    color: 'var(--c-yellow)',
  },
  {
    id: 'monitor',
    category: 'Articles',
    // The replica sits behind PressReader's paywall, so this card carries
    // the headline, the byline and the standfirst and stops there — the
    // rest of the piece is not ours to reprint.
    date: 'July 2021',
    title: '“Smart farming yields quality crops.”',
    body: 'Pauline Dikuelo wrote the farm up in The Monitor on 12 July 2021, under the headline “Tsoo…13’s smart farming yields quality crops”. Smart farming is the future of agriculture because it yields better crops, the piece argued — and the duo behind Tsoo…13, Sonny and Thato Mokgadi, saw the potential and went that way.',
    image: '/farm/tunnel-new-bags.jpg',
    url: 'https://www.pressreader.com/botswana/the-monitor-4753/20210712/281681142879941',
    source: 'The Monitor',
    color: 'var(--c-lime)',
  },
  {
    id: 'unveiling',
    category: 'Events',
    date: 'July 2021',
    title: 'The farm is unveiled at Mookane.',
    body: 'Mmegi covered the unveiling of the smart tomato farm at Mookane, with the Local Enterprise Authority\u2019s chief executive Racious Moatshe speaking at it. The same piece put national horticulture at about 40% of what the country eats.',
    image: '/farm/farm-gate.jpg',
    url: 'https://www.mmegi.bw/business/horticulture-far-from-filling-national-demand/news',
    source: 'Mmegi',
    color: 'var(--c-yellow)',
  },
  {
    id: 'patriot',
    category: 'Articles',
    date: 'July 2021',
    title: 'Thirty-eight people, where there were fourteen.',
    body: 'The Patriot on Sunday covered a guided tour of the operation under the headline “Tsoo 13 Farm thrives”. It put the staff at 38, grown from the 14 the farm opened with — 90% of them women and young people — on ground the Mokgadi family has worked for three generations. The Assistant Minister of Investment, Trade and Industry, Molebatsi Molebatsi, called the work commendable: if Batswana walked a similar way, he said, they could go far.',
    image: '/farm/minister-tour.jpg',
    url: 'https://www.facebook.com/ThePatriotOnSunday/posts/tsoo-13-farm-thrivestsoo-13-a-commercial-tomato-production-farm-situated-in-mook/4161274043961300/',
    source: 'The Patriot on Sunday',
    color: 'var(--c-green-lt)',
  },
  {
    id: 'glf',
    category: 'Events',
    date: 'June 2021',
    title: 'On the programme at GLF Africa.',
    body: 'The Global Landscapes Forum listed Thato Mokgadi as a speaker at its Africa digital conference, Restoring Africa’s Drylands — billed, in their words, as a “Fashion Designer turned Agripreneur”.',
    image: '/farm/in-the-veld.jpg',
    url: 'https://events.globallandscapesforum.org/speaker/thato-mokgadi/',
    source: 'Global Landscapes Forum',
    color: 'var(--c-lime)',
  },
  {
    id: 'agrobiz',
    category: 'Articles',
    // Not online anywhere — everything here is read off the photograph of
    // the page itself, which is the image on the card.
    date: 'May 2016',
    title: 'Before the tunnels: Brahmans, and a farmer’s day.',
    body: 'Mmegi’s AgroBiz pages ran the family under “Mokgadi family shares farming experience”, years before the first tunnel went up. The company was Tsoo 13 Red Brahmans and Horticultural Produce then — cattle alongside the vegetables — and the brothers Alpheus and Sonny Mokgadi were hosting Mookane Farmer’s Day on their own ground that June, put together with three other cattle breeders from the village.',
    image: '/farm/press-clipping.jpg',
    color: 'var(--c-red)',
  },
];

/**
 * A story is a link only when it has a source of its own to go to, and then
 * the card names it. Everything else renders as plain card: no arrow, no
 * hover lift, no cursor — because the alternative was sending a reader who
 * clicked a 2016 newspaper clipping to an Instagram profile.
 */
const NewsCard = ({ item, index }) => {
  const Tag = item.url ? 'a' : 'div';
  const linkProps = item.url
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
  <Reveal delay={(index % 2) * 0.08} className={item.lead ? 'is-lead' : undefined}>
    <Tag
      {...linkProps}
      className={`card${item.url ? '' : ' card--static'}`}
      style={{ '--card-accent': item.color }}
    >
      <div className="card__media">
        <Photo className="card__img" src={item.image} alt="" />
        <span className="card__wash" aria-hidden="true" />
        {item.url && <span className="card__arrow" aria-hidden="true"><Arrow size={16} /></span>}
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            '--chip-bg': 'rgba(255,255,255,.92)',
            '--chip-fg': 'var(--ink)',
          }}
        >
          {item.category}
        </span>
      </div>
      <div className="card__body">
        <p className="eyebrow" style={{ '--eyebrow-dot': item.color }}>{item.date}</p>
        <h3 className="card__title">{item.title}</h3>
        <span className="card__rule" />
        <p className="body-sm">{item.body}</p>
        {item.source && <p className="card__source">Read it at {item.source}</p>}
      </div>
    </Tag>
  </Reveal>
  );
};

/** The video lives on the homepage film section — this card sends you there. */
const VideoCard = () => (
  <Reveal className="is-lead">
    <Link to="/#film" className="card" style={{ '--card-accent': 'var(--c-red)' }}>
      <div className="card__media">
        <Photo className="card__img" src={VIDEO.poster} alt="" />
        <span className="card__wash" aria-hidden="true" />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'grid', placeItems: 'center', color: 'var(--c-red)' }}>
            <Play size={20} />
          </span>
        </span>
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            '--chip-bg': 'rgba(255,255,255,.92)',
            '--chip-fg': 'var(--ink)',
          }}
        >
          Videos
        </span>
      </div>
      <div className="card__body">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)' }}>{VIDEO.runtime}</p>
        <h3 className="card__title">From bare beds to fruit.</h3>
        <span className="card__rule" />
        <p className="body-sm">
          Fifty seconds at Mookane, start to finish — on the homepage.
          {VIDEO.credit ? ` Footage by ${VIDEO.credit}.` : ''}
        </p>
      </div>
    </Link>
  </Reveal>
);

/**
 * UNCCD Podcast Series, episode 4, 12 February 2021. The UN Convention to
 * Combat Desertification interviewed Thato Mokgadi about starting Tsoo...13;
 * their page describes her as its founder. The page carries no audio player
 * of its own, so this links to the page rather than promising a stream.
 */
const INTERVIEW = {
  url: 'https://www.unccd.int/news-stories/podcasts/unccd-podcast-series-episode-4',
  date: 'February 2021',
  title: 'Nine questions, on the UNCCD podcast.',
  body: 'The UN Convention to Combat Desertification gave the fourth episode of its podcast series to Thato Mokgadi — the first steps of starting a business, where to find money and where to put it, leaving corporate work for agribusiness, and finding staff and mentors out in the rural areas.',
};

const InterviewCard = () => (
  <Reveal>
    <a
      href={INTERVIEW.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      style={{ '--card-accent': 'var(--c-yellow-ink)' }}
    >
      <div className="card__media">
        <Photo className="card__img" src="/farm/pair-at-wall.jpg" alt="" />
        <span className="card__wash" aria-hidden="true" />
        <span className="card__arrow" aria-hidden="true"><Arrow size={16} /></span>
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            '--chip-bg': 'rgba(255,255,255,.92)',
            '--chip-fg': 'var(--ink)',
          }}
        >
          Interviews
        </span>
      </div>
      <div className="card__body">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow-ink)' }}>{INTERVIEW.date}</p>
        <h3 className="card__title">{INTERVIEW.title}</h3>
        <span className="card__rule" />
        <p className="body-sm">{INTERVIEW.body}</p>
        <p className="card__source">Read it at the UNCCD</p>
        <p className="body-sm" style={{ marginTop: '0.6rem', color: 'var(--ink-3)' }}>Listen at unccd.int</p>
      </div>
    </a>
  </Reveal>
);

const News = () => {
  const [active, setActive] = useState('All');

  const items = useMemo(() => {
    const all = [
      ...stories,
      { id: 'video', category: 'Videos', kind: 'video' },
      { id: 'interview', category: 'Interviews', kind: 'interview' },
    ];
    return active === 'All' ? all : all.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="section section--top">
      <Blob color="soft-lime" size={430} top={-150} right="-12%" />
      <Blob color="red" size={15} top="16%" left="8%" />
      <Blob color="soft-yellow" size={300} bottom="4%" left="-9%" />
      <Tomato color="var(--c-green-lt)" size={100} top="6%" left="4%" opacity={0.14} rotate={8} outline />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          as="h1"
          eyebrow="Fresh off the vine"
          dot="var(--c-green-lt)"
          color="var(--c-green)"
          title={<>The <span className="t-red">news</span>.</>}
          lede="Press, recognitions, notes from the field — and the film."
        />

        <Reveal
          delay={0.05}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className="chip"
              style={{
                '--chip-bg': active === cat ? 'var(--c-green)' : 'var(--paper)',
                '--chip-fg': active === cat ? 'var(--white)' : 'var(--ink-2)',
                border: active === cat ? 'none' : '1px solid var(--line)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <Band
          image="/farm/roadside-stall.jpg"
          alt="Crates of Tsoo...13 bags at a roadside stall in town"
          kicker="Mookane Village"
          line="The number travels further than any logo."
          align="left"
        />

        <div className="news-grid" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
          {items.map((item, i) => {
            if (item.kind === 'video') return <VideoCard key={item.id} />;
            if (item.kind === 'interview') return <InterviewCard key={item.id} />;
            return <NewsCard key={item.id} item={item} index={i} />;
          })}
        </div>

        {/* The open-day photographs, brought across when the Wins page was
            cut. They sit outside the filtered grid because they illustrate
            one story rather than being a story of their own. */}
        <div style={{ marginTop: 'clamp(3.5rem, 7vw, 6rem)' }}>
          <OpenDay />
        </div>
      </div>
    </section>
  );
};

export default News;
