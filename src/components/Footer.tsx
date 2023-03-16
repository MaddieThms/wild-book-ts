import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>&copy; 2022 Wild Code School</p>
      </div>
    </footer>
  );
};

export default Footer;
