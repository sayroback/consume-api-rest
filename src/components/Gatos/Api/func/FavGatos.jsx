import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});
api.defaults.headers.common["x-api-key"] = process.env.REACT_APP_X_API_KEY;

export const FavGatos = () => {
  const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites";
  const API_URL_FAVOURITES_DELETE = (id) =>
    `https://api.thecatapi.com/v1/favourites/${id}`;
  const [gatosFavourites, setGatosFavourites] = useState([]);

  async function loadFavGatos() {
    const res = await fetch(API_URL_FAVOURITES, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_X_API_KEY,
      },
    });
    const data = await res.json();
    setGatosFavourites(data);
  }

  useEffect(() => {
    loadFavGatos();
  }, []);

  const saveFavGatos = async (id) => {
    await api.post("/favourites", {
      image_id: id,
    });

    loadFavGatos();
  };

  // async function saveFavGatos(id) {
  //   await fetch(API_URL_FAVOURITES, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.REACT_APP_X_API_KEY,
  //     },
  //     body: JSON.stringify({
  //       image_id: id,
  //     }),
  //   });
  //   loadFavGatos();
  // }

  async function deleteFavGatos(id) {
    await fetch(API_URL_FAVOURITES_DELETE(id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_X_API_KEY,
      },
    });
    loadFavGatos();
  }

  return { gatosFavourites, saveFavGatos, deleteFavGatos };
};
