import Reveal from './ui/Reveal';
import Photo from './ui/Photo';

/**
 * "From our family to yours" is on the logo for a reason. Setho Mokgadi is
 * named here because she is the face of the business; the rest of the names
 * go in once they're confirmed. Until then this introduces the business by
 * what each part of it actually does, and claims nothing it can't back.
 */
const roles = [
  { role: 'Growing', body: 'Hands in the soil every day — the shade nets, the cuttings, the early starts.', color: 'var(--c-lime)', soft: 'var(--c-lime-soft)' },
  { role: 'Packing & logistics', body: 'Getting every crate from Mookane to Gaborone, on time, every time.', color: 'var(--c-red)', soft: 'var(--c-red-soft)' },
  { role: 'Brand & sales', body: 'The number on the bag, the shelves it ends up on, the people who ask for it.', color: 'var(--c-yellow-ink)', soft: 'var(--c-yellow-soft)' },
  { role: 'Leadership', body: 'Trained through MCW and Aspire Leaders — running the business, not just the field.', color: 'var(--c-green-lt)', soft: 'var(--c-green-soft)' },
];

const RoleCard = ({ item, index }) => (
  <Reveal delay={(index % 4) * 0.07}>
    <div className="family__card">
      <span className="family__avatar" style={{ background: item.soft, color: item.color }}>
        13
      </span>
      <p className="family__role">{item.role}</p>
      <p className="body-sm">{item.body}</p>
    </div>
  </Reveal>
);

const MeetTheFamily = () => (
  <div style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
    <Reveal>
      <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-lime)', marginBottom: '1rem' }}>
        From our family to yours
      </p>
      <h3 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.5rem' }}>
        Meet the family.
      </h3>
      <p className="lede" style={{ maxWidth: '46ch' }}>
        Setho Mokgadi is the face of the business. The rest of the names are
        still to come — until then, here&apos;s who actually does what.
      </p>
    </Reveal>

    {/* Photographs of the team at work, kept separate from the role cards —
        apart from Setho we can't yet say which person holds which role, so
        nothing here implies it. Both shots are portrait, hence the frames. */}
    <div className="family__shots">
      {[
        { src: '/farm/team-lineup.jpg', cap: 'The team at Mookane Village', alt: 'The Tsoo...13 team lined up at Mookane Village' },
        { src: '/farm/two-smiling.jpg', cap: 'Setho Mokgadi, the face of 13', alt: 'Setho Mokgadi holding up a tomato in the rows, a colleague behind her' },
      ].map((shot, i) => (
        <Reveal key={shot.src} delay={0.08 + i * 0.06} variant="scale" className="family__shot">
          <Photo src={shot.src} alt={shot.alt} />
          <span className="family__shot-cap">{shot.cap}</span>
        </Reveal>
      ))}
    </div>

    <div className="grid grid--4" style={{ marginTop: '2rem' }}>
      {roles.map((item, i) => (
        <RoleCard key={item.role} item={item} index={i} />
      ))}
    </div>
  </div>
);

export default MeetTheFamily;
