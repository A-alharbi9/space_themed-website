import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorCircle } from 'react-icons/bi';

function InputError({ errorMessage }) {
    return (
        <div className="flex justify-between py-1">
            <BiErrorCircle size={25} className="mx-3 font-semibold text-red-500" />
            <p className="px-1 text-red-700 lg:text-base">{errorMessage}</p>
        </div>
    );
}

InputError.propTypes = {
    errorMessage: PropTypes.string.isRequired,
};

export default InputError;
