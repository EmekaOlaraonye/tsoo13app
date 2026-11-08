import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';

/**
 * The homepage is now short on purpose: arrive, find out who we are, and
 * leave by your own choice rather than being pushed somewhere on landing.
 *
 * It ends at "we grow it, we move it, we build it". Everything that used to
 * follow — the growing, the film, and the Dive deeper grid — is on /grows,
 * and the follow strip is a page of its own.
 */
const Home = () => (
  <>
    <Hero />
    <WhoWeAre />
  </>
);

export default Home;
