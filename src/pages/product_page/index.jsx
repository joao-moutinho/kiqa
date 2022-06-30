import { HeroImageProduct } from "../../components/product_page/hero_image_product";
import { ProductInfo } from "../../components/product_page/product_info";
import { RelatedProducts } from "../../components/product_page/related-products";
import { useParams } from "react-router-dom";
import "./product_page.scss";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();

  const { data, isLoading } = useQuery(
    ["product", ],
    async () =>
      await axios
        .get(`https://kiqa-be.herokuapp.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        }),
        {
          retry: 1,
        }

  );

  console.log(product);

  if (isLoading) {
    return (
      <div className="products-grid-skeleton">
        <img
          src="https://media1.giphy.com/media/jAYUbVXgESSti/giphy.gif?cid=ecf05e47hh8962ixwwacr1j4cn7gghm51wosuycvo71uyv4i&rid=giphy.gif&ct=g"
          alt="loading"
        ></img>
      </div>
    );
  } else {
    return (
      <div className="product-root">
        <div className="breadCrumb">
          <Breadcrumbs color="black" arial-label="breadcrumb">
            <Link underline="hover" color="black" onClick={() => navigate(`/`)}>
              HOME
            </Link>
            <Link
              underline="hover"
              color="black"
              onClick={() => navigate(`/products`)}
            >
              PRODUCTS
            </Link>
            <Link
              underline="hover"
              color="black"
              to="/products/${product.categoryName}"
              onClick={() => navigate(`/products/${product?.categoryName}`)}
            >
              {product?.categoryName}
            </Link>
          </Breadcrumbs>
        </div>
        {product && (
          <div className="productPage">
            <div className="productPage-top">
              <div className="productPage-left">
                <HeroImageProduct
                  img={product.image}
                  className="productPage-left"
                />
              </div>
              <div className="productPage-right">
                <ProductInfo product={product} />
              </div>
            </div>
            <div className="moreProducts">MORE PRODUCTS RELATED</div>
            <RelatedProducts
            type={product.categoryName}
            // actualProduct={product.name}
          />
          </div>
        )}
      </div>
    );
  };
};
