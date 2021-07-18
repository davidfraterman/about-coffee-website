import { Link } from "react-router-dom";
import AanbevolenButton from "./AanbevolenButton";
import "./AanbevolenItem.css";

const Item = (props) => {
  return (
    <div className="aanbevolen-item-wrapper">
      <div className="aanbevolen-item">
        <Link to={`/producten/${props.linkid}`}>
          <img
            className="aanbevolen-item-img"
            src={`/product-images/${props.linkid}.jpg`}
            alt={`${props.name}`}
          />
          <p className="item-name">{props.name}</p>
          <p className="item-price">${props.price}</p>
        </Link>
      </div>
      <div className="aanbevolen-item-button">
        <AanbevolenButton>Bekijk product</AanbevolenButton>
      </div>
    </div>
  );
};

export default Item;
