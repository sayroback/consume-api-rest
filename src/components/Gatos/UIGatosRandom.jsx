import React, { useContext } from "react";
import { GatosContext } from "./Api/GatosContext";

const UIGatosRandom = () => {
  const { gatosRandom, getGatosRandom, saveFavGatos } =
    useContext(GatosContext);

  return (
    <section>
      <h1>Gatos Random</h1>
      <button onClick={() => getGatosRandom()}>Mas gatos</button>
      <div>
        {gatosRandom.map((gatoRandom, key) => {
          return (
            <div key={gatoRandom.id}>
              <img className="imageGato" src={gatoRandom.url} alt="Gatito" />
              <button onClick={() => saveFavGatos(gatoRandom.id)}>
                Guardar gato
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UIGatosRandom;
