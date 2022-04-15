import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './nav/Navbar';
import Cookies from 'js-cookie';

function Layout({ children }) {
  const [isAuthState, setisAuthState] = useState(Cookies.get('token'));

  setInterval(() => {
    setisAuthState(Cookies.get('token'));
  }, 1000);

  return (
    <>
      <NavBar isAuth={isAuthState} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
