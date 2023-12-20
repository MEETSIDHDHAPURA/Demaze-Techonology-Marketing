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
            <p className="home-Header">Home</p>
            <p className="ourservices">Ourservices</p>
            <p className="aboutus">AboutUs</p>
            <p className="blogs">Blogs</p>
            <p className="contact">Contact</p>
            <p className="faqs">FAQs</p>  
            </div>
        </div>
        </>
    )
}

export default Header