import "./ArrowLink.css";

import arrow from "../../images/arrowright.png";
import arrowblack from "../../images/arrowright-black.png";

const ArrowLink = (props) => {
  return (
    <a href={props.to}>
      {props.elegant ? (
        <p className="arrow-elegant-text">{props.text}</p>
      ) : (
        <p className="arrow-normal-text">{props.text}</p>
      )}

      <img
        className="arrowlink-img"
        src={props.elegant ? arrowblack : arrow}
        alt="arrow"
      />
    </a>
  );
};

export default ArrowLink;
