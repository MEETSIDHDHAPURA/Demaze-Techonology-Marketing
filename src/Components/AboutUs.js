import "./AboutUsStyle.css";
import photo1 from "../Assats/About-1.png";
import photo2 from "../Assats/About-2.png";

function AboutUs() {
  return (
    <>
      <div id="about">
        <h1 className="Littel">About Us</h1>
        <div className="aboutmain">
        <div className="AboutFirst">
          <img className="Aboutfirstphoto" alt="photo" src={photo1}></img></div>
          <div className="Abouttext">
            <h2 className="Who">Who Are we?</h2>
            <sapn>
              We are a group of brilliant & helpful minds and exceptional
              talents who promote the value of effective communication and
              process transparency.
            </sapn>
            <p className="Learn">
              Learn more <i class="fa-solid fa-arrow-right">&nbsp;</i>
            </p>
            <sapn>
              We are believers in change! A change is driven by technology and
              innovation. We help individuals, start-ups, businesses, and
              enterprises adapt and adopt digital transformation. We aim to
              change people's lives and improve businesses with our progressive,
              value-adding, innovative technology solutions.
            </sapn>
        </div>
        </div>
        <div className="AboutSecond">
          <div className="Best">
            <h1 className="What">What we do Best</h1>
            <p>We add the value to your idea's execution.</p>
            <p className="Learn">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </p>
            <sapn>
              We start by listening to the ideas, issues, requirements,
              challenges and objectives. The process continues with an effort to
              understand the business, market sector and competitors to develop
              information which is combined with our technical knowledge,
              expertise and research in order to provide the best solution at
              the lowest cost.
            </sapn>
          </div>
          <div className="photo-aboutus">
            <img className="About-2" alt="photo-right" src={photo2}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
