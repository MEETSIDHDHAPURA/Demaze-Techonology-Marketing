import { useState } from "react";
import "./HeaderStyle.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <img
            alt=""
            src="/demazeLogo.png"
            className="logo-img"
          />
        </div>
        <div className="desktop-menu">
          <div className="menu-links">
            <p>About</p>
            <p>Contact</p>
            <p>Career</p>
            <p className="menu-blog">Blogs</p>
          </div>
          <button variant="contained">Get</button>
        </div>
        <div className="mobile-menu-icon" onClick={handleClick}>
          {menu ? <p>Close</p> : <p>Icon</p>}
        </div>
      </div>

      {menu && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Career</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
