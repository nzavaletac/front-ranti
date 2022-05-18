import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #fafafa;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconForm = styled.img`
  width: 50px;
  margin: 10px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 15px;
  background-color: #fafafa;
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #2f2b35;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const LoginBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.8;
`;

export const LogoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const NavLink = styled(Link)`
  color: #77f16d;
`;
