import React from "react";
import { GatoProvider } from "../components/Gatos/Api/GatosContext";
import { UIGatosFav } from "../components/Gatos/UIGatosFav";
import UIGatosRandom from "../components/Gatos/UIGatosRandom";
import "../components/Gatos/style/UIGatos.css";
import { Link } from "react-router-dom";

const Cats = () => {
  return (
    <>
      <GatoProvider>
        <Link to="/cats/enviar">
          <button>Enviar Gato</button>
        </Link>
        <UIGatosRandom />
        <UIGatosFav />
      </GatoProvider>
    </>
  );
};

export default Cats;
