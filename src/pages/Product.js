import { useEffect, useContext } from "react";
import Nav from "../components/mobile-nav/Nav";
import { ProductContext } from "../context/product-context";

const Product = ({ match }) => {
  // product context
  const [aanbevolenProducten] = useContext(ProductContext);

  useEffect(() => {
    document.title = `About Coffee - ${aanbevolenProducten[match.params.id] ? aanbevolenProducten[match.params.id-1].name : 'Ongeldig'}`;
  });

  console.log(match);
  console.log(aanbevolenProducten[match.params.id]);
  return (
    <div>
      {aanbevolenProducten[match.params.id-1] ? (
        <>
          <Nav darkMode />
          <h1>Product {aanbevolenProducten[match.params.id-1].name}</h1>
          <h3>Prijs: {aanbevolenProducten[match.params.id-1].price} Euro</h3>
        </>
      ) : (
        <h2>Dit product bestaat niet (meer) of is verplaatst.</h2>
      )}
    </div>
  );
};

export default Product;
