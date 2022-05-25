import axios from "axios";
import React, { useState, useEffect } from "react";
import { CardPost } from "./CardPost";

export const Posts = () => {
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
      <CardPost products={products} />
    </>
  );
};
