import React, { useState } from "react";
import api from "../axios/axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/LoginStyle.css";
import AppButton from "../components/core/AppButton";
type Props = {};

interface Auth {
  email: string;
  password: string;
}
export default function Login({}: Props) {
  const [data, setData] = useState<Auth>({ email: "dd", password: "d" });
  let navigate = useNavigate();

  const handleChange = (e: any) => {
    let name: string = e.target.name;
    setData((dt) => ({ ...dt, [name]: e.target.value }));
  };

  const onSubmit = () => {
    api.post("/login", data).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      navigate("/main");
    });
  };
  return (
    <div className="login-card">
      <h2>Login</h2>
      <input
        placeholder="Email"
        type="text"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={(e) => handleChange(e)}
      />
      <AppButton
        backgroundColor="cornflowerblue"
        color="white"
        size="lg"
        lable="login"
        fun={onSubmit}
      ></AppButton>
    </div>
  );
}
