import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import RandM from "./pages/RandM";
import Personaje from "./components/RickAndMorty/Personaje";
import Cats from "./pages/Cats";
import CatsSend from "./pages/CatsSend";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cats/enviar" element={<CatsSend />} />
        <Route path="/rickandmorty" element={<RandM />} />
        <Route path="/rickandmorty/personaje/:id" element={<Personaje />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
