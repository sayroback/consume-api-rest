import React from "react";
import { GatoProvider } from "../components/Gatos/Api/GatosContext";
import { UIGatosForm } from "../components/Gatos/UIGatosForm";

const CatsSend = () => {
  return (
    <GatoProvider>
      <UIGatosForm />
    </GatoProvider>
  );
};

export default CatsSend;
