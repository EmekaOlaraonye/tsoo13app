import Reveal from './ui/Reveal';

/**
 * "From our family to yours" is on the logo for a reason. Real photos and
 * names go here once they're ready — for now this is honest about that,
 * and introduces the business by what each part of it actually does.
 */
const roles = [
  { role: 'Growing', body: 'Hands in the soil every day — the greenhouse, the cuttings, the early starts.', color: 'var(--c-lime)', soft: 'var(--c-lime-soft)' },
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
        Real faces and names are coming soon. Until then, here&apos;s who actually
        does what.
      </p>
    </Reveal>

    <div className="grid grid--4" style={{ marginTop: '2rem' }}>
      {roles.map((item, i) => (
        <RoleCard key={item.role} item={item} index={i} />
      ))}
    </div>
  </div>
);

export default MeetTheFamily;
