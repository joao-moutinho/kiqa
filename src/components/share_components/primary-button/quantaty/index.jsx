import { useEffect, useState } from "react";
import "./quantaty.scss";

export const Quantaty = ({setQty}) => {
  const [quantity, setQuantaty] = useState(1);
  const [blockSub, setBlockSub] = useState(false);




  const handleQuantaty = (action) => {
    if (action === "+"){
      setQuantaty(quantity + 1);
      setBlockSub(false);
    } 
    if(quantity === 0){
      setBlockSub(true);
    }
    if(quantity !== 0 && action === "-"){
      setBlockSub(false);
      setQuantaty(quantity-1);
    } 
  };



  return (
    <div className="quantity">
      <button
        disabled={blockSub}
        onClick={() => handleQuantaty("-") & setQty(quantity - 1)}
        className="quantity-button"
      >
        {" "}
        -{" "}
      </button>
      <div className="quantity-output">{quantity}</div>
      <button onClick={() => handleQuantaty("+") & setQty(quantity +1 ) } className="quantity-button">
        {" "}
        +{" "}
      </button>
    </div>
  );
};
