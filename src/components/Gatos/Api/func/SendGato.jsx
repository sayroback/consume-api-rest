import { FavGatos } from "./FavGatos";

export const SendGato = () => {
  const { saveFavGatos } = FavGatos();
  const API_URL_UPLOAD = "https://api.thecatapi.com/v1/images/upload";

  const enviarGato = async (event) => {
    const dataForm = new FormData(event.target);
    console.log(dataForm.get("file"));

    const res = await fetch(API_URL_UPLOAD, {
      method: "POST",
      headers: {
        "x-api-key": process.env.REACT_APP_X_API_KEY,
        // "Content-Type": "multipart/form-data",
      },
      body: dataForm,
    });
    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log(
        `Hubo un error al subir michi: ${res.status} ${data.message}`
      );
    } else {
      console.log("Foto de michi cargada :)");
      console.log({ data });
      console.log(data.url);
      saveFavGatos(data.id);
    }
  };
  return { enviarGato };
};
