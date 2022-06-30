import * as actionTypes from "../carttypes";
import axios from "axios";


const getLocalStorage = () => {
  const cartList =  [];
 
  JSON.parse(localStorage?.getItem("cart")).forEach(element => {
    
    axios.get(`https://kiqa-be.herokuapp.com/products/${element.id}`, {withCredentials: true})
    .then((data) => cartList.push({item: data.data, qty:element.qty, color: element.color}));
  });

  return cartList;
}

const INITIAL_STATE = {
  cart: JSON.parse(localStorage?.getItem("cart")) !== null ? getLocalStorage(): [], //{id,title, descr, price, img, qty}
};


const cartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        
        const inCart = state.cart.find((item) => (item.item.id === action.payload.item.id 
        && item.color.hexValue === action.payload.color.hexValue)
        ? true : false);

          
      return {
        ...state,
        cart: inCart ? state.cart.map((item) => item.item.id === action.payload.item.id && item.color.hexValue === action.payload.color.hexValue
                ? { ...item, qty: item.qty + action.payload.qty, color: action.payload.color }
                : item
            ) 
            : 
            [...state.cart , {item: action.payload.item, qty: action.payload.qty, color: action.payload.color}]
      };


    case actionTypes.REMOVE_FROM_CART:
        
      return {
          ...state,
          cart:  state.cart.filter(item => {
            if(item.item.id !== action.payload.item.id && item.color.hexValue !== action.payload.color.hexValue){
              return true;
            }else{
              return false;  
            }}
          )}


          
    case actionTypes.REMOVE_QTY:

      return {
          ...state,
          cart: state.cart.map(item => {
        
            if(item.item.id === action.payload.item.id && item.color.hexValue === action.payload.color.hexValue){
             return  {...item, qty : item.qty - 1} 
            }else{
             return item
            }
          })
    
    };
      

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
