import './cart_sidebar.scss';
import {GrClose} from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, removeQty } from '../../../redux/actions';
import { useEffect, useState } from 'react';
import { CheckoutButton } from '../../checkout/checkout_button';
import { ModalCheckout } from '../../checkout/modal_checkout';

export const CartSidebar = ({openSidebar,setShowCartSidebar}) => {

    const products = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModalCheckout, setShowModalCheckout] = useState(false);

    

    useEffect(() => {
      let price = 0; 
      setTimeout(()=> {
        products.forEach(item => {
            price += item.qty * item.item.price;
            setTotalPrice(price);
          })
      },800)
      
      const ids = [];
      setTimeout(() => {
        products.forEach(element => {
          ids.push({id: element.item.id, qty: element.qty, color: element.color})
        });
        localStorage.setItem("cart", JSON.stringify(ids));
      },100)
      
    }, [products,totalPrice, setTotalPrice]);


    return(
       <>
       <div className='cart' style={{width: openSidebar === true ? "100%" : "0"}}>
        <div className='cart-sidebar' style={{width: openSidebar === true ? "330px" : "0"}}>
            <div className='cart-sidebar-top'>
                <div className='cart-sidebar-top-closeButton'>
                    <GrClose className='cart-sidebar-top-closeButton-icon' onClick={() => setShowCartSidebar(false)}/>
                </div>
            </div>
            <div className='cart-sidebar-center'>
              {products.length !== 0 ?
                   <>
                        { products.map( (product) => {
                         return(  
                            <div className='cart-sidebar-center-product'>
                                <div className='cart-sidebar-center-product-left'>
                                    <img src={product.item.image} width="100px" height="160px" />
                                </div>
                                <div className='cart-sidebar-center-product-right'>
                                        <div className='cart-sidebar-center-product-right-name'>
                                            <p className='cart-sidebar-center-product-right-name-text'>{product.item.name}</p> 
                                            <GrClose className='cart-sidebar-center-product-right-name-icon' size={10} onClick={() => dispatch(removeFromCart(product.item, product.color))}/>
                                        </div>
                                        <div className='cart-sidebar-center-product-right-price'>
                                            {product.item.price} €
                                        </div>
                                        <div className='cart-sidebar-center-product-right-bottom'>
                                            <div style={{background: product.color === "No Color" ? "black": `${product.color.hexValue}` }} className='cart-sidebar-center-product-right-bottom-color'>
                                            </div>
                                            <div className='cart-sidebar-center-product-right-bottom-quantity'>
                                                <button className='cart-sidebar-center-product-right-bottom-quantity-button' onClick={()=> dispatch(product.qty === 1 ? removeFromCart(product.item, product.color) : removeQty(product.item, product.color)  )}> - </button>
                                                <span>{product.qty}</span>
                                                <button className='cart-sidebar-center-product-right-bottom-quantity-button' onClick={()=> dispatch(addToCart(product.item, 1, product.color))} > + </button>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        )})}
                        
                        <div className='cart-sidebar-center-total'>
                          <p className='cart-sidebar-center-total-order'>Order Summary</p>  
                          <div className='cart-sidebar-center-total-text'>
                            <span className='cart-sidebar-center-total-text-subtotal'>Total</span>
                            <span className='cart-sidebar-center-total-text-totalprice'>{Math.floor(totalPrice * 100) / 100}€</span>
                          </div>
                          <div className='cart-sidebar-center-total-checkout'>
                                <CheckoutButton setShowModalCheckout={setShowModalCheckout}  setShowCartSidebar={setShowCartSidebar} text="CHECKOUT NOW"/>
                          </div>
                            
                        </div>
                  </>
                  :
                <div className='cart-sidebar-empty-list'>
                    <img src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png" width="90%"/>
                </div>
                }
            </div>
        </div>
        </div> 
        <div className='modal'>
            {showModalCheckout &&  <ModalCheckout setShowModalCheckout={setShowModalCheckout}/>}  
        </div>
        </>
    )
}