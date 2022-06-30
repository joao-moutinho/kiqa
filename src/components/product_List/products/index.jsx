import "./products.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Product } from "../product";
import { ProductListLoading } from "../product_list_loading";

export const Products = ({products, isLoading, isError}) => {
  

  return (
    <div className="products">
      { isLoading &&  <ProductListLoading/> }

      { !isError  ? (products.map((product) => {
          return (
             <Product key={product.id} product={product}/>
          )
        })) : 
         <div className="products-empty">
            <img src="https://luxeaccessoria.com/shop/assets/img/no-product-found.png" width="100%"/>
         </div>
      }
      
    </div>
  );
};
