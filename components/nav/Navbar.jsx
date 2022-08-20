import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import HamburgerNav from './HamburgerNav';
import SignupModal from '../modal/SignupModal';
import LoginModal from '../modal/LoginModal';
import AuthNav from './AuthNav';

function NavBar({ isAuth }) {
    useEffect(() => {}, [isAuth]);

    return (
        <div className="w-full h-16 bg-slate-500">
            <nav className="fixed top-0 z-50 w-full h-16 text-white bg-slate-500">
                <ul className="items-center justify-center hidden w-full lg:flex">
                    <Link href="/" passHref>
                        <button
                            type="button"
                            className="my-4 text-xl font-bold transition duration-200 cursor-pointer lg:mr-10 xl:mr-28 xl:text-2xl hover:text-black"
                        >
                            Home
                        </button>
                    </Link>
                    <Link href="/updates" passHref>
                        <button
                            type="button"
                            className="my-4 text-xl font-bold transition duration-200 cursor-pointer lg:mr-10 xl:mr-28 xl:text-2xl hover:text-black"
                        >
                            Updates
                        </button>
                    </Link>
                    <Link href="/contact" passHref>
                        <button
                            type="button"
                            className="my-4 text-xl font-bold transition duration-200 cursor-pointer lg:mr-10 xl:mr-28 xl:text-2xl hover:text-black"
                        >
                            Contact
                        </button>
                    </Link>
                    <Link href="/about" passHref>
                        <button
                            type="button"
                            className="text-xl font-bold transition duration-200 cursor-pointer lg:mr-2 xl:text-2xl hover:text-black"
                        >
                            About
                        </button>
                    </Link>
                </ul>
                {isAuth === undefined ? (
                    <>
                        <div className="relative">
                            <div className="absolute flex ml-6 top-5 right-7 lg:-top-11 lg:right-16 xl:right-32 ">
                                <SignupModal />
                                <LoginModal />
                            </div>
                        </div>
                        <HamburgerNav />
                    </>
                ) : (
                    <div className="relative">
                        <div className="absolute top-5 right-7 lg:-top-11 lg:right-16 xl:right-32 ">
                            <AuthNav />
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

NavBar.propTypes = {
    isAuth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

NavBar.defaultProps = {
    isAuth: undefined,
};

export default NavBar;
