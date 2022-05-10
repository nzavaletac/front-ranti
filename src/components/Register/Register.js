import React, { useState } from "react";
import {
  Column,
  Container,
  Form,
  ImgRegister,
  Section,
  FormH1,
  NavLink,
  IconFormContainer,
  IconForm,
} from "./RegisterElements";
import Swal from "sweetalert2";
import RegisterImg from "./../../assets/images/RegisterImg.jpg";
import LogoForm from "./../../assets/images/icon3.svg";
import "./register.css";
import { postUser } from "../../services/User.Services";
import { useNavigate } from "react-router-dom";

const emptyForm = {
  name: "",
  lastName: "",
  whatsapp: "",
  email: "",
  password: "",
};

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({
      ...form,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      color: " #2f2b35",
      icon: "info",
      showCancelButton: true,
      cancelButtonColor: "red",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        postUser(form).then((data) => {
          if (!data._id) {
            setForm(emptyForm);
            Swal.fire({
              title: "Successfull!",
              color: " #2f2b35",
              text: "Account create successfully!",
              icon: "success",
              timer: "1500",
            });
            setTimeout(() => {
              navigate("/login");
            }, 1600);
          }
        });
      }
    });
  };

  return (
    <Container>
      <Column>
        <Section>
          <ImgRegister src={RegisterImg} />
        </Section>
      </Column>
      <Column>
        <Form onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={form.name}
            />
            <label className="container__label">Name</label>
          </div>
          <div className="container">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="container__input"
              onChange={handleChange}
              value={form.lastName}
            />
            <label className="container__label">Last Name</label>
          </div>
          <div className="container">
            <input
              name="whatsapp"
              type="number"
              placeholder=" Whatsapp"
              className="container__input"
              onChange={handleChange}
              value={form.whatsapp}
            />
            <label className="container__label">Whatsapp</label>
          </div>
          <div className="container">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="container__input"
              onChange={handleChange}
              value={form.email}
            />
            <label className="container__label">Email</label>
          </div>
          <div className="container">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="container__input"
              onChange={handleChange}
              value={form.password}
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
            Already have an account? <NavLink to="/login">Signin!</NavLink>
          </p>
        </Form>
      </Column>
    </Container>
  );
};
