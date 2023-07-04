import React, { Component } from "react";
import logo from "../assets/logo.svg";
import { MenuData } from "./MenuData";
import "../styles/components/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <Link to="/">
          <img src={logo} width={40} className="logo" />
        </Link>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.title} id={item.id} onClick={this.handleClick}/>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
