import "./ArrowLink.css"

import arrow from "../../images/arrowright.png"

const ArrowLink = (props) => {


    return (
      <a href={props.to}>
        {props.text}{" "}
        <img
          className="arrowlink-img"
          src={arrow}
          alt="arrow"
        />
      </a>
    );
}

export default ArrowLink
