import "./ContactStyle.css";
import Profile from "../Assats/Contact.jpeg";
// import { MdOutlineCall } from "react-icons/md";

function Contact() {
  return (
    <>
      <h1 className="Contact-h1">Contact</h1>
      <div className="Contactmain" id="contact">
        <div className="container">
          <img alt="Contact-photo" src={Profile}></img>
          <p className="free">
            Free - 15min <br />
            Consultation
          </p>
          <div className="Contact-text">
            Have a new project in mind? Schedule a 30 minute discovery call and
            I will at the very least give you some great advice.
          </div>
        </div>
        <div className="Contact-First">
          <p>Schedule a discovery call</p>
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Contact number"></input>
            <br />
            <input placeholder="Email"></input>
            <input placeholder="Estimate budget"></input>
            <br />
          </form>
          <button className="ContactSubmit">Submit</button>
          <div className="contactthird">
            <p className="Schedule">
            (+91) 7016660537
              <div className="email">
              info@demaze.in
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
