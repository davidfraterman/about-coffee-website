import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [aanbevolenProducten] = useState([
    {
      id: 0,
      urlId: "koffie-naam",
      productProperties: {
        name: "Koffie naam 1",
        price: "39",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 1,
      urlId: "koffie-naam-2",
      productProperties: {
        name: "Koffie naam 2",
        price: "947",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 2,
      urlId: "koffie-naam-3",
      productProperties: {
        name: "Koffie naam 3",
        price: "275",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 3,
      urlId: "koffie-naam-4",
      productProperties: {
        name: "Koffie naam 4",
        price: "067",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 4,
      urlId: "koffie-naam-5",
      productProperties: {
        name: "Koffie naam 5",
        price: "5679",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 5,
      urlId: "koffie-naam-6",
      productProperties: {
        name: "Koffie naam 6",
        price: "614",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 6,
      urlId: "koffie-naam-7",
      productProperties: {
        name: "Koffie naam 7",
        price: "453",
        description: "description koffie naam bla bla bla",
      },
    },
    {
      id: 7,
      urlId: "koffie-naam-8",
      productProperties: {
        name: "Koffie naam 8",
        price: "345",
        description: "description koffie naam bla bla bla",
      },
    },
  ]);

  return (
    <ProductContext.Provider value={[aanbevolenProducten]}>
      {props.children}
    </ProductContext.Provider>
  );
};
