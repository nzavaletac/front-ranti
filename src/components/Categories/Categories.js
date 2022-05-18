import React from "react";
import { Container, UnOrderList, TagImg } from "./CategoriesElement";
import tag from "../../assets/images/tag.svg";

export const Categories = () => {
  return (
    <Container>
      <UnOrderList>
        <li>All</li>
        <li>
          <TagImg src={tag} alt="" />
          Accesorios
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Books
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Beauty
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Clothing
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Footwear
        </li>

        <li>
          <TagImg src={tag} alt="" />
          Home
        </li>

        <li>
          <TagImg src={tag} alt="" />
          Technology
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Toys
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Sliorts
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Video game
        </li>
        <li>
          <TagImg src={tag} alt="" />
          Others
        </li>
      </UnOrderList>
    </Container>
  );
};
