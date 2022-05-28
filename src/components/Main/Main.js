import React from "react";
import { Card } from "../Card/Card";
import { Categories } from "../Categories/Categories";
import { Aside, Body, Container } from "./MainElements";

export const Main = ({ post }) => {
  return (
    <Container>
      <Aside>
        <Categories />
      </Aside>
      <Body>
        <Card post={post} />
      </Body>
    </Container>
  );
};
