import React from "react";
import Img from "../Assats/Demaxe-logo.png"
import "./HeaderStyle.css"
import AnchorLink from "react-anchor-link-smooth-scroll";

const  Header = () =>{
    return(
        <>
        <div className="Header">
            <AnchorLink href="#home"><img alt="logo" src={Img} className="Logo"></img></AnchorLink>
            <div className="Items">
            <AnchorLink href="#home" className="home-Header">Home</AnchorLink>
            <AnchorLink href="#home" className="ourservices">Ourservices</AnchorLink>
            <AnchorLink href="#about" className="aboutus">AboutUs</AnchorLink>
            <AnchorLink href="#home" className="blogs">Blogs</AnchorLink>
            <AnchorLink href="#home" className="contact">Contact</AnchorLink>
            <AnchorLink href="#home" className="faqs">FAQs</AnchorLink>
            </div>
        </div>
        </>
    )
}

export default Header