import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';

/**
 * The homepage, deliberately short.
 *
 * Hero, who we are, and one way on. The growing story, the film and the
 * "Dive deeper" grid all moved to /grows when Setho called this page too
 * long.
 *
 * One redirection, and it is the red button at the foot of WhoWeAre: "See
 * how it grows". Setho's call, and the reasoning is that people are going
 * there next anyway — offering five doors at the bottom of a page where
 * nearly everyone wants the same one is a choice that slows them down
 * rather than helping. The grid of five still exists, on /grows, where a
 * reader has actually read something and a fork is worth offering.
 */
const Home = () => (
  <>
    <Hero />
    <WhoWeAre />
  </>
);

export default Home;
