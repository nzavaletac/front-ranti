import React from "react";
import {
  CardBody,
  CardContainer,
  CardHeader,
  Cards,
  CardTitle,
  ContainerDetail,
  ContainerImg,
  Detail,
  Image,
  Seller,
  Span,
  TagCategory,
  TagPrice,
} from "./CardElements";

export const Card = ({ post }) => {
  return post.map(
    ({
      _id,
      title,
      image,
      state,
      category,
      description,
      district,
      changeFor,
    }) => (
      <CardContainer>
        <Cards key={_id}>
          <CardHeader>
            <ContainerImg>
              <Image src={image} />
            </ContainerImg>
            <TagPrice>{state}</TagPrice>
            <TagCategory>{category}</TagCategory>
          </CardHeader>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <Seller>
              <Span>Description:</Span>
              {description} <br />
              <Span>District: </Span> {district} <br />
              <Span>Change for:</Span> {changeFor}br
            </Seller>
            <Seller>
              <Span>By:</Span> Noe Zavaleta Cardeña
            </Seller>
          </CardBody>
          <ContainerDetail>
            <Detail to={`/products/${_id}`}>Detail</Detail>
          </ContainerDetail>
        </Cards>
      </CardContainer>
    )
  );
};
