import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const productsDBRef = ref(db, "products");
    return onValue(productsDBRef, (snapshot) => {
      const loadedProducts = snapshot.val() || [];
      console.log(loadedProducts);
      setProducts(loadedProducts);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, products };
};
