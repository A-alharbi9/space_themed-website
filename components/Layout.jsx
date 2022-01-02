import React from "react";
import HamburgerNav from "./HamburgerNav";
import NavBar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
