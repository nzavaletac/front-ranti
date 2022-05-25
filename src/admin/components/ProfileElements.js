import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  margin: 50px auto;
  padding-top: 50px;
  box-shadow: #aaa 0px 0px 2px;
`;
export const ContainerImage = styled.div`
  width: 600px;
  margin: 25px auto;
  text-align: center;
  padding-top: 25px;
`;
export const Image = styled.img`
  width: 100%;
`;

export const ContainerInformation = styled.div`
  width: 600px;
  line-height: px;
  margin: 25px;
  text-align: center;
  .skills {
    margin: 15px auto;
    border: 2px solid gainsboro;
    border-radius: 15px;
    width: min-content;
    padding: 5px 15px;
  }
`;

export const Title = styled.h1`
  margin: 15px 0;
`;

export const Name = styled.h2`
  margin: 15px 0;
`;

export const Description = styled.p`
  margin: 15px 0;
`;

export const Email = styled.p`
  margin: 15px auto;
`;

export const Github = styled.a`
  text-decoration: none;
`;
