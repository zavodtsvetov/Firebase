import { useState } from "react";
import { db } from "../firebase";
import { ref, remove } from "firebase/database";

export const useDeleteTV = (refreshProducts) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteSamsungTV = () => {
    setIsDeleting(true);
    const deleteTV = ref(db, "products/001");
    remove(deleteTV)
      .then((resp) => {
        console.log("Удален товар -  ", resp);
        refreshProducts();
      })
      .finally(() => setIsDeleting(false));
  };

  return { deleteSamsungTV, isDeleting };
};
