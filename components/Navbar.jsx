import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="w-screen">
      <nav className="bg-slate-500 text-white w-full">
        <ul className="md:flex justify-center items-center w-full cursor-pointer">
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-400">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-400">
              News
            </a>
          </Link>
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-400">
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className="md:mx-4 md:p-4 font-bold md:text-2xl hover:text-black transition duration-400">
              About
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
