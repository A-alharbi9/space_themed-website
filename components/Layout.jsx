import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Footer from './Footer';
import NavBar from './nav/Navbar';
import { isAuthContext } from '../contexts/authContext';

/* eslint react/jsx-no-constructed-context-values:"off" */

function Layout({ children }) {
    const [isAuthState, setisAuthState] = useState(Cookies.get('token') && true);

    useEffect(() => {
        const isAuth = setInterval(() => {
            setisAuthState(Cookies.get('token'));
        }, 1000);

        return () => {
            clearInterval(isAuth);
        };
    }, []);

    return (
        <isAuthContext.Provider value={{ isAuthState }}>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </isAuthContext.Provider>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Layout;
