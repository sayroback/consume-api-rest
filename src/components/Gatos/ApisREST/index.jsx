import React from "react";
import GatosRandom from "./GatosRandom";
import { GatoProvider } from "./GatosContext";

const index = () => {
  return (
    <GatoProvider>
      <GatosRandom />
    </GatoProvider>
  );
};

export default index;
