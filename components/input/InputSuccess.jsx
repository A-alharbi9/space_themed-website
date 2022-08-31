import React from 'react';
import PropTypes from 'prop-types';
import { BiCheckCircle } from 'react-icons/bi';

function InputSuccess({ successMessage }) {
    return (
        <div className="flex justify-between py-1">
            <BiCheckCircle size={25} className="mx-3 font-semibold text-green-400" />
            <p className="px-1 text-green-700 lg:text-base">{successMessage}</p>
        </div>
    );
}

InputSuccess.propTypes = {
    successMessage: PropTypes.string.isRequired,
};

export default InputSuccess;
