import axios from "axios";
import React, { useState, useEffect } from "react";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { NavBarHome } from "../components/NavBar/NavBarHome";
import { Search } from "../components/Search/Search";
import { URL_BACKEND } from "../environments/nvironments";

export const Home = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: `${URL_BACKEND}`,
      url: "/post",
    }).then(({ data }) => setpost(data.posts));
  }, []);

  return (
    <>
      <NavBarHome />
      <Banner />
      <Search />
      <Main post={post} />
      <Footer />
    </>
  );
};
