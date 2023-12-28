import Marketing from "../Assats/Marketing.jpeg";
import Xyz from "../Assats/images.jpeg";
import "./WorkStyle.css"

function Work() {
  return (
    <>
    <div className="work" id="work">
      <p>Work</p>
      <div className="work-marketing-img1">
        <img className="Marketing" alt="marketing" src={Marketing}></img>
        <div className="Super">
          Supermove <br />
        </div>
        <sapn className="Supermove-p">
          Supermove came to us looking for a complete overhaul. We started with
          some in-depth research on their business and their users to help us
        </sapn>
      </div>
      <div className="work-marketing-img2">
        <img className="Xyz" alt="imgs" src={Xyz}></img>
        <div className="Zenhub">
          Zenhub
          <br />
        </div>
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