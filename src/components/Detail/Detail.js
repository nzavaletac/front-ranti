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
  Title,
  TitleDescription,
  ContainerDetails,
  Span,
} from "./DetailElements";
import { FaWhatsapp } from "react-icons/fa";
import {
  DEFAULT_MESSAGE,
  URL_BACKEND,
  URL_WHATSAPP,
} from "../../environments/nvironments";

export const Detail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  const {
    image,
    title,
    category,
    state,
    description,
    changeFor,
    district,
    whatsapp,
  } = post;

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: `${URL_BACKEND}`,
      url: `/post/${postId}`,
    }).then(({ data }) => {
      setPost(data.posts);
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
        <ContainerDetails>
          <Span>State:</Span> {state}
        </ContainerDetails>
        <ContainerDetails>
          <Span>Change For:</Span> {changeFor}
        </ContainerDetails>
        <ContainerDetails>
          <Span>Location:</Span> {district}
        </ContainerDetails>
        <Add
          href={`${URL_WHATSAPP}${51993645977}${DEFAULT_MESSAGE}`}
          target="_blank"
        >
          Continuar en Whatsapp <FaWhatsapp size="25px" />
        </Add>
        <HR />
        <TitleDescription>Description</TitleDescription>
        <Description>{description}</Description>
        <HR />
      </ContainerDetail>
    </Container>
  );
};
