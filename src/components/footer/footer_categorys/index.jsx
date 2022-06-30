import React from "react";
import { Link } from "react-router-dom";
import "./footer_categorys.scss";

export const FooterCategories = () => {
  const links = [
    { name: "Lips", path: "/products/lips" },
    { name: "Eyes", path: "/products/eyes" },
    { name: "Face", path: "/products/face" },
    { name: "Nails", path: "/products/nails" },
  ];

  return (
    <div className="footer-categories">
      <h3>Categories</h3>
      <div className="footer-categories-links">
        {links.map((element) => {
          return (
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="links-footer" to={element.path} key={element.name}>
              {element.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
