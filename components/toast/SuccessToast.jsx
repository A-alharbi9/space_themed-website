import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function SuccessToast({ successMessage }) {
    return (
        <div className="fixed z-50 px-2 text-white transition duration-1000 bg-green-400 rounded-md opacity-0 bottom-2 right-10 w-70 animate-fade">
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

export default SuccessToast;
