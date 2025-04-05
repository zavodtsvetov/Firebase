import { useState } from "react";
export const useRequestUpdateAirpods = (refreshProducts) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const requestUpdateAirPods = () => {
    setIsUpdating(true);
    fetch("http://localhost:3005/products/003", {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        name: "Apple AirPods v6 (теперь с прошивкой)",
        price: 40000,
      }),
    })
      .then((rawResponseFridge) => rawResponseFridge.json())
      .then((resp) => {
        console.log("Наушники обновлены ", resp);
        refreshProducts();
      })
      .finally(() => setIsUpdating(false));
  };

  return { requestUpdateAirPods, isUpdating };
};
