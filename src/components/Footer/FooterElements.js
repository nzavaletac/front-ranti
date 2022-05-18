import { Link } from "react-router-dom";
import styled from "styled-components";
import wave from "../../assets/images/wave.svg";

export const FooterContainer = styled.div`
  background-image: url("${wave}");
  background-size: cover;
  color: #fff;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #77f16d;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #77f16d;
    transition: 0ms.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 40px auto 0 auto;
`;

export const Logo = styled.img`
  margin-left: 30px;
  width: 50px;
  display: flex;
  align-items: center;
`;

export const WebsiteRights = styled.small`
  color: #77f16d;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
