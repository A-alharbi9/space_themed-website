import React from 'react';
import Link from 'next/link';
import HamburgerNav from './HamburgerNav';
import SignupModal from '../modal/SignupModal';
import LoginModal from '../modal/LoginModal';
import AuthNav from './AuthNav';

function NavBar({ isAuth }) {
  return (
    <div className="w-screen">
      <nav className="fixed bg-slate-500 text-white w-full h-16 top-0 z-50">
        <ul className="hidden lg:flex justify-center items-center w-full">
          <Link href="/">
            <a className="my-4 lg:mr-10 xl:mr-28 font-bold text-xl xl:text-2xl hover:text-black transition duration-200 cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="my-4 lg:mr-10 xl:mr-28 font-bold text-xl xl:text-2xl hover:text-black transition duration-200 cursor-pointer">
              News
            </a>
          </Link>
          <Link href="/">
            <a className="my-4 lg:mr-10 xl:mr-28 font-bold text-xl xl:text-2xl hover:text-black transition duration-200 cursor-pointer">
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className=" lg:mr-2 font-bold text-xl xl:text-2xl hover:text-black transition duration-200 cursor-pointer">
              About
            </a>
          </Link>
        </ul>
        {isAuth === undefined && (
          <>
            <div className="relative">
              <div className="flex absolute -top-12 2xl:-top-11 lg:right-16 xl:right-32 px-2">
                <SignupModal />
                <LoginModal />
              </div>
            </div>
            <HamburgerNav />
          </>
        )}
        {isAuth && (
          <div className="relative">
            <div className="flex absolute top-5 right-5 lg:-top-14 lg:right-16 xl:right-32 px-2 cursor-pointer">
              <AuthNav />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
