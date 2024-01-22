import React from "react";
import { ToastContainer } from "react-toastify";
import { FormLogin } from "../components/FormLogin";
import { useControlUser } from "../hooks/useControlUser";

export const Login = () => {
  const { logoutUser } = useControlUser();

  return (
    <div className="box">
      <h1 className="textShadow">Login</h1>
      <h2 className="textShadow">To access you need to be registered</h2>
      {localStorage.getItem("token") === null ? (
        <FormLogin />
      ) : (
        <button className="submit boxShadow " onClick={logoutUser}>
          Logout
        </button>
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};
