import React, { Component } from "react";
import Img from "../Assats/Demaxe-logo.png";
import "./HeaderStyle.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MenuItem } from "./MenuItem.js";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="Responsiv">
          <div className="Header">
            <div className="logo-div">
              <a href="#home">
                <img alt="logo" src={Img} className="Logo"></img>
              </a>
            </div>
            <div className="Items">
              <a href="#home" className="home-Header">
                Home
              </a>
              <a href="#services" className="ourservices-header">
                Ourservices
              </a>
              <a href="#about" className="aboutus-header">
                AboutUs
              </a>
              <a href="#work" className="Work-header">
                Work
              </a>
              <a href="#contact" className="contact-header">
                Contact
              </a>
            </div>
          </div>
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItem.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Header;
