import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import VideoSection from '../components/VideoSection';
import Explore from '../components/Explore';
import InstagramSection from '../components/InstagramSection';

/**
 * The homepage is the whole story in order:
 * arrive -> who we are -> meet us on film -> go deeper -> follow along.
 */
const Home = () => (
  <>
    <Hero />
    <WhoWeAre />
    <VideoSection />
    <Explore />
    <InstagramSection />
  </>
);

export default Home;
