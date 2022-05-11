import React from "react";
import {
  Column,
  Container,
  Form,
  ImgRegister,
  Section,
  FormH1,
  Link,
  IconFormContainer,
  IconForm,
} from "./RegisterElements";
import RegisterImg from "./../../assets/images/RegisterImg.jpg";
import LogoForm from "./../../assets/images/icon3.svg";
import "./register.css";

export const Register = () => {
  return (
    <Container>
      <Column>
        <Section>
          <ImgRegister src={RegisterImg} />
        </Section>
      </Column>
      <Column>
        <Form onSubmit="">
          <IconFormContainer>
            <IconForm src={LogoForm} />
          </IconFormContainer>
          <FormH1>Sign in to your account</FormH1>
          <div className="container">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="container__input"
            />
            <label className="container__label">Name</label>
          </div>
          <div className="container">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="container__input"
            />
            <label className="container__label">Last Name</label>
          </div>
          <div className="container">
            <input
              name="whatsapp"
              type="number"
              placeholder=" Whatsapp"
              className="container__input"
            />
            <label className="container__label">Whatsapp</label>
          </div>
          <div className="container">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="container__input"
            />
            <label className="container__label">Email</label>
          </div>
          <div className="container">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="container__input"
            />
            <label className="container__label">Password</label>
          </div>
          <div className="container">
            <input
              name="password"
              type="password"
              placeholder="Confirm password"
              className="container__input"
            />
            <label className="container__label">Confirm Password</label>
          </div>
          <button type="submit" className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Create an account</span>
          </button>
          <p>
            Already have an account? <Link href="/login">Signin!</Link>
          </p>
        </Form>
      </Column>
    </Container>
  );
};
