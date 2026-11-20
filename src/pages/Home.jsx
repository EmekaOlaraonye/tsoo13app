import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import NextUp from '../components/NextUp';

/**
 * The homepage, deliberately short.
 *
 * Hero, who we are, and the ways on. The growing story, the film and the
 * "Dive deeper" grid all moved to /grows when Setho called this page too
 * long. It ends at NextUp — nothing scrolls past it.
 */
const Home = () => (
  <>
    <Hero />
    <WhoWeAre />
    <NextUp />
  </>
);

export default Home;
