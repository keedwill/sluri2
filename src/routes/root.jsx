import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function Root() {

  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
