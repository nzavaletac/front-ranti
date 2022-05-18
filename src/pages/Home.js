import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { NavBarHome } from "../components/NavBar/NavBarHome";

export const Home = () => {
  return (
    <>
      <NavBarHome />
      <Banner />
      <Footer />
    </>
  );
};
