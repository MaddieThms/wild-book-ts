import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={style.navbar}>
      <h1>Wilders Book</h1>
      <ul className={style.list}>
        <NavLink className={style.link} to="/">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink className={style.link} to="/register">
          {" "}
          Register{" "}
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
