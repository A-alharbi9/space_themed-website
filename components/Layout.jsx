import React from "react";
import NavBar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
