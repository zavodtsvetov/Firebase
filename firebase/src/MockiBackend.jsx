import { useState, useEffect } from "react";
import s from "./App.module.css";
const PRODUCTS_MOCK = [
  {
    id: "001",
    name: "Телевизор",
    price: 57990,
  },
  { id: "002", name: "PlayStation 5 Pro", price: 80990 },
  {
    id: "003",
    name: "DualSense",
    price: 7990,
  },
];

export const MockComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ json: () => PRODUCTS_MOCK });
      }, 0); //я убрал задержку, было 2000
    })
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      <h1>3</h1>
      {isLoading ? (
        <div className={s.loader}></div>
      ) : (
        <div>
          {products.map(({ id, name, price }) => (
            <div key={id}>
              {name} - {price} rub
            </div>
          ))}
        </div>
      )}
    </>
  );
};
