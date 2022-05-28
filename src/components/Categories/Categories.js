import React, { useState, useEffect } from "react";
import { Container, UnOrderList, TagImg } from "./CategoriesElement";
import tag from "../../assets/images/tag.svg";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:8000",
      url: "/categories",
    }).then(({ data }) => setCategories(data.categories));
  }, []);

  return (
    <Container>
      <UnOrderList>
        <li>All</li>
        {categories.map((cat) => (
          <li key={cat._id}>
            <TagImg src={tag} alt="" /> {cat.title}
          </li>
        ))}
      </UnOrderList>
    </Container>
  );
};
