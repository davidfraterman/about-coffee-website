import { useEffect } from "react";
import ArrowLink from "../components/buttons/ArrowLink";
import HomeHeader from "../components/HomeHeader";
import AanbevolenProducten from "../components/aanbevolen/AanbevolenProducten";
// import Ratings from "../components/Ratings";
import * as ROUTES from "../constants/routes";
import "./Home.css";

import boer from "../images/boer.JPG";

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
        <ArrowLink text="Over ons" />
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
    </>
  );
};

export default Home;
