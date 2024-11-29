import "./FooterStyle.css";
import Footerlogo from "../Assats/Demaxe-logo.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
 
const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="top">
                <div className="Footer-logo">
                    <AnchorLink href="#home"><img alt="Footer-logo" src={Footerlogo}></img></AnchorLink>
                    <p>Choose Your Favourite destination.</p>
                </div>
                <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/"> Changelogo</a>
                    <a href="/"> Status</a>
                    <a href="/"> License</a>
                    <a href="/"> All Versions</a> 
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a> 
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a> 
                </div>
                <div>
                    <h4>Otehrs</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License </a>
                </div>
            </div>
        </div>
        <div>
             <p className="right">All right recive by ©️ Demaze technology 2021-2022.</p>
        </div>
        </> 
    )
}


export default Footer