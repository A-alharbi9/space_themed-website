import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.oneOfType([PropTypes.object]),
};

MyApp.defaultProps = {
    pageProps: {},
};

export default MyApp;
