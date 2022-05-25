import React from "react";
import { Container, Links } from "../components/FooterElements";

export const Footer = () => {
  return (
    <>
      <Container>
        <Links href="/">Terms of use</Links>
        <Links href="/">Privacy statement</Links>
        <Links href="/">Help</Links>
      </Container>
    </>
  );
};
