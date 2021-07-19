import { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import ArrowLink from "../buttons/ArrowLink";
import Item from "../aanbevolen/AanbevolenItem";
import "./AanbevolenProducten.css";

const AanbevolenProducten = () => {
  // product context
  const [aanbevolenProducten] = useContext(ProductContext);
  console.log(aanbevolenProducten[0].productProperties.price);

  return (
    <div className="aanbevolen-prod-wrapper">
      <div className="aanbevolen-prod-text">
        <h1>Aanbevolen Producten</h1>
        <ArrowLink text="Alle Producten" />
      </div>
      <div className="prod-items">
        {aanbevolenProducten.map((product) => (
          <Item
            key={product.urlId}
            name={product.productProperties.name}
            price={product.productProperties.price}
            linkid={product.id}
            urlid={product.urlId}
          />
        ))}
      </div>
    </div>
  );
};

export default AanbevolenProducten;
