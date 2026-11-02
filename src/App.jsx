import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * Home stays in the main bundle: it is the landing page, so making it wait on
 * a second request would cost exactly the people we least want to keep
 * waiting. The other six are split out and fetched when first visited —
 * Layout renders the Suspense boundary so the navbar and footer stay put.
 */
const Journey = lazy(() => import('./pages/Journey'));
const Wins = lazy(() => import('./pages/Wins'));
const Goods = lazy(() => import('./pages/Goods'));
const News = lazy(() => import('./pages/News'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="journey" element={<Journey />} />
          <Route path="wins" element={<Wins />} />
          <Route path="goods" element={<Goods />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactUs />} />
          {/* Anything else: a real page that says so and lists the rest,
              rather than the navbar and footer with a hole between them. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
