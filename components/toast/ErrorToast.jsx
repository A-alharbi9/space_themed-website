import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorAlt } from 'react-icons/bi';

/*    eslint react/self-closing-comp: "off" */

function ErrorToast({ errorMessage }) {
    return (
        <div className="fixed z-50 px-2 text-white transition duration-1000 bg-red-400 rounded-md opacity-0 top-6 md:top-[41rem]  md:right-8 h-28 w-70 animate-bottomFade md:animate-topFade">
            {/* A21alharbi9@gmail.com */}
            <div className="flex py-2">
                <BiErrorAlt size={25} />
                <span className="mx-2 border rounded-sm opacity-30"></span>
                <p className="w-full">Error</p>
            </div>
            <div className="py-3">
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

ErrorToast.propTypes = {
    errorMessage: PropTypes.string.isRequired,
};

export default ErrorToast;
