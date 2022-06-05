import React from "react";
import { GatoProvider } from "../components/Gatos/Api/GatosContext";
import { UIGatosFav } from "../components/Gatos/UIGatosFav";
import UIGatosRandom from "../components/Gatos/UIGatosRandom";
import "../components/Gatos/style/UIGatos.css";

const Cats = () => {
  return (
    <>
      <GatoProvider>
        <UIGatosRandom />
        <UIGatosFav />
      </GatoProvider>
    </>
  );
};

export default Cats;
