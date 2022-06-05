import React, { createContext } from "react";
import { FavGatos } from "./func/FavGatos";
import { GetGatos } from "./func/GetGatos";
import { SendGato } from "./func/SendGato";
const GatosContext = createContext();

const GatoProvider = (props) => {
  const { gatosRandom, getGatosRandom } = GetGatos();
  const { gatosFavourites, saveFavGatos, deleteFavGatos } = FavGatos();
  const { enviarGato } = SendGato();
  return (
    <GatosContext.Provider
      value={{
        gatosRandom,
        getGatosRandom,
        gatosFavourites,
        saveFavGatos,
        deleteFavGatos,
        enviarGato,
      }}
    >
      {props.children}
    </GatosContext.Provider>
  );
};

export { GatosContext, GatoProvider };
