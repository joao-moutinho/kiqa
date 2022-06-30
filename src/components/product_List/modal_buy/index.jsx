import { useEffect, useState } from "react";
import { PrimaryButton } from "../../share_components/primary-button";
import { Quantaty } from "../../share_components/primary-button/quantaty";
import "./modal-buy.scss";

export const ModalBuy = ({ product, handleShowModal }) => {
  const [optionColor, setOptionColor] = useState("No Color");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product.colors[0] !== undefined) {
      setOptionColor(product.colors[0]);
    }
  }, []);

 
  

  return (
    <div
      onClick={(e) => handleShowModal(e)}
      data-testid="modal-buy"
      className="modal-buy"
    >
      <div className="modal-buy-box">
        <div className="modal-buy-box-image">
          <img src={product.image} width="95%" alt="product_photo" />
        </div>

        <div className="modal-buy-box-rigth">
          <div className="modal-buy-box-rigth-info">
            <div className="modal-buy-box-rigth-info-name">{product.name}</div>
            <div className="modal-buy-box-rigth-info-price">
              {product.price} €
            </div>
          </div>

          <div className="modal-buy-box-rigth-dropdownColors">
            {product?.colors.length === 0 &&  
              <div
                style={{
                  border: "white" === optionColor ? " 2px solid black" : "none",
                  backgroundColor: "black",
                }}
                className="modal-buy-box-rigth-dropdownColors-color"
              ></div>
            }

            {product?.colors.length > 0 &&
              product.colors.map((color, index) => {
                
                if (index > 3) return true;
                return (
                  <div 
                    data-testid="color"
                    style={{
                      border:
                        color === optionColor ? " 2px solid black" : "none",
                      backgroundColor: `${color.hexValue}`,
                    }}
                    onClick={() => setOptionColor(color)}
                    className="modal-buy-box-rigth-dropdownColors-color"
                  ></div>
                );
              })}
          </div>
          <div className="modal-buy-box-rigth-buy">
            <div className="modal-buy-box-rigth-buy-quantity">
              <Quantaty setQty={setQty} />
              <PrimaryButton qty={qty} color={optionColor} product={product} buy={true} text="Add to Cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
