import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import RandM from "./pages/RandM";
import Personaje from "./components/RickAndMorty/Personaje";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rickandmorty" element={<RandM />} />
        <Route path="/rickandmorty/personaje/:id" element={<Personaje />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;