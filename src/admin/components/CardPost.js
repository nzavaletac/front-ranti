import React from "react";
import {
  CardContainer,
  Cards,
  CardHeader,
  ContainerImg,
  Image,
  TagPrice,
  TagCategory,
  CardBody,
  CardTitle,
  StateProduct,
  Seller,
  Whatsapp,
  Location,
  ChangeFor,
  ContainerDetail,
  Button,
} from "./CardPostElements";
import { BiDetail } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export const CardPost = ({ products }) => {
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
          <ChangeFor>Change for: iPhone 8</ChangeFor>
        </CardBody>
        <ContainerDetail>
          <Button to={`/products/${id}`}>
            <BiDetail size="25px" />
          </Button>
          <Button to="">
            <AiFillEdit size="25px" />
          </Button>
          <Button to="">
            <AiFillDelete size="25px" />
          </Button>
        </ContainerDetail>
      </Cards>
    </CardContainer>
  ));
};
