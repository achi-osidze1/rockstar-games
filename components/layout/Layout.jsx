import React from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
