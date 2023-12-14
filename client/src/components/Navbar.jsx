import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MenuData } from "./data/MenuData";
import "../styles/components/Navbar.css";

export const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="navbar_container boxShadow">
      <Link to="/">
        <img src={logo} width={40} />
      </Link>
      <div onClick={() => setState(!state)}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state ? "navbar_menu active" : "navbar_menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.url}
                className={item.title}
                id={item.id}
                onClick={() => setState(!state)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
