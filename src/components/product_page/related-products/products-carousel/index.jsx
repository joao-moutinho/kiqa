import React from "react";

export const ProductsCarousel = ({ relatedProducts }) => {
  return (
    <div className="products-grid-wrapper">
      {relatedProducts.map((element) => {
        return (
          <img
            key={element.name}
            className="product-img"
            src={`${element.image}`}
            alt={`${element.name}`}
          ></img>
        );
      })}
    </div>
  );
};
