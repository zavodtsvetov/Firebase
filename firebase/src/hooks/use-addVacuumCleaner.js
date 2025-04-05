import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

export const useAddVacuumCleaner = () => {
  const [isCreating, setIsCreating] = useState(false);

  const requestAddVacuumCleaner = () => {
    const productsDBRef = ref(db, "products");
    push(productsDBRef, {
      name: "Увлажнитель",
      price: 15000,
    })
      .then((response) => {
        console.log("Пылесос добавлен. Ответ сервера: ", response);
      })
      .finally(() => setIsCreating(false));
  };

  return {
    requestAddVacuumCleaner,
    isCreating,
  };
};
