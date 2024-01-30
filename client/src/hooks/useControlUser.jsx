import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import { InputValueContexts } from "../context/InputValueContext";
import { useContext } from "react";
import { UserDataContexts } from "../context/UserDataContext";

export const useControlUser = () => {
  const navigate = useNavigate();
  const { inputValue } = useContext(InputValueContexts);
  const { setUserData } = useContext(UserDataContexts);

  //Register User
  const registerUser = async () => {
    const { name, email, password, confirmPassword } = inputValue;
    if (password === confirmPassword) {
      try {
        const res = await Axios.post(
          "https://control-stock-backend.vercel.app/users/register",
          {
            name,
            email,
            password,
          }
        );
        if (res.data === "Email already exists") {
          toast.error(res.data);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error(error.response.data);
      }
    } else {
      toast.error("Passwords don't match");
    }
  };

  //Login User
  const loginUser = async () => {
    const { email, password } = inputValue;
    try {
      const res = await Axios.post(
        "https://control-stock-backend.vercel.app/users/login",
        {
          email,
          password,
        }
      );
      const { token } = res.data;
      if (res.data === "Invalid credentials") {
        toast.error(res.data);
      } else {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response.data);
    }
  };

  //Logout User
  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.reload();
    //window.location.reload() on vercel
  };

  //get User
  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      Axios.get("https://control-stock-backend.vercel.app/users/get", {
        headers: {
          Authorization: token, // Pass the token in the Authorization header
        },
      })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  };

  return { registerUser, loginUser, logoutUser, getUser };
};
