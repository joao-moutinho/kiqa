import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderLogo } from "../../components/header/headerlogo";
import "./auth.scss";
import { AuthHeroImg } from "../../components/auth_components/hero_image_auth";

export const Auth = () => {
  return (
    <>
      {" "}
      <div className="logo-auth">
        <HeaderLogo></HeaderLogo>
      </div>
      <div className="auth-main">
        <AuthHeroImg />
        <div className="outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
