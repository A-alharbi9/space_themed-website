import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import NavBar from './nav/Navbar';
import Cookies from 'js-cookie';

function Layout({ children }) {
  const [isAuthState, setisAuthState] = useState(Cookies.get('token'));

  useEffect(() => {
    const isAuth = setInterval(() => {
      setisAuthState(Cookies.get('token'));
    }, 1000);

    return () => {
      clearInterval(isAuth);
    };
  }, []);

  return (
    <>
      <NavBar isAuth={isAuthState} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
