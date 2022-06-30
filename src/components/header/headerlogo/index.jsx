import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Kiqa-logo-by-joao.png";
import "./headerlogo.scss";

export const HeaderLogo = () => {
  return (
    <>
      <Link to="/">
      <img className="logo" src={image} alt="brand logo"></img>
      </Link>
    </>
  );
};
