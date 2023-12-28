import React, { Component } from "react";
import Img from "../Assats/Demaxe-logo.png"
import "./HeaderStyle.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MenuItem } from "./MenuItem.js";
import { Link } from "react-router-dom";

class Header extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    render(){
    return(
        <>
        <div className="Responsiv">
        <div className="Header">
            <AnchorLink href="#home"><img alt="logo" src={Img} className="Logo"></img></AnchorLink>
            <div className="Items">
            <AnchorLink href="#home" className="home-Header">Home</AnchorLink>
            <AnchorLink href="#services" className="ourservices-header">Ourservices</AnchorLink>
            <AnchorLink href="#about" className="aboutus-header">AboutUs</AnchorLink>
            <AnchorLink href="#work" className="Work-header">Work</AnchorLink>
            <AnchorLink href="#contact" className="contact-header">Contact</AnchorLink>
            </div>
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItem.map((item, index) =>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            {item.title}
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
}

export default Header