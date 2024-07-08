// src/components/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* Add Footer here when it's ready */}
    </div>
  );
};

export default Layout;
