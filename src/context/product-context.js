import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [aanbevolenProducten] = useState([
    { id: 0, name: "Koffie naam", price: "23" },
    { id: 2, name: "Koffie naam 2", price: "42" },
    { id: 3, name: "Koffie naam 3", price: "13" },
    { id: 4, name: "Koffie naam 4", price: "16" },
    { id: 5, name: "Koffie naam 5", price: "2" },
    { id: 6, name: "Koffie naam 6", price: "62" },
    { id: 7, name: "Koffie naam 7", price: "52" },
    { id: 8, name: "Koffie naam 8", price: "23" }
  ]);

  return (
    <ProductContext.Provider value={[aanbevolenProducten]}>
      {props.children}
    </ProductContext.Provider>
  );
};
