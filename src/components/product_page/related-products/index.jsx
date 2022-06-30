import "./related-products.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsCarousel } from "./products-carousel";

export const RelatedProducts = ({ type }) => {

  const [products, setProducts] = useState({
    first: [],
    second: [],
    third: [],
  });

  const { data, isLoading } = useQuery(
    "products",
    async () =>
      await axios
        .get(
          `https://kiqa-be.herokuapp.com/products/related?categoryName=${type}`
        )
        .then((res) => {
            setProducts({
            first: res.data.slice(0, 3),
            second: res.data.slice(3, 6),
            third: res.data.slice(6, 9),
          });
        })
  ,
  {retry: 1});

  // if (!isLoading) {
  //   setProducts({
  //     first: data.slice(0, 3),
  //     second: data.slice(3, 6),
  //     third: data.slice(6, 9),
  //   });
  // }

  if (isLoading) {
    return (
      <div className="products-grid-skeleton">
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
      showIndicators={true}
    >
      <ProductsCarousel relatedProducts={products.first} />
      <ProductsCarousel relatedProducts={products.second} />
      <ProductsCarousel relatedProducts={products.third} />
    </Carousel>
  );
};
