import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheJourney from './components/TheJourney';
import TheWins from './components/TheWins';
import TheGoods from './components/TheGoods';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: 'var(--color-black)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <div id="journey">
        <TheJourney />
      </div>
      <div id="wins">
        <TheWins />
      </div>
      <div id="goods">
        <TheGoods />
      </div>
      <Gallery />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
