import { useState, useEffect } from "react";

export const useGetProducts = (refreshProductsFlag) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/products")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, [refreshProductsFlag]);

  return { isLoading, products };
};
