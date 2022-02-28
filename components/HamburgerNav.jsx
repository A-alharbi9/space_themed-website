import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/hamburgerNav.module.css";
import { FiMenu } from "react-icons/fi";

function HamburgerNav() {
  const [isOpen, setIsopen] = useState(false);

  const navRef = useRef();

  const handleClick = () => {
    if (isOpen) {
      setIsopen(false);
    } else {
      setIsopen(true);
    }
  };
  console.log("is: ", isOpen);
  console.log("isa: ", `${styles.isOpen}`);

  return (
    <div className="w-screen lg:hidden transition duration-500 ease-in-out">
      <FiMenu
        className="absolute right-5 top-5 text-2xl stroke-white lg:pointer-events-none cursor-pointer"
        onClick={handleClick}
      />

      <div
        className={`${
          isOpen ? `${styles.opened}` : `${styles.closed}`
        } fixed top-12 flex flex-col items-center h-screen w-screen lg:hidden z-50`}
      >
        <nav className="bg-slate-500 text-white w-full h-full">
          <ul className="flex flex-col justify-around items-center py-7 lg:hidden h-full">
            <Link href="/">
              <a
                className="my-4 p-6 text-center font-bold text-4xl hover:text-black w-full transition duration-200 cursor-pointer"
                onClick={handleClick}
              >
                Home
              </a>
            </Link>
            <Link href="/">
              <a
                className="my-4 p-6 text-center font-bold text-4xl hover:text-black w-full transition duration-200 cursor-pointer"
                onClick={handleClick}
              >
                News
              </a>
            </Link>
            <Link href="/">
              <a
                className="my-4 p-6 text-center font-bold text-4xl hover:text-black w-full transition duration-200 cursor-pointer"
                onClick={handleClick}
              >
                Contact
              </a>
            </Link>
            <Link href="/">
              <a
                className="my-4 p-6 text-center font-bold text-4xl hover:text-black w-full transition duration-200 cursor-pointer"
                onClick={handleClick}
              >
                About
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerNav;
