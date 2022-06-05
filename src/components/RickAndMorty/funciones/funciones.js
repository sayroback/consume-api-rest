import axios from "axios";

const todosPersonajes = async () => {
  const peticion = await axios.get("https://rickandmortyapi.com/api/character");
  console.log(peticion);
};

export { todosPersonajes };
