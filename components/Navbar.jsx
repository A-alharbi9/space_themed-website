import React from "react";
import Link from "next/link";
import HamburgerNav from "./HamburgerNav";

function NavBar() {
  return (
    <div className="w-screen">
      <nav className="bg-slate-500 text-white w-full h-16 fixed top-0 z-50 lg:relative ">
        <ul className="hidden lg:flex justify-center items-center w-full">
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-200 cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-200 cursor-pointer">
              News
            </a>
          </Link>
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-200 cursor-pointer">
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-200 cursor-pointer">
              About
            </a>
          </Link>
        </ul>
        <HamburgerNav />
      </nav>
    </div>
  );
}

export default NavBar;
