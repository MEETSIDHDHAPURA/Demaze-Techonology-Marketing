import React from "react";
import "./HomeStyle.css";
import TableData from "../Components/TableData.js"
import Footer from "./Footer.js";
import Movinglogo from "./Movinglogos.js";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="text">
          <p className="home-text">
            Offering a suite of <div className="enterprise"> Enterprise </div>{" "}
            grade <br />
            services to B2B Saas, VC's, Start-up's, <br />
            and E-commerce
          </p>

          <div className="your">
            YOUR TRUSTED PARTNER FOR STRATEGY, BRAND, DESIGN, & DEV
          </div>    
        </div>
          <Movinglogo/>
          <TableData/>
        <Footer/>

      </div>
    </>
  );
};

export default Home;
