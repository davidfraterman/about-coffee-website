import { Link } from "react-router-dom";
import Button from "./buttons/ProductenButton";
import "./HomeHeader.css";
import Nav from "./mobile-nav/Nav";

import shoppingcart from "../images/shoppingcart.png";

const HomeHeader = (props) => {
  return (
    <div className="hero-image">
      <Nav />
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Colombiaanse Single Origin Koffie</h1>
          <p>
            Single Origin koffiebonen en gemalen met aandacht gemaakt.
            Rechtstreeks van de boerderij in huis.
          </p>

          <Link to="/producten">
            <Button type="producten">
              <div className="button-content-wrapper">
                <img
                  className="button-icon"
                  src={shoppingcart}
                  alt="shopping cart icon"
                />
                Producten
              </div>
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
