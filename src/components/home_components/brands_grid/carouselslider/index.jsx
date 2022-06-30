import React from "react";

export const CarouselSlider = ({ brandsData }) => {
  return (
    <div className="brands-grid-wrapper">
      {brandsData.map((element) => {
        return (
          <img key={element.name}
            className="brand-img"
            src={`${element.imageLink}`}
            alt={`${element.name}`}
          ></img>
        );
      })}
    </div>
  );
};
