import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./prodgrid.scss";

export const ProdGrid = () => {
  const { data, isLoading, isSuccess} = useQuery("latestProds", () =>
    axios
      .get("https://kiqa-be.herokuapp.com/products?page=6&size=6")
      .then((res) => res.data)
  );

  if (isLoading || !isSuccess ) {
    return (
      <div className="brand-grid-skeleton">
        <img
          src="https://media1.giphy.com/media/jAYUbVXgESSti/giphy.gif?cid=ecf05e47hh8962ixwwacr1j4cn7gghm51wosuycvo71uyv4i&rid=giphy.gif&ct=g"
          alt="loading"
        ></img>
      </div>
    );
  }

  return (
    <div className="grid-wrapper">
      <div className="newprodsgrid-wrapper">
        {data.paginatedItems.map((element) => {
          return (
            <div className="grid-element-wrapper" >
              <Link className="featured-prods" to={`product/${element.id}`}>
                <img
                  className="newprods-img"
                  src={`${element.image}`}
                  alt={`Product name ${element.name}`}
                ></img>

                <div className="newprod-info">
                  <p className="title-info">New</p>
                  <p className="prod-name">
                    <b>{element.categoryName.toUpperCase()}</b>
                  </p>
                  <p className="prod-description">{element.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
