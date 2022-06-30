import { useEffect, useLayoutEffect, useState } from "react";
import "./product_list_loading.scss";

export const ProductListLoading = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="product-list-loading">
      {list.length > 0 &&
        list.map(() => {
          return <div className="product-list-loading-box"></div>;
        })}
    </div>
  );
};
