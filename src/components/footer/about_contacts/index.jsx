import React from "react";
import { Link } from "react-router-dom";
import "./about_contacts_footer.scss";

export const AboutContactFooter = () => {
  return (
    <div className="about-contact-footer">
      <h3>Information</h3>
      <Link to="/about" className="links-footer">About</Link>
      <div className="contact-footer">
        <h4>Adress </h4>
        <p>Morada R. Pedro e Inês, Nº11 Parque das Nações 1990-074 - Lisboa </p>
      </div>
    </div>
  );
};
