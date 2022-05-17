import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/hamburgerNav.module.css';
import { FiMenu } from 'react-icons/fi';

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
        } fixed top-12 h-screen w-screen lg:hidden z-50`}
      >
        <nav className="w-full h-full text-white bg-slate-500">
          <ul className="flex flex-col justify-around items-center lg:hidden h-[80%]">
            <div className="mt-12">
              <Link href="/">
                <a
                  className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                  onClick={handleClick}
                >
                  Home
                </a>
              </Link>
            </div>
            <div className="mt-4 ">
              <Link href="/">
                <a
                  className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                  onClick={handleClick}
                >
                  updates
                </a>
              </Link>
            </div>
            <div className="mt-4 ">
              <Link href="/">
                <a
                  className="w-full text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black px-7"
                  onClick={handleClick}
                >
                  Contact
                </a>
              </Link>
            </div>
            <div className="mt-4 ">
              <Link href="/">
                <a
                  className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                  onClick={handleClick}
                >
                  About
                </a>
              </Link>
            </div>
            <div className="mt-4 ">
              <Link href="/">
                <a
                  className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                  onClick={handleClick}
                >
                  Sign up
                </a>
              </Link>
            </div>
            <div className="mt-4 ">
              <Link href="/">
                <a
                  className="w-full px-12 text-4xl font-bold text-center transition duration-300 cursor-pointer hover:text-black"
                  onClick={handleClick}
                >
                  Login
                </a>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerNav;
