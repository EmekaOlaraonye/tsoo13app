import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import Photo from './ui/Photo';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';

/**
 * The Team.
 *
 * Deliberately not an org chart. The words on this page are Setho's own,
 * from the 5 November notes, and the point they make is that no one person
 * grows, packs, drives, brands and sells a crop — it takes a set of skills
 * that happen to sit in one family, and the thing works because those skills
 * are practised, not because the titles are tidy.
 *
 * So: one name carries a title, Sonny Mokgadi as managing director, and
 * nobody else does. Everyone else is captioned by what they are doing in the
 * photograph, because a wrong name under a face is worse than no name and
 * most of the name-to-face list has not come through yet.
 *
 * ---------------------------------------------------------------------------
 * Shape of the page
 * ---------------------------------------------------------------------------
 * It used to run: lead, eight tiles, text, six cards, twelve tiles. Twenty
 * photographs in the same upright rectangle with the same white caption
 * burned into the same corner, and by the second block the eye had stopped
 * reading them. The four confirmed faces were scattered among the other
 * sixteen at exactly the same size, which buried the one thing this page has
 * that almost no other farm's does.
 *
 * Now the named four come out and lead, set larger with their names in the
 * page's own ink rather than white-on-photograph. The skills sit on their own
 * ground, which is what breaks the page in half — there is no honest
 * full-bleed photograph for a band here, because every team frame in the set
 * is upright and the one wide group shot is a visitors' tour, not the crew.
 * The remaining sixteen close the page as what they are: the archive.
 */

/**
 * The six skills are the six things named in the paragraph that sits
 * directly above them, in the same order. They used to be a slightly
 * different six — "Growing", "Sales", "Leadership" — which meant the prose
 * and the cards were quietly listing different things on the same screen.
 */
const skills = [
  { n: '01', skill: 'Cultivation', body: 'Careful, patient growing. The part that cannot be rushed, bought in or faked.', ink: 'var(--c-lime-ink)', tint: 'rgba(141, 173, 30, 0.07)' },
  { n: '02', skill: 'Harvest', body: 'A sharp eye on the truss — picked at the moment it is ready, by hand, every time.', ink: 'var(--c-green-lt)', tint: 'rgba(77, 136, 61, 0.07)' },
  { n: '03', skill: 'Packing', body: 'Meticulous. Graded and bagged at Mookane to the same standard, crate after crate.', ink: 'var(--c-yellow-ink)', tint: 'rgba(214, 158, 31, 0.08)' },
  { n: '04', skill: 'Logistics', body: 'Loaded and driven in ourselves, so what leaves the farm arrives fresh and on time.', ink: 'var(--c-red)', tint: 'rgba(214, 72, 31, 0.07)' },
  { n: '05', skill: 'Brand', body: 'The number on the bag, and telling our story honestly enough that people learn to ask for it.', ink: 'var(--c-green)', tint: 'rgba(31, 92, 48, 0.07)' },
  { n: '06', skill: 'Relationships', body: 'The conversations that turn a customer into a regular, and keep them one.', ink: 'var(--c-red-deep)', tint: 'rgba(168, 51, 20, 0.07)' },
];

/**
 * The four confirmed faces, one photograph each, Sonny first because he is
 * the one the lead paragraph names.
 *
 * Setho and Leiso each appear in a second photograph further down as well;
 * that is fine, they are the same people doing other work. What matters is
 * that `where` still says which person in the frame is the named one — the
 * Sonny photograph has three people in it, and a name sitting under three
 * faces is the same mistake as a name under the wrong one.
 *
 * To add a fifth: move its entry up out of `workShots` and give it a `where`.
 * Four, eight or twelve keep the lattice square at every width; five would
 * leave a one-cell row at desktop.
 */
const people = [
  {
    src: '/farm/team-three-in-row.jpg',
    who: 'Sonny Mokgadi',
    role: 'Managing director',
    where: 'On the left, with his brothers',
    alt: 'Sonny Mokgadi on the left with his two brothers, standing together in a planted row',
  },
  {
    src: '/farm/team-on-the-land.jpg',
    who: 'Setho Mokgadi',
    where: 'Out on the land',
    alt: 'Setho Mokgadi standing out in the veld in an #askfor13 top, holding the farm’s sun mark',
  },
  {
    src: '/farm/team-in-the-sun.jpg',
    who: 'Mophato Mokgadi',
    where: 'Holding one up to the lens',
    alt: 'Mophato Mokgadi in a sun hat and branded shirt among the plants, a tomato held close to the camera',
  },
  {
    src: '/farm/team-tractor-seat.jpg',
    who: 'Leiso Mokgadi',
    where: 'At the wheel',
    alt: 'Leiso Mokgadi at the wheel of the tractor',
  },
];

