import React from "react";
import { Link } from "react-router-dom";
import "./search_results.scss";

export const SearchResults = ({ elemental, isFetching }) => {
  if (isFetching) {
    return <></>;
  }

  return (
    <div className="dataResult">
      <Link className="dataItem" to={`/products/${elemental.id}`}>
        <img
          className="search-image"
          src={`${elemental.image}`}
        ></img>
        <p>{elemental.name}
        </p>
        <p>{elemental.price}</p>
      </Link>
    </div>
  );
};
