import React from "react";
import { InputCustom } from "./InputCustom";
import { LoginData } from "./data/LoginData";
import { Link } from "react-router-dom";
import { useControlUser } from "../hooks/useControlUser";

export const FormLogin = () => {
  const { loginUser } = useControlUser();


  return (
    <>
      {LoginData.map((item, index) => (
        <InputCustom
          key={index}
          label={item.label}
          type={item.type}
          name={item.name}
        />
      ))}
      <button className="submit boxShadow" onClick={loginUser}>
        Submit
      </button>
      <Link to="/register" className="textShadow">
        Need register?
      </Link>
    </>
  );
};
