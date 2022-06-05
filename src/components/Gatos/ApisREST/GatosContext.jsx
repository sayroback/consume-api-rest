import React, { createContext } from "react";
import useGetGatos from "./hooks/useGetGatos";
const GatosContext = createContext();

const GatoProvider = (props) => {
  const { gatosRandom, reload } = useGetGatos();
  return (
    <GatosContext.Provider value={{ gatosRandom, reload }}>
      {props.children}
    </GatosContext.Provider>
  );
};

export { GatosContext, GatoProvider };
