import React, { useEffect } from 'react';
import Link from 'next/link';
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
          <Link href="/">
            <a className="my-4 text-xl font-bold transition duration-200 cursor-pointer lg:mr-10 xl:mr-28 xl:text-2xl hover:text-black">
              Home
            </a>
          </Link>
          <Link href="/updates">
            <a className="my-4 text-xl font-bold transition duration-200 cursor-pointer lg:mr-10 xl:mr-28 xl:text-2xl hover:text-black">
              Updates
            </a>
          </Link>
          <Link href="/">
            <a className="my-4 text-xl font-bold transition duration-200 cursor-pointer lg:mr-10 xl:mr-28 xl:text-2xl hover:text-black">
              Contact
            </a>
          </Link>
          <Link href="/about">
            <a className="text-xl font-bold transition duration-200 cursor-pointer lg:mr-2 xl:text-2xl hover:text-black">
              About
            </a>
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
          <>
            <div className="relative">
              <div className="absolute text-green-200 top-5 right-7 lg:-top-11 lg:right-16 xl:right-32 ">
                <AuthNav />
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
