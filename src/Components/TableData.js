import React from "react";
import "./TableDataStyle.css";
import Square from "../Assats/Squaer.png";
import Circle from "../Assats/Circle.png";
import Triangle from "../Assats/trikon.png";
import Toy from "../Assats/Toy.png";
import Marketing from "../Assats/Marketing.jpeg";
import Xyz from "../Assats/images.jpeg";

const TableData = () => {
  return (
    <div id="servuces">
      <div className="Product">
        <p>Services</p>
      </div>
      <table>
        <tr>
          <th>
            Web <br /> Development
          </th>
          <th>
            App <br /> Development
          </th>
          <th>
            Games <br /> Development
          </th>
          <th>
            Figma to <br />
            webflow
          </th>
        </tr>
        <tr>
          <td>
            Web Development: A Glimpse into the Code that Powers the Internet
            Web development, the unsung hero of the digital age, weaves the
            intricate tapestry of the internet. It's more than just flashy
            visuals and engaging content; it's the invisible dance of code that
            brings websites and web applications.
            <img className="Circles" alt="Square" src={Circle}></img>
          </td>
          <td>
            App Development: A Journey from Idea to Pocket Powerhouse In the
            palm of your hand lies a universe of possibilities. That's the magic
            of app development, where ideas sprout wings and take flight on our
            smartphones and tablets. It's not just coding and pixels.
            <img className="Square" alt="Square" src={Square}></img>
          </td>
          <td>
            Game Development: Weaving Worlds of Wonder and Thrill Step into a
            fantastical realm, conquer an impossible challenge, or simply find
            joy in a pixelated playground - that's the power of game
            development. It's more than just code and graphics; it's crafting
            interactive experiences that ignite our imaginations and stir our
            emotions.
            <img className="Toy" alt="Square" src={Toy}></img>
          </td>
          <td>
            From Design to Web Magic: A Guide to Transforming Figma Designs into
            Live Webflow Websites Bridging the Gap Between Design and
            Development: Figma and Webflow, two powerful tools in the web design
            and development world, have joined forces to create a seamless
            workflow that streamlines the process of bringing beautiful designs
            to life online. This note explores the key steps involved in this
            transformation,
            <img className="Triangle" alt="Square" src={Triangle}></img>
          </td>
        </tr>
      </table>

      <button className="Read-more">Read more</button>
      <div className="work">
        <p>Work</p>
        <div>
          <img className="Marketing" alt="marketing" src={Marketing}></img>
          <span className="Super">
            Supermove <br />
          </span>
          <sapn className="Supermove-p">
            Supermove came to us looking for a complete overhaul. We started
            with some in-depth research on their business and their users to
            help us
          </sapn>
        </div>
        <div>
          <img className="Xyz" alt="imgs" src={Xyz}></img>
          <span className="Zenhub">
            Zenhub
            <br />
          </span>
          <div className="zenhub-span">
            Supermove came to us looking for a complete overhaul. We started
            with some in-depth research on their business and their users to
            help us
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableData;
