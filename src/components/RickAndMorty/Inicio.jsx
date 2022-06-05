import React, { useEffect } from "react";
import { todosPersonajes } from "./funciones/funciones";

const Inicio = () => {
  useEffect(() => {
    todosPersonajes();
  }, []);
  return (
    <div>
      <h1>Hola Rick</h1>
    </div>
  );
};

export default Inicio;
