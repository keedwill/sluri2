import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import Reveal from "../components/Reveal";

export default function Root() {
  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
