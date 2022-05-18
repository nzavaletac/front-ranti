import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Add,
  Category,
  Container,
  ContainerDetail,
  ContainerImage,
  Description,
  HR,
  Image,
  Price,
  Title,
  TitleDescription,
} from "./DetailElements";
import { FaWhatsapp } from "react-icons/fa";

export const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState([]);

  const { image, title, category, price, description } = product;
  const { rate, count } = rating;

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: `/products/${productId}`,
    }).then(({ data }) => {
      setProduct(data);
      setRating(data.rating);
    });
  });

  return (
    <Container>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>
      <ContainerDetail>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <HR />
        <Price>S/ {price}</Price>
        <Add type="button">
          Continuar en Whatsapp <FaWhatsapp size="25px" />
        </Add>
        <HR />
        <TitleDescription>Description</TitleDescription>
        <Description>{description}</Description>
        <HR />
        <strong>Rate: </strong>
        {rate} <strong>Count: </strong>
        {count}
      </ContainerDetail>
    </Container>
  );
};
