import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div style={{ background: 'var(--color-black)', minHeight: '100vh' }}>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
