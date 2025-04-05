import { useState } from "react";
import s from "./App.module.css";
import {
  useGetProducts,
  useDeleteTV,
  useRequestUpdateAirpods,
  useAddVacuumCleaner,
} from "./hooks";

export const PutPatchDelete = () => {
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const refreshProducts = () => {
    setRefreshProductsFlag(!refreshProductsFlag);
  };

  const { isLoading, products } = useGetProducts(refreshProductsFlag);

  const { requestAddVacuumCleaner, isCreating } =
    useAddVacuumCleaner(refreshProducts);

  const { requestUpdateAirPods, isUpdating } =
    useRequestUpdateAirpods(refreshProducts);

  const { deleteSamsungTV, isDeleting } = useDeleteTV(refreshProducts);
  return (
    <>
      <h1>6 Put Patch Delete </h1>
      {isLoading ? (
        <div className={s.loader}></div>
      ) : (
        <div>
          {products.map(({ id, name, price }) => (
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
            Добавить пылесос
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
