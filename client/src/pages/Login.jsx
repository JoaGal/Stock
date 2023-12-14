import React from "react";
import { LoginData } from "../components/data/LoginData";
import { Link } from "react-router-dom";
import { InputCustom } from "../components/InputCustom";

export const Login = () => {
  return (
      <form className="box">
        <h1 className="textShadow">Login</h1>
        <h2 className="textShadow">To access you need to be registered</h2>
        {LoginData.map((item, index) => (
          <InputCustom
            key={index}
            label={item.label}
            type={item.type}
            name={item.name}
          />
        ))}
        <button className="submit boxShadow">Submit</button>
        <Link to="/register" className="textShadow">Need register?</Link>
      </form>
  );
};
