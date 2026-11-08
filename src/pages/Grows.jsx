import Growing from '../components/Growing';
import VideoSection from '../components/VideoSection';
import Explore from '../components/Explore';

/**
 * How it grows — the second half of what used to be the homepage.
 *
 * Setho's call: the growing story matters, but carrying it on the homepage
 * made that page far too long. So the homepage now stops at "we grow it, we
 * move it, we build it" and hands over here, and this is also where "Dive
 * deeper" lives — the point at which a reader picks their own direction.
 */
const Grows = () => (
  <>
    <Growing standalone />
    <VideoSection />
    <Explore />
  </>
);

export default Grows;
