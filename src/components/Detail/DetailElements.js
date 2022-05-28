import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #fafafa;
  padding: 10px;
  margin-top: 25px;
  margin: 50px auto;
  box-shadow: #aaa 0px 0px 1px;
  max-width: 1248px;
`;

export const ContainerImage = styled.div`
  width: 500px;
  margin: 25px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  cursor: zoom-in;
`;

export const ContainerDetail = styled.div`
  width: 500px;
  margin: 25px;
`;

export const Title = styled.h2`
  margin: 15px 0;
`;

export const Category = styled.div`
  margin: 15px 0;
  border-radius: 15px;
  border: 1px solid #77f16d;
  width: fit-content;
  padding: 3px 10px;
`;

export const ContainerDetails = styled.p`
  font-size: 15px;
  margin: 15px 0;
`;

export const Span = styled.span`
  color: #19726c;
  font-size: 17px;
`;

export const Add = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #1e1e1e;
  border: none;
  color: #77f16d;
  text-align: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px 0;
  width: 100%;
`;

export const TitleDescription = styled.h2`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 13px;
  margin: 15px 0;
  line-height: 25px;
`;

export const HR = styled.hr`
  width: 100%;
  border: 1px solid gray;
`;
