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
        className="absolute right-5 top-5 text-2xl stroke-white lg:pointer-events-none"
        onClick={handleClick}
      />

      <div
        className={`${
          isOpen ? `${styles.opened}` : `${styles.closed}`
        } fixed top-12 h-screen w-screen lg:hidden z-50`}
      >
        <nav className="bg-slate-500 text-white w-full h-full">
          <ul className="flex flex-col justify-around items-center lg:hidden h-[80%]">
            <div className="mt-12">
              <Link href="/">
                <a
                  className="text-center font-bold text-4xl hover:text-black px-12 w-full cursor-pointer transition duration-300"
                  onClick={handleClick}
                >
                  Home
                </a>
              </Link>
            </div>
            <div className=" mt-4">
              <Link href="/">
                <a
                  className="text-center font-bold text-4xl hover:text-black px-12 w-full cursor-pointer transition duration-300"
                  onClick={handleClick}
                >
                  News
                </a>
              </Link>
            </div>
            <div className=" mt-4">
              <Link href="/">
                <a
                  className="text-center font-bold text-4xl hover:text-black px-7 w-full cursor-pointer transition duration-300"
                  onClick={handleClick}
                >
                  Contact
                </a>
              </Link>
            </div>
            <div className=" mt-4">
              <Link href="/">
                <a
                  className="text-center font-bold text-4xl hover:text-black px-12 w-full cursor-pointer transition duration-300"
                  onClick={handleClick}
                >
                  About
                </a>
              </Link>
            </div>
            <div className=" mt-4">
              <Link href="/">
                <a
                  className="text-center font-bold text-4xl hover:text-black px-12 w-full cursor-pointer transition duration-300"
                  onClick={handleClick}
                >
                  Sign up
                </a>
              </Link>
            </div>
            <div className=" mt-4">
              <Link href="/">
                <a
                  className="text-center font-bold text-4xl hover:text-black px-12 w-full cursor-pointer transition duration-300"
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
