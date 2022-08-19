import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from 'react-icons/ai';

/*    eslint react/self-closing-comp: "off" */

function SuccessToast({ successMessage }) {
    return (
        <div className="fixed z-50 px-2 text-white transition duration-1000 bg-green-400 rounded-md opacity-0 top-6 md:top-[41rem] md:right-8 h-28 w-70 animate-bottomFade md:animate-topFade">
            <div className="flex py-2">
                <AiOutlineCheckCircle size={25} />
                <span className="mx-2 border rounded-sm opacity-30"></span>
                <p className="w-full">Success</p>
            </div>
            <div className="py-3">
                <p>{successMessage}</p>
            </div>
        </div>
    );
}

SuccessToast.propTypes = {
    successMessage: PropTypes.string.isRequired,
};

export default SuccessToast;
