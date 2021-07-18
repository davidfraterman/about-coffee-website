import { useEffect } from "react";
import Nav from "../components/mobile-nav/Nav";

const Products = () => {
  useEffect(() => {
    document.title = "About Coffee - Producten";
  });

  return (
    <>
      <Nav darkMode />
      <h1>Producten</h1>
    </>
  );
};

export default Products;
