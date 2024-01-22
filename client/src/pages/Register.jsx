import React from "react";
import { RegisterData } from "../components/data/RegisterData";
import { InputCustom } from "../components/InputCustom";
import { ToastContainer } from "react-toastify";
import { useControlUser } from "../hooks/useControlUser";

export const Register = () => {
  const { registerUser } = useControlUser();

  return (
    <div className="box">
      <h1 className="textShadow">Register</h1>
      <h2 className="textShadow">To access you need to be registered</h2>
      {RegisterData.map((item, index) => (
        <InputCustom
          key={index}
          label={item.label}
          type={item.type}
          name={item.name}
        />
      ))}
      <button className="submit boxShadow" onClick={registerUser}>
        Submit
      </button>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};
