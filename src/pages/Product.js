import { useEffect, useContext } from "react";
import { ProductContext } from "../context/product-context";
import Nav from "../components/mobile-nav/Nav";
import "./Product.css";

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

  return (
    <>
      {aanbevolenProducten.findIndex(
        (product) => product.urlId === match.params.id
      ) !== -1 ? (
        <>
          <Nav darkMode />
          <div className="product">
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
              className="product-image"
              src={`/product-images/${aanbevolenProducten.findIndex(
                (product) => product.urlId === match.params.id
              )}.jpg`}
              alt="product"
            />
            <p>
              {
                aanbevolenProducten[
                  aanbevolenProducten.findIndex(
                    (product) => product.urlId === match.params.id
                  )
                ].productProperties.description
              }
            </p>
          </div>
        </>
      ) : (
        <h2>Dit product bestaat niet (meer) of is verplaatst.</h2>
      )}
    </>
  );
};

export default Product;
