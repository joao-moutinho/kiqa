import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headerlinks.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBar } from "../sidebar";
import { InView } from "react-intersection-observer";

export const HeaderLinks = () => {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  const sideBarSwitchVisibility = () => {
    const visibility = sideBarVisibility;
    setSideBarVisibility(!visibility);
  };

  const links = [
    { name: "Lips", path: "/products/lips" },
    { name: "Eyes", path: "/products/eyes" },
    { name: "Face", path: "/products/face" },
    { name: "Nails", path: "/products/nails" },
  ];

  useEffect(() => {
    sideBarVisibility
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [sideBarVisibility]);

  return (
    <>
      <div className="links-wrapper">
        {links.map((element) => {
          return (
            <Link
              className="links-header"
              to={element.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {element.name}
            </Link>
          );
        })}
      </div>
      <div className="hamburger-links">
        <GiHamburgerMenu onClick={sideBarSwitchVisibility}></GiHamburgerMenu>
         <SideBar
          className={sideBarVisibility ? "side-bar side-bar-show" : "side-bar"}
          closeSideBar={setSideBarVisibility}
        ></SideBar>
      </div>
    </>
  );
};
