import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../share_components/primary-button";
import { ModalBuy } from "../modal_buy";
import "./product.scss";

export const Product = ({ product }) => {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    setImage(product.image);
  }, []);

  const handleShowModal = (option) =>{
   
    if(option.target?.className === "modal-buy"){
      setShowModal(false);  
      document.body.style.overflow = "scroll";
    }

    if(option === "open"){
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <div className="product">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="product-image"
      >
        <img
          src={image}
          width="150px"
          height="150px"
          onError={() =>
            setImage(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfRNfL4WGOJmFo2FgJIBDke_lS8eYnl4mDh0q9QmlHqeImRjIU7Xi8PBoPvUI1vWRjRw&usqp=CAU"
            )
          }
        />
      </div>
      <div className="product-name">{product?.name}</div>
      <div className="product-price">{product?.price} €</div>
      <div  className="buy-button">
        <PrimaryButton  text={"Add to Cart"} handleShowModal={handleShowModal} />
      </div>
      {showModal && <ModalBuy data-testid="modalbuy" handleShowModal={handleShowModal} product={product}/>}
    </div>
  );
};
