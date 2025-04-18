import { useState } from "react";
import s from "./App.module.css";
import {
  useGetProducts,
  useDeleteTV,
  useRequestUpdateAirpods,
  useAddVacuumCleaner,
} from "./hooks";

export const Firebase = () => {
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const refreshProducts = () => {
    setRefreshProductsFlag(!refreshProductsFlag);
  };

  const { isLoading, products } = useGetProducts();

  const { requestAddVacuumCleaner, isCreating } = useAddVacuumCleaner();

  const { requestUpdateAirPods, isUpdating } = useRequestUpdateAirpods();

  const { deleteSamsungTV, isDeleting } = useDeleteTV();
  return (
    <>
      <h1> FIREBASE </h1>
      {isLoading ? (
        <div className={s.loader}></div>
      ) : (
        <div>
          {Object.entries(products).map(([id, { name, price }]) => (
            <div key={id}>
              {name} - {price} rub
            </div>
          ))}
          <br />
          <button
            style={{ background: "salmon", border: "none" }}
            disabled={isCreating}
            onClick={requestAddVacuumCleaner}
          >
            Добавить увлажнитель
          </button>

          <div>
            <br />
            <button
              disabled={isUpdating}
              onClick={requestUpdateAirPods}
              style={{ background: "skyBlue", border: "none" }}
            >
              Обновить эирподсы
            </button>
          </div>
          <div>
            <br />
            <button
              disabled={isDeleting}
              onClick={deleteSamsungTV}
              style={{ background: "tomato", border: "none" }}
            >
              Удалить телек
            </button>
          </div>
          <br />
          <button
            style={{ background: "deepPink", border: "none" }}
            onClick={() => refreshProducts()}
          >
            Обновить
          </button>
        </div>
      )}
    </>
  );
};
