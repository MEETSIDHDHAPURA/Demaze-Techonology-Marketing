import React from "react";
import "./TableDataStyle.css";
import Square from "../Assats/Squaer.png";
import Circle from "../Assats/Circle.png";
import Triangle from "../Assats/trikon.png";
import Toy from "../Assats/Toy.png";
import Work from "./Work";

const TableData = () => {
  return (
    <>
      <div className="meet-service">
        <div className="Product">
          <p id="services">Services</p>
        </div>
        <div className="div-table">
          <div className="web-d">
            <span>
              Web <br /> Development
            </span>
            <p className="web-text">
              Web Development: A Glimpse into the Code that Powers the Internet
              Web development, the unsung hero of the digital age, weaves the
              intricate tapestry of the internet. It's more than just flashy
              visuals and engaging content; it's the invisible dance of code
              that brings websites and web
              <img className="Circles" alt="Square" src={Circle}></img>
            </p>
          </div>
          <div className="app-d">
            <span>
              App <br /> Development
            </span>
            <p className="app-text">
              App Development: A Journey from Idea to Pocket Powerhouse In the
              palm of your hand lies a universe of possibilities. That's the
              magic of app development, where ideas sprout wings and take flight
              on our smartphones and tablets. It's not just coding and pixels.
              <img className="Square" alt="Square" src={Square}></img>
            </p>
          </div>

          <div className="game-d">
            <span>
              Games <br /> Development
            </span>
            <p className="game-text">
              Game Development: Weaving Worlds of Wonder and Thrill Step into a
              fantastical realm, conquer an impossible challenge, or simply find
              joy in a pixelated playground - that's the power of game
              development.
              <img className="Toy" alt="Square" src={Toy}></img>
            </p>
          </div>

          <div className="figma-d">
            <span>
              Figma to <br />
              webflow
            </span>
            <p className="figma-text">
              From Design to Web Magic: A Guide to Transforming Figma Designs
              into Live Webflow Websites Bridging the Gap Between Design and
              <img className="Triangle" alt="Square" src={Triangle}></img>
            </p>
          </div>
        </div>
      </div>
      <button className="Read-more">Read more</button>
      <Work />
    </>
  );
};

export default TableData;
