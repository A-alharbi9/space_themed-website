import React from 'react';
import Link from 'next/link';
import HamburgerNav from './HamburgerNav';
import SignupModal from './modal/SignupModal';
import LoginModal from './modal/LoginModal';

function NavBar() {
  return (
    <div className="w-screen">
      <nav className="bg-slate-500 text-white w-full h-16 fixed top-0 z-50 lg:relative ">
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
          <div className="relative">
            <div className="flex absolute -top-5 lg:left-16 xl:left-32 px-2">
              <SignupModal />
              <LoginModal />
            </div>
          </div>
        </ul>
        <HamburgerNav />
      </nav>
    </div>
  );
}

export default NavBar;
