import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./header.scss";
import { HeaderLinks } from "./headerlinks";
import { HeaderLogin } from "./headerlogin";
import { HeaderLogo } from "./headerlogo";
import { SearchBar } from "./searchbar";

export const Header = ({ headerState }) => {


  return (
    <div className={headerState ? "main-header" : "main-header main-header-small"}>
      <div className="header-content">
        <HeaderLogo></HeaderLogo>
        <HeaderLinks></HeaderLinks>
        <SearchBar></SearchBar>
        <HeaderLogin></HeaderLogin>
      </div>
    </div>
  );
};
