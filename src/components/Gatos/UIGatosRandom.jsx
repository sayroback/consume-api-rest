import "./GatosRandom.css";
import React, { useEffect, useLayoutEffect, useState } from "react";

const UIGatosRandom = () => {
  const API_URL =
    "https://api.thecatapi.com/v1/images/search?limit=2&api_key=b1b67bb3-65f4-42f9-9393-082a1bb5f0d3";
  const [gatosRandom, setGatosRandom] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setGatosRandom(data);
    }
    fetchData();
    console.log(gatosRandom);
  }, []);

  return (
    <>
      <div>
        {gatosRandom.map((gatoRandom, key) => {
          return (
            <img
              key={gatoRandom.id}
              className="imageGato"
              src={gatoRandom.url}
              alt="Gatito"
            />
          );
        })}
      </div>
    </>
  );
};

export default UIGatosRandom;
