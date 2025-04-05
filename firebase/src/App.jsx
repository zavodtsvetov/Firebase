import { useState } from "react";
// import s from "./App.module.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/23851de0-4d47-40b0-9af3-b47ea82ae620")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      });
  }, []);
  return (
    <>
      <h1>1</h1>
      <div>
        {products.map(({ id, name, price }) => (
          <div key={id}>
            {name} - {price} rub
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
