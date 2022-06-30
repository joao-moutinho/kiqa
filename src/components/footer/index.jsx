import React from "react";
import { FooterCategories } from "./footer_categorys";
import "./footer.scss"
import { AboutContactFooter } from "./about_contacts";
import { SocialMediaFooter } from "./social_media";

export const Footer = () => {
  
  return (
    <div className="footer-main">
      <div className="footer-wrapper">
      <FooterCategories></FooterCategories>
      <AboutContactFooter></AboutContactFooter>
      <SocialMediaFooter></SocialMediaFooter>
      </div>
    </div>
  );
};
