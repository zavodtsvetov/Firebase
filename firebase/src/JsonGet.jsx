import { useState, useEffect } from "react";
import s from "./App.module.css";

export const JsonGet = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const refreshProducts = () => {
    setRefreshProductsFlag(!refreshProductsFlag);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/products")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, [refreshProductsFlag]);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);
    fetch("http://localhost:3005/products", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        name: "Новый пылесос",
        price: 4690,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Пылесос добавлен. Ответ сервера: ", response);
        refreshProducts();
      })
      .finally(() => setIsCreating(false));
  };
  const requestAddFridge = () => {
    setIsCreating(true);
    fetch("http://localhost:3005/products", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        name: "Холодильник Haier",
        price: 70000,
      }),
    })
      .then((rawResponseFridge) => rawResponseFridge.json())
      .then((resp) => {
        console.log("Холод добавлен " + resp);
        refreshProducts();
      })
      .finally(() => setIsCreating(false));
  };
  return (
    <>
      <h1>4 + 5 GET + POST </h1>
      {isLoading ? (
        <div className={s.loader}></div>
      ) : (
        <div>
          {products.map(({ id, name, price }) => (
            <div key={id}>
              {name} - {price} rub
            </div>
          ))}
          <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
            Добавить пылесос
          </button>
          <button disabled={isCreating} onClick={requestAddFridge}>
            Добавить холодильник{" "}
          </button>
        </div>
      )}
    </>
  );
};
