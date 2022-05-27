import styled from "styled-components";

export const Container1 = styled.div`
  display: flex;
`;

export const Column1 = styled.div`
  flex: 100%;
  text-align: center;
  background-color: #fafafa;
`;

export const Form1 = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #fafafa;
`;

export const ImgPreview = styled.img`
  width: 400px;
  margin-top: 15px;
`;

export const ContainerInputFile = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  border: 1px solid gray;
  padding: 8px;
  border-radius: 15px;
`;

export const InputFile = styled.input`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
`;

export const IconFileUpload = styled.div`
  margin-right: 8px;
`;
