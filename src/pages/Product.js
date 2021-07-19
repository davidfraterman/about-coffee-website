import { useEffect, useContext } from "react";
import Nav from "../components/mobile-nav/Nav";
import { ProductContext } from "../context/product-context";

const Product = ({ match }) => {
  // product context
  const [aanbevolenProducten] = useContext(ProductContext);

  useEffect(() => {
    document.title = `About Coffee - ${
      aanbevolenProducten.findIndex(
        (product) => product.urlId === match.params.id
      ) !== -1
        ? aanbevolenProducten[
            aanbevolenProducten.findIndex(
              (product) => product.urlId === match.params.id
            )
          ].productProperties.name
        : "Ongeldig"
    }`;
  });

  console.log(
    aanbevolenProducten.findIndex(
      (product) => product.urlId === match.params.id
    )
  );

  return (
    <div>
      {aanbevolenProducten.findIndex(
        (product) => product.urlId === match.params.id
      ) !== -1 ? (
        <>
          <Nav darkMode />
          <h1>
            Product:{" "}
            {
              aanbevolenProducten[
                aanbevolenProducten.findIndex(
                  (product) => product.urlId === match.params.id
                )
              ].productProperties.name
            }
          </h1>
          <h3>
            Prijs:{" "}
            {
              aanbevolenProducten[
                aanbevolenProducten.findIndex(
                  (product) => product.urlId === match.params.id
                )
              ].productProperties.price
            }{" "}
            Euro
          </h3>
          <img
            src={`/product-images/${aanbevolenProducten.findIndex(
              (product) => product.urlId === match.params.id
            )}.jpg`}
            alt="product"
          />
        </>
      ) : (
        <h2>Dit product bestaat niet (meer) of is verplaatst.</h2>
      )}
    </div>
  );
};

export default Product;
