import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './summary_list.scss';
import {CheckoutButton} from '../checkout_button';
import {GrClose} from 'react-icons/gr';


export const SummaryList = ({setShowModalCheckout, setShowSummaryList}) => {

    const products = useSelector((state) => state.cart.cart);
    const [totalprice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        
        products.forEach(element => {
            total = total + (element.qty * element.item.price);
        });
        setTotalPrice(total);
    },[])

   

    return(
        <>
            <div className='summarylist-box'>
                <div className='summarylist-box-top'>
                <GrClose className='summarylist-box-top-icon' onClick={() => setShowModalCheckout(false)}/>
                    <p className='summarylist-box-top-title'>Item Summary</p>
                    <div className='summarylist-box-top-tableheader'>
                        <div><span>Item</span></div>
                        <div><span>Price</span></div>
                        <div><span>Qty</span></div>
                        <div><span>Total</span></div>
                    </div>
                    <hr className='summarylist-box-top-hr'/>
                </div>
                <div className='summarylist-box-center'>
                    {products.map((element) => {
                        return(
                            <>
                                <div className='summarylist-box-center-img'>
                                    <div className="summarylist-box-center-img-left">
                                        <img src={element.item.image} width="150px"/>
                                    </div>
                                    <div className='summarylist-box-center-img-right'>
                                    <p>{element.item.name}</p>
                                    <div className='summarylist-box-center-img-right-color' style={{backgroundColor: `${element.color.hexValue}`}}></div>
                                    </div>
                                </div>
                                <div className='summarylist-box-center-price'><span>{element.item.price} €</span></div>
                                <div className='summarylist-box-center-qty'><span>{element.qty}</span></div>
                                <div className='summarylist-box-center-total'><span>{element.item.price * element.qty} €</span></div>
                            </>
                        )
                    })}
                </div>
                <div className='summarylist-box-bottom'>
                    <div className='summarylist-box-bottom-title'> Order Summary</div>
                    <div className='summarylist-box-bottom-total'>
                        <div className='summarylist-box-bottom-total-left'>Total</div>
                        <div className='summarylist-box-bottom-total-right'>{totalprice} €</div>
                    </div>
                    <div className='summarylist-box-bottom-checkout'>
                        <CheckoutButton setShowSummaryList={setShowSummaryList} text="Checkout Order"/>
                    </div>
                </div>
            </div>
        </>
    )
}