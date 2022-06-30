import { useState } from "react";
import { ColorPalette } from "../color-palette";
import "./product_info.scss";
import { PrimaryButton } from "../../share_components/primary-button";
import { Quantaty } from "../../share_components/primary-button/quantaty";

export const ProductInfo = ({ product }) => {
  const shouldDisplayDescription = product && product.description.length <= 0;
  const shouldDisplayAvailableColors = product && product.colors.length <= 0;
  const [qty, setQty] = useState(1);
  const [optionColor, setOptionColor] = useState("No Color");

  return (
    <div className="productInfo">
      <h2>{product.name}</h2>
      <h2>{product.price} €</h2>
      {!shouldDisplayDescription && (
        <div className="product-description">{product.description}</div>
      )}
      {shouldDisplayDescription && <></>}
      <div className="under-description">
        <div className="product-buy-section">
          <Quantaty setQty={setQty} />
          <PrimaryButton
            qty={qty}
            color={optionColor}
            product={product}
            buy={true}
            text="Add Cart"
          />
        </div>
        {!shouldDisplayAvailableColors && (
          <div className="product-palette">
              <ColorPalette selectedColor={setOptionColor} product={product}/>
          </div>
        )}
        {shouldDisplayAvailableColors && <></>}
      </div>
    </div>
  );
};
