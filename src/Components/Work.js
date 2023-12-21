import Marketing from "../Assats/Marketing.jpeg";
import Xyz from "../Assats/images.jpeg";
import "./WorkStyle.css"

function Work() {
  return (
    <>
    <div className="work" id="work">
      <p>Work</p>
      <div>
        <img className="Marketing" alt="marketing" src={Marketing}></img>
        <span className="Super">
          Supermove <br />
        </span>
        <sapn className="Supermove-p">
          Supermove came to us looking for a complete overhaul. We started with
          some in-depth research on their business and their users to help us
        </sapn>
      </div>
      <div>
        <img className="Xyz" alt="imgs" src={Xyz}></img>
        <span className="Zenhub">
          Zenhub
          <br />
        </span>
        <div className="zenhub-span">
          Supermove came to us looking for a complete overhaul. We started with
          some in-depth research on their business and their users to help us
        </div>
      </div>
    </div>
    </>
  );
}

export default Work