import "./brands_grid.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { CarouselSlider } from "./carouselslider";

export const BrandsGrid = () => {
  const { data, isLoading, isSuccess } = useQuery(
    "brands",
    async () =>
      await axios
        .get(
          "https://kiqa-be.herokuapp.com/brands?page=3&size=9&hasProducts=true"
        )
        .then((res) => res.data)
  );

  const [myBrand, setMyBrands] = useState({
    first: [],
    second: [],
    third: [],
  });


  useEffect(() => {
    if(!isLoading){
    setMyBrands({
      first: data.paginatedItems.slice(0, 3),
      second: data.paginatedItems.slice(3, 6),
      third: data.paginatedItems.slice(6, 9),
    })};
  }, [data]);

  if (isLoading || !isSuccess) {
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
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <CarouselSlider brandsData={myBrand.first} />
      <CarouselSlider brandsData={myBrand.second} />
      <CarouselSlider brandsData={myBrand.third} />
    </Carousel>
  );
};
