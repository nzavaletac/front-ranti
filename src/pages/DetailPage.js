import React from "react";
import { Detail } from "../components/Detail/Detail";
import { Footer } from "../components/Footer/Footer";
import { NavBarHome } from "../components/NavBar/NavBarHome";

export const DetailPage = () => {
  return (
    <>
      <NavBarHome />
      <Detail />
      <Footer />
    </>
  );
};
