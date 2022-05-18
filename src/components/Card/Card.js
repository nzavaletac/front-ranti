import React from "react";
import {
  CardBody,
  CardCategory,
  CardContainer,
  CardDescription,
  CardHeader,
  Cards,
  CardTitle,
  ChangeFor,
  ContainerDetail,
  ContainerImg,
  Detail,
  Image,
  Location,
  Seller,
  StateProduct,
  TagCategory,
  TagPrice,
  Whatsapp,
} from "./CardElements";

export const Card = ({ products }) => {
  return products.map(({ id, title, image, price, category, description }) => (
    <CardContainer>
      <Cards key={id}>
        <CardHeader>
          <ContainerImg>
            <Image src={image} />
          </ContainerImg>
          <TagPrice>S/ {price}</TagPrice>
          <TagCategory>{category}</TagCategory>
        </CardHeader>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <StateProduct>State: New</StateProduct>
          <Seller>By: Noe Zavaleta Cardeña</Seller>
          <Whatsapp>Whatsapp: 993645977</Whatsapp>
          <Location>Location: Lima, Perú</Location>
          <ChangeFor>Change for: iPhone 5, Smansung Galxy</ChangeFor>
        </CardBody>
        <ContainerDetail>
          <Detail to={`/products/${id}`}>See more</Detail>
        </ContainerDetail>
      </Cards>
    </CardContainer>
  ));
};
