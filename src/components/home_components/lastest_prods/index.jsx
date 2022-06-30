import React from "react";
import "./latestprods.scss";
import { ProdGrid } from "./prodgrid";

export const LastestProds = () => {
  return (
    <div className="latest-prods-wrapper">
      <div className="latest-prods-title">
      <h2><i>Latest Drops</i></h2>
      </div>
      <ProdGrid></ProdGrid>
    </div>
  );
};
