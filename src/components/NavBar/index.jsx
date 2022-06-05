import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/cats"
          >
            Gatos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/rickandmorty"
          >
            Rick and Morty
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
