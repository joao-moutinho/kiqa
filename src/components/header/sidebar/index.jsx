import React from "react";
import "./sidebar.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SideBar = ({ className, closeSideBar }) => {
  const links = [
    { name: "Lips", path: "/products/lips" },
    { name: "Eyes", path: "/products/eyes" },
    { name: "Face", path: "/products/face" },
    { name: "Nails", path: "/products/nails" },
  ];

  return (
    <div className={`${className}`}>
      <div className="close-btn">
        <AiOutlineCloseCircle
          className="close-cross"
          onClick={() => closeSideBar(false)}
        ></AiOutlineCloseCircle>
      </div>
      <div className="side-bar-links">
        {links.map((element) => {
          return <Link onClick={() => closeSideBar(false)}  className="links-bar" to={element.path}>{element.name}</Link>;
        })}
      </div>
    </div>
  );
};
