import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import styles from '../../styles/hamburgerNav.module.css';

function HamburgerNav() {
    const [isOpen, setIsopen] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            setIsopen(false);
        } else {
            setIsopen(true);
        }
    };

    return (
        <div className="w-screen transition duration-500 ease-in-out lg:hidden">
            <FiMenu
                className="absolute text-2xl top-5 right-7 stroke-white lg:pointer-events-none"
                onClick={handleClick}
            />

            <div
                className={`${
                    isOpen ? `${styles.opened}` : `${styles.closed}`
                } fixed top-12 h-screen w-screen lg:hidden z-50 transition duration-300`}
            >
                <nav className="w-full h-full text-white bg-slate-500">
                    <ul className="flex flex-col justify-around items-center lg:hidden h-[80%]">
                        <div className="mt-12">
                            <Link href="/" passHref>
                                <button
                                    type="button"
                                    className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                                    onClick={() => setIsopen(false)}
                                >
                                    Home
                                </button>
                            </Link>
                        </div>
                        <div className="mt-4 ">
                            <Link href="/updates" onClick={handleClick} passHref>
                                <button
                                    type="button"
                                    className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                                    onClick={() => setIsopen(false)}
                                >
                                    updates
                                </button>
                            </Link>
                        </div>
                        <div className="mt-4 ">
                            <Link href="/contact" onClick={handleClick} passHref>
                                <button
                                    type="button"
                                    className="w-full text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black px-7"
                                    onClick={() => setIsopen(false)}
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                        <div className="mt-4 ">
                            <Link href="/about" onClick={handleClick} passHref>
                                <button
                                    type="button"
                                    className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                                    onClick={() => setIsopen(false)}
                                >
                                    About
                                </button>
                            </Link>
                        </div>
                        <div className="mt-4 ">
                            <Link href="/auth/signup" onClick={handleClick} passHref>
                                <button
                                    type="button"
                                    className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                                    onClick={() => setIsopen(false)}
                                >
                                    Sign up
                                </button>
                            </Link>
                        </div>
                        <div className="mt-4 ">
                            <Link href="/auth/login" onClick={handleClick} passHref>
                                <button
                                    type="button"
                                    className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                                    onClick={() => setIsopen(false)}
                                >
                                    Login
                                </button>
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HamburgerNav;
