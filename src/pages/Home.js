import axios from "axios";
import React, { useState, useEffect } from "react";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { NavBarHome } from "../components/NavBar/NavBarHome";
import { Search } from "../components/Search/Search";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    }).then(({ data }) => setProducts(data));
  }, []);

  return (
    <>
      <NavBarHome />
      <Banner />
      <Search />
      <Main products={products} />
      <Footer />
    </>
  );
};
