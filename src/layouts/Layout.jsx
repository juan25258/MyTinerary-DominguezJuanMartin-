import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}