/**
 * The other sixteen from the team folder — the work, rather than the faces.
 *
 * A caption carries a name only where Setho has confirmed that exact
 * photograph; everything else describes what is happening instead. Sixteen
 * divides by two and by four, so the sheet never ends on a ragged row.
 *
 * To name one: add `who` to its entry. Nothing else changes.
 */
const workShots = [
  { src: '/farm/team-thirteen-backs.jpg', cap: 'Thirteen on every back', alt: 'The crew standing together, the number 13 printed on the back of every overall' },
  { src: '/farm/team-outside-tunnel.jpg', cap: 'The crew, outside the tunnel', alt: 'The team gathered outside one of the greenhouse tunnels' },
  { src: '/farm/team-crate-carry.jpg', who: 'Setho Mokgadi', cap: 'in front, passing the crate', alt: 'Setho Mokgadi in the foreground passing a picking crate to a colleague between the rows' },
  { src: '/farm/team-two-with-bags.jpg', cap: 'Two bags, ready to go', alt: 'Two of the crew holding up bags of tomatoes' },
  { src: '/farm/team-in-the-rows.jpg', cap: 'Down among the plants', alt: 'Crew working low down among the tomato plants' },
  { src: '/farm/team-checking-crop.jpg', cap: 'Checking the crop', alt: 'A member of the crew checking plants along the row' },
  { src: '/farm/team-ladder-pass.jpg', cap: 'Passing it up', alt: 'One person on a ladder taking a tool passed up by another' },
  { src: '/farm/team-ladder-work.jpg', cap: 'Up the ladder, under the roof', alt: 'Working high up under the tunnel roof from a ladder' },
  { src: '/farm/team-laying-beds.jpg', cap: 'Setting out the beds', alt: 'The crew shaping and setting out beds in the red soil' },
  { src: '/farm/team-setting-posts.jpg', cap: 'Setting the posts', alt: 'The crew setting a post and running a line along a new bed' },
  { src: '/farm/team-planting-out.jpg', cap: 'Planting out, bag by bag', alt: 'Planting out along a long row of grow bags' },
  { src: '/farm/team-tractor-thirteen.jpg', who: 'Leiso Mokgadi', cap: 'climbing up, thirteen on the back', alt: 'Leiso Mokgadi climbing onto the tractor, the number 13 on the back of the overall' },
  { src: '/farm/team-nursery-rows.jpg', cap: 'Working the nursery', alt: 'Working among rows of black grow bags under cover' },
  { src: '/farm/team-bag-rows.jpg', cap: 'Down the rows of bags', alt: 'Bending to the plants down a long row of grow bags' },
  { src: '/farm/team-tunnel-length.jpg', cap: 'The length of the tunnel', alt: 'Two people working at the far end of a planted tunnel' },
  { src: '/farm/team-lea-stand.jpg', cap: 'At the Local Enterprise Authority stand', alt: 'Two people talking in front of a Local Enterprise Authority banner' },
];

