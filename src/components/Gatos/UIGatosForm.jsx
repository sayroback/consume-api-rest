import React, { useContext } from "react";
import { GatosContext } from "./Api/GatosContext";

export const UIGatosForm = () => {
  const { enviarGato } = useContext(GatosContext);

  const submit = (event) => {
    event.preventDefault();
    enviarGato(event);
  };

  return (
    <div>
      <h1>UIGatosForm</h1>
      <form onSubmit={submit}>
        <input id="file" type="file" name="file" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
