import { useEffect } from "react";

const Product = ({ match }) => {
  useEffect(() => {
    document.title = `{match.params.id}`;
  }, []);

  console.log(match);
  return (
    <div>
      <h1>Product {match.params.id}</h1>
    </div>
  );
};

export default Product;
