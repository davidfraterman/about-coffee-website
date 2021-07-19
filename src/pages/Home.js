import { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowLink from "../components/buttons/ArrowLink";
import HomeHeader from "../components/HomeHeader";
import AanbevolenProducten from "../components/aanbevolen/AanbevolenProducten";
import Button from "../components/buttons/ProductenButton";
// import Ratings from "../components/Ratings";
import * as ROUTES from "../constants/routes";
import "./Home.css";

import shoppingcart from "../images/shoppingcart.png";
import boer from "../images/boer.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "About Coffee - Home";
  }, []);

  return (
    <>
      <HomeHeader />

      <div className="home section-plain">
        <h2>ABOUT DIRECT & FAIR TRADE</h2>

        <h1>Verantwoord, en rechtstreeks van de boer</h1>
        <p>
          Hoge kwaliteit koffie speciaal gemaakt en afgesteld door de boer zelf
          voor een perfecte smaak.
        </p>
        <ArrowLink text="Over ons" to={ROUTES.ABOUT} />
      </div>

      <AanbevolenProducten />
      {/* <Ratings /> */}

      <div className="home section-image">
        <div className="section-image-text">
          <h2>ABOUT KWALITEIT</h2>
          <h1>De boer stelt alles zelf af tot perfectie</h1>
          <p>
            Hoge kwaliteit, rechtstreeks vanuit Colombia in uw keuken. Bestel nu
            voor 24% korting Bestel nu voor 24% korting. Hoge kwaliteit,
            rechtstreeks vanuit Colombia in uw keuken. Bestel nu voor 24%
            korting Bestel nu voor 24% korting.
          </p>
          <ArrowLink to={ROUTES.BLOG} text="Blog" />
        </div>
        <div className="section-image-img">
          <img src={boer} alt="boer" loading="lazy" />
        </div>
      </div>

      <div className="home section-plain">
        <h2>ABOUT DIRECT & FAIR TRADE</h2>
        <h1>Verantwoord, en rechtstreeks van de boer</h1>
        <p>
          Hoge kwaliteit koffie speciaal gemaakt en afgesteld door de boer zelf
          voor een perfecte smaak.
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
        </Link>{" "}
      </div>

      <div className="home section-blog">
        <div className="aanbevolen-article">
          <div className="aanbevolen-article-img-wrapper">
            <img className="aanbevolen-article-img" src={boer} alt="blog" />
          </div>
          <h1>Hoe onze producten fair trade zijn</h1>
          <p>
            Hoge kwaliteit rechtstreeks vanuit Colombia in uw keuken. Bestel nu
            voor 24% korting.
          </p>

          <ArrowLink to={ROUTES.BLOG} text="Lees meer" />
        </div>
      </div>

      <div className="home section-questions">
        <div className="home section-questions-content">
          <h1>Nog vragen?</h1>
          <ArrowLink to="mailto:davidspam228@gmail.com" text="Contact" />
        </div>
      </div>
    </>
  );
};

export default Home;
