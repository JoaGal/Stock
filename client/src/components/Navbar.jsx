import React, { Component } from "react";
import logo from "../assets/logo.svg";
import { MenuData } from "./MenuData";
import "../styles/Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <a>
          <img src={logo} width={40} className="logo" />
        </a>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <i href={item.url} className={item.title} id={item.id}/>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
