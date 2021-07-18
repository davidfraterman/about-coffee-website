import { Link } from "react-router-dom";
import AanbevolenButton from "./AanbevolenButton";
import "./AanbevolenItem.css";

const Item = (props) => {
  return (
    <div className="aanbevolen-item-wrapper">
      <Link to={`/producten/${props.linkid}`}>
        <div className="aanbevolen-item">
          <img
            className="aanbevolen-item-img"
            src={`/product-images/${props.linkid}.jpg`}
            alt={`${props.name}`}
          />
          <p className="item-name">{props.name}</p>
          <p className="item-price">${props.price}</p>
        </div>
        <div className="aanbevolen-item-button">
          <AanbevolenButton>Bekijk product</AanbevolenButton>
        </div>
      </Link>
    </div>
  );
};

export default Item;
