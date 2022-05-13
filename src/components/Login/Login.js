import React from "react";
import "./login.css";
import {
  Container,
  Form,
  FormContent,
  FormH1,
  FormWrap,
  IconForm,
  IconFormContainer,
  LoginBg,
  LogoBg,
  NavLink,
} from "./LoginElements";

import LoginImg from "./../../assets/images/LoginImg.jpg";
import LogoForm from "./../../assets/images/icon3.svg";
import { Link } from "react-router-dom";

export const Login = ({ login, setEmail, setPassword }) => {
  return (
    <>
      <Container>
        <LoginBg>
          <LogoBg src={LoginImg} />
        </LoginBg>
        <FormWrap>
          <FormContent>
            <Form onSubmit={login}>
              <IconFormContainer>
                <Link to="/">
                  <IconForm src={LogoForm} />
                </Link>
              </IconFormContainer>
              <FormH1>Sign in to your account</FormH1>
              <div className="container">
                <input
                  placeholder="Email"
                  className="container__input"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="container__label">Email</label>
              </div>
              <div className="container">
                <input
                  placeholder="Password"
                  className="container__input"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="container__label">Password</label>
              </div>
              <button className="learn-more" type="submit">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Login</span>
              </button>
              <p>
                Don't have an account? Register{" "}
                <NavLink to="/register">Here!</NavLink>
              </p>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
