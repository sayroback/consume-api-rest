import { useEffect, useState } from "react";

export const GetGatos = () => {
  const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2";
  const [gatosRandom, setGatosRandom] = useState([]);

  async function getGatosRandom() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    setGatosRandom(data);
  }
  useEffect(() => {
    getGatosRandom();
  }, []);

  return { gatosRandom, getGatosRandom };
};
