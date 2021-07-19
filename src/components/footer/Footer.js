import "./Footer.css";

import instagramLogo from "../../images/instagram-logo.png";
import facebookLogo from "../../images/facebook-logo.png";
import twitterLogo from "../../images/twitter-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-header">
          <h1 className="footer-header-title">About Coffee</h1>
          <h1 className="footer-header-subtitle">Nederland</h1>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h1 className="footer-section-title">Over About Coffee</h1>
            <ul>
              <li>Over ons</li>
              <li>Veiligheid en privacy</li>
              <li>Algemene voorwaardes</li>
            </ul>
          </div>
          <div className="footer-section">
            <h1 className="footer-section-title">Over About Coffee</h1>
            <ul>
              <li>Over ons</li>
              <li>Veiligheid en privacy</li>
              <li>Algemene voorwaardes</li>
            </ul>
          </div>
          <div className="footer-section">
            <h1 className="footer-section-title">Over About Coffee</h1>
            <ul>
              <li>Over ons</li>
              <li>Veiligheid en privacy</li>
              <li>Algemene voorwaardes</li>
            </ul>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-socials">
              <img
                src={facebookLogo}
                alt="social"
                className="footer-bottom-social"
                loading="lazy"
              />
              <img
                src={instagramLogo}
                alt="social"
                className="footer-bottom-social"
                loading="lazy"
              />
              <img
                src={twitterLogo}
                alt="social"
                className="footer-bottom-social"
                loading="lazy"
              />
            </div>
            <p className="footer-bottom-disclaimer">
              Copyright About Coffee 2021. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
