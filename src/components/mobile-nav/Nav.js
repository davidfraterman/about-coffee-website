import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import light from "../../images/menu.png"

const Nav = (props) => {
  const [navHeight, setNavHeight] = useState("0%");
  
  const openNav = () => {
    setNavHeight("100%");
  };

  const closeNav = () => {
    setNavHeight("0%");
  };


  return (
    <div className="nav-container">
      <Link to="/">
        <h3 className="logo-text" style={{ color: props.color }}>
          About Coffee
        </h3>
      </Link>
      <nav>
        <ul className="desktop-nav">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/producten">
            <li>Producten</li>
          </Link>
          <Link to="/about">
            <li>Over ons</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
        </ul>
        <ul className="mobile-nav">
          <button onClick={openNav} style={{ color: props.color }}>
            <img
              className="menu-icon"
              src={light}
              alt="menu icon"
            />
          </button>
        </ul>
        <div className="mobile-overlay" style={{ height: navHeight }}>
          <div className="mobile-overlay-content">
            <div className="mobile-overlay-content__links">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/producten">
                <li>Producten</li>
              </Link>
              <Link to="/about">
                <li>Over ons</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </div>
            <button onClick={closeNav}>&times;</button>
            <p onClick={closeNav}>Sluit</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
