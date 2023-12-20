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
          <th>Web <br/> Development</th>
          <th>App <br/> Development</th>
          <th>Games <br/> Development</th>
          <th>Figma to <br />webflow</th>
        </tr>
        <tr>
          <td>
            Whether you need a full scope project or just ad-hoc work, SVZ has
            you covered. Our end-to-end suite of agency services can be
            customized to fit your Enterprise needs, covering strategy,
            branding, design, Webflow development, and CMS training.
            <img className="Circles" alt="Square" src={Circle}></img>
          </td>
          <td>
            We find new demand, measure the competition, and put together a
            scope for you to take action on. Then we grow results by piloting
            the new campaign in market, tracking it, and always optimizing.
            <img className="Square" alt="Square" src={Square}></img>
          </td>
          <td>
            Experience an all inclusive subscription service for top-tier design
            and Webflow development with our US Based Team. Our enterprise-grade
            quality is unmatched, with no room for gimmicks or subpar.
            <img className="Toy" alt="Square" src={Toy}></img>
          </td>
          <td>
            Whether we've just finished designing your new site or you're
            handing off finished designs for us to develop in Webflow, we're
            here to apply our trusted development
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
