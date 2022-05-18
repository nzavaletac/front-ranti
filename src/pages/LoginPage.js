import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Login } from "../components/Login/Login";
import { URL_BACKEND } from "../environments/nvironments";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    const {
      data: { token },
    } = await axios({
      method: "POST",
      baseURL: URL_BACKEND,
      url: "/user/login",
      data: {
        email,
        password,
      },
    });
    localStorage.setItem("token", token);
    navigate("/register");
  }

  return (
    <>
      <Login login={login} setEmail={setEmail} setPassword={setPassword} />
    </>
  );
};
