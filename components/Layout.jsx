import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
