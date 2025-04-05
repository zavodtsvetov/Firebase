import { useState } from "react";

export const useDeleteTV = (refreshProducts) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteSamsungTV = () => {
    setIsDeleting(true);
    fetch("http://localhost:3005/products/001", {
      method: "DELETE",
    })
      .then((rawResponseFridge) => rawResponseFridge.json())
      .then((resp) => {
        console.log("Удален товар -  ", resp);
        refreshProducts();
      })
      .finally(() => setIsDeleting(false));
  };

  return { deleteSamsungTV, isDeleting };
};
