import { useState } from "react";
import { db } from "../firebase";
import { ref, set } from "firebase/database"; // либо update, обновляет часть данных
export const useRequestUpdateAirpods = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const requestUpdateAirPods = () => {
    setIsUpdating(true);
    const airpodsDBRef = ref(db, "products/003");
    set(airpodsDBRef, {
      name: "Apple AirPods v6 ПРОШИВКА",
      price: 40000,
    })
      .then((resp) => {
        console.log("Наушники обновлены ", resp);
      })
      .finally(() => setIsUpdating(false));
  };

  return { requestUpdateAirPods, isUpdating };
};
