import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
