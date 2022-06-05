import React, { createContext } from "react";
import { FavGatos } from "./func/FavGatos";
import { GetGatos } from "./func/GetGatos";
const GatosContext = createContext();

const GatoProvider = (props) => {
  const { gatosRandom, getGatosRandom } = GetGatos();
  const { gatosFavourites, saveFavGatos, deleteFavGatos } = FavGatos();
  return (
    <GatosContext.Provider
      value={{
        gatosRandom,
        getGatosRandom,
        gatosFavourites,
        saveFavGatos,
        deleteFavGatos,
      }}
    >
      {props.children}
    </GatosContext.Provider>
  );
};

export { GatosContext, GatoProvider };
