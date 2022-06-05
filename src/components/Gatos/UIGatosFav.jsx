import React, { useContext } from "react";
import { GatosContext } from "./Api/GatosContext";

export const UIGatosFav = () => {
  const { gatosFavourites, deleteFavGatos } = useContext(GatosContext);

  return (
    <div>
      <h1>Gatos Favoritos</h1>
      <div>
        {[...gatosFavourites].reverse().map((gatoFavourite, key) => {
          return (
            <div key={gatoFavourite.id}>
              <img
                className="imageGato"
                src={gatoFavourite.image.url}
                alt="Gatito"
              />
              <button onClick={() => deleteFavGatos(gatoFavourite.id)}>
                Eliminar gato
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
