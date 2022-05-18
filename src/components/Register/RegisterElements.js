import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;

export const Column = styled.div`
  flex: 100%;
  text-align: center;
  background-color: #fafafa;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  left: 0;
  right: 0;
  height: 100%;
`;

export const ImgRegister = styled.img`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #fafafa;
`;

export const FormH1 = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  color: #2f2b35;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  color: #77f16d;
`;

export const IconFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconForm = styled.img`
  width: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
