import { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import ArrowLink from "../buttons/ArrowLink";
import Item from "../aanbevolen/AanbevolenItem";
import "./AanbevolenProducten.css";

const AanbevolenProducten = () => {

  // product context
  const [aanbevolenProducten] = useContext(ProductContext);

  return (
    <div className="aanbevolen-prod-wrapper">
      <div className="aanbevolen-prod-text">
        <h1>Aanbevolen Producten</h1>
        <ArrowLink text="Alle Producten" />
      </div>
      <div className="prod-items">
        {aanbevolenProducten.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            linkid={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AanbevolenProducten;
