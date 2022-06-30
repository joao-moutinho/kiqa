import React from "react";
import "./about_hero_img.scss";
import aboutheroimage from "../../../assets/about-hero-img.jpg"
import contactheroimage from "../../../assets/contact-hero-img.jpg"

export const AboutHeroImg = () => {
  return (
    <div className="hero-img-wrapper">
      <div className="hero-img-about" style={{backgroundImage: `url(${aboutheroimage})`}}></div>
      <div className="hero-img-contact" style={{backgroundImage: `url(${contactheroimage})`}} ></div>
    </div>
  );
};