const TheTeam = () => (
  <>
    {/* ---------- Who they are ---------- */}
    <section className="section section--top" id="team">
      <Blob color="soft-lime" size={400} top={-150} right="-12%" />
      <Tomato color="var(--c-green)" size={110} bottom="6%" right="5%" opacity={0.12} rotate={12} outline />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          as="h1"
          eyebrow="From our family to yours"
          dot="var(--c-lime)"
          color="var(--c-yellow-ink)"
          variant="left"
          title={<>The <span className="t-red">team</span>.</>}
          lede="Different hands. Different skills. One team. Many moving parts, one shared standard."
        />

        <Reveal style={{ marginTop: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <p className="body" style={{ maxWidth: '62ch' }}>
            From the first seed to the final delivery it takes a collective
            effort to bring everything together. Different people, different
            strengths and different responsibilities — all working towards the
            same thing: producing quality we are proud to put our name on.
          </p>
        </Reveal>

        {/* The lead and Thato's photograph share a row. Apart, the text ran in
            a narrow column with the right third of the page empty under it,
            and the photograph then sat alone below with the same empty third
            beside it — two half-used rows where one full one will do. */}
        <div className="team__intro">
          <Reveal variant="left">
            <div className="team__lead">
              <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green)', marginBottom: '0.85rem' }}>
                Who leads it
              </p>
              <h2 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.9rem' }}>
                A great tomato is never<br />the work of one person.
              </h2>
              <p className="lede">
                It starts long before harvest and does not end until it is on
                your table. At TSOO&hellip;13, every crate carries the effort of
                a whole team &mdash; each doing their part so the rest can do
                theirs.
              </p>
              <p className="body" style={{ marginTop: '1.1rem' }}>
                Led with purpose by <strong>Sonny Mokgadi</strong>, our managing
                director, who sets the standard. We work to grow it right, pick
                it right and deliver it right, every single time.
              </p>
              {/* Restored at Setho's request. It was dropped when the page was
                  rebuilt on the copy from the 5 November notes, which did not
                  carry it. "Three generations" is the Patriot on Sunday's own
                  line about this ground, not ours. */}
              <p className="body" style={{ marginTop: '1rem' }}>
                Alongside him: Leiso Mokgadi, Mokgacha Mokgadi and Thato
                Mokgadi. Three generations have farmed this ground.
              </p>
            </div>
          </Reveal>

          {/* Thato is named in the sentence beside this and is in none of the
              twenty photographs in the team folder, so without it the page
              named her and showed her nowhere. She stays here rather than
              joining the four below: this frame is 4:3 and shows a group, and
              cropping it to an upright portrait cell would cut half the
              visitors out of it. */}
          <Reveal variant="scale" delay={0.1} className="team__shot team__shot--wide">
            <Photo
              src="/farm/thato-at-mookane.jpg"
              alt="Thato Mokgadi talking a group of visitors through the open field at Mookane"
            />
            <span className="team__shot-cap">
              <b className="team__shot-who">Thato Mokgadi</b>
              walking visitors through the open field
            </span>
          </Reveal>
        </div>

        {/* The four confirmed faces, out of the archive and up to the front.
            Names set in the page's own ink under the frame rather than burned
            white across the bottom of it — a caption describes a photograph,
            but a name belongs to a person and should not have to compete with
            a gradient to be read. */}
        <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
            Who&rsquo;s who
          </p>
        </Reveal>

        <div className="team__people">
          {people.map((person, i) => (
            <Reveal key={person.src} delay={(i % 4) * 0.06} className="team__person">
              <div className="team__face">
                <Photo src={person.src} alt={person.alt} />
              </div>
              <p className="team__name">{person.who}</p>
              {person.role && <p className="team__role">{person.role}</p>}
              <p className="team__where">{person.where}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- What it takes ----------
        On its own ground. This is the break that stops the page reading as
        one long scroll of photographs: the skills sit on paper, between the
        faces above and the archive below, and the change of colour does the
        work a full-bleed band does elsewhere on the site. */}
    <section className="section section--paper">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
            What it takes
          </p>
          {/* Green, like every other section head on the site. The page's own
              colour is the amber on the h1 above; three different heading
              colours down one page is the scatter this pass is undoing. */}
          <h2 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '1.1rem' }}>
            More than green fingers.
          </h2>
          <p className="body" style={{ maxWidth: '62ch' }}>
            Growing hydroponic tomatoes at this quality takes careful
            cultivation, a sharp eye at harvest, meticulous packing, logistics
            that keep things fresh and on time, a brand that tells our story
            honestly, and people who build lasting relationships with the
            customers we serve. No single skill does it alone. Each one is only
            as strong as the one beside it &mdash; and that is where the quality
            comes from.
          </p>
        </Reveal>

        <Reveal>
          <div className="chain">
            {skills.map((item) => (
              <div
                key={item.skill}
                className="chain__cell"
                style={{ '--chain-ink': item.ink, '--chain-tint': item.tint }}
              >
                <span className="chain__n" aria-hidden="true">{item.n}</span>
                <span className="chain__rule" aria-hidden="true" />
                <p className="chain__skill">{item.skill}</p>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* ---------- On the ground ----------
        Sixteen frames, square and tight where the four above are upright and
        spaced. That is the whole of the difference a reader needs: taller
        frames introduce people, shorter ones are the record. */}
    <section className="section">
      <Blob color="soft-yellow" size={320} bottom="8%" left="-9%" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', marginBottom: '1rem' }}>
            On the ground
          </p>
        </Reveal>

        <div className="team__shots team__shots--sheet">
          {workShots.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 4) * 0.05} variant="scale" className="team__shot">
              <Photo src={shot.src} alt={shot.alt} />
              <span className="team__shot-cap">
                {shot.who && <b className="team__shot-who">{shot.who}</b>}
                {shot.cap}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default TheTeam;
