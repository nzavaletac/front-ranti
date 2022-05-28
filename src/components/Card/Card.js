import React from "react";
import {
  CardBody,
  CardContainer,
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
  TagCategory,
  TagPrice,
  Whatsapp,
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
            <Whatsapp>Description: {description}</Whatsapp>
            <Location>District: {district}</Location>
            <ChangeFor>Change for: {changeFor}</ChangeFor>
            <Seller>By: Noe Zavaleta Cardeña</Seller>
          </CardBody>
          <ContainerDetail>
            <Detail to={`/products/${_id}`}>See more</Detail>
          </ContainerDetail>
        </Cards>
      </CardContainer>
    )
  );
};
