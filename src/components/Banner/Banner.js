import React from "react";
import {
  BannerImg,
  Column,
  Container,
  Paragraph,
  RegisterBtn,
  Section,
  Span,
  SubTitle,
  Title,
} from "./BannerElements";
import banner from "../../assets/images/banner1.svg";

export const Banner = () => {
  return (
    <Container>
      <Column>
        <Section>
          <SubTitle>EXCHANGE YOUR PRODUCTS</SubTitle>
          <Title>
            FAST AND <Span>EASY</Span>
          </Title>
          <Paragraph>EXCHANGE PRODUCTS IN YOUR CITY</Paragraph>
          <RegisterBtn to="/register">Register now</RegisterBtn>
        </Section>
      </Column>
      <Column>
        <Section>
          <BannerImg src={banner} />
        </Section>
      </Column>
    </Container>
  );
};
