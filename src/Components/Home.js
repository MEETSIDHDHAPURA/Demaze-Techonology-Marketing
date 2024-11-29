import React from "react";
import "./HomeStyle.css";

import Movinglogo from "./Movinglogos.js";
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="text">
          <p className="home-text">
            Demaze <span className="Technologies"> Technologies</span>: Get Demaze-d.
            Results, not riddles Demaze the path to success. Empowering
            transformation
          </p>
          <div className="your">
            YOUR TRUSTED PARTNER FOR STRATEGY, BRAND, DESIGN, & WEB
          </div>
        </div>
        <Movinglogo />
        {/* <TableData /> */}
        <AboutUs />
        {/* <Contact /> */}
      </div>
    </>
  );
};

export default Home;
