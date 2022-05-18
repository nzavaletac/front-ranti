import React from "react";
import { Card } from "../Card/Card";
import { Aside, Body, Container } from "./MainElements";

export const Main = ({ products }) => {
  return (
    <Container>
      <Aside>
        <ul>
          <li>All</li>
          <li>Accesorios</li>
          <li>Books</li>
          <li>Beauty</li>
          <li>Clothing</li>
          <li>Footwear</li>
          <li>Home</li>
          <li>Technology</li>
          <li>Toys</li>
          <li>Sliorts</li>
          <li>Video game</li>
          <li>Others</li>
        </ul>
      </Aside>
      <Body>
        <Card products={products} />
      </Body>
    </Container>
  );
};
