import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions";
import "./primary-button.scss";

export const PrimaryButton = ({product ,buy ,color,handleShowModal, text ,qty, onClick}) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([""]));
  },[])

  useEffect(() => {
    const ids = [];
  
    setTimeout(() => {
      products.forEach(element => {
        ids.push({id: element.item.id, qty: element.qty, color: element.color})
      });
      localStorage.setItem("cart", JSON.stringify(ids));
    },100)

  },[products])


  const setStorage = () => {
    const ids = [];
  
    setTimeout(() => {
      products.forEach(element => {
        ids.push({id: element.item.id, qty: element.qty, color: element.color})
      });
      localStorage.setItem("cart", JSON.stringify(ids));
    },400)
    
  }
  
    return(
        <div onClick={onClick} className="primary-button">
          { handleShowModal && <button onClick={() =>{ handleShowModal("open"); }}>{text}</button>  }
          { buy && <button onClick={() => {dispatch(addToCart(product, qty, color)); }}>{text}</button>}
          {!buy  && !handleShowModal ? <button >{text}</button> : `` }
        </div>
    );
};
