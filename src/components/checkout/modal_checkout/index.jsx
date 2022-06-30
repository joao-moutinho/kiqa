import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CheckoutLogin } from '../checkout_login';
import { CheckoutNoLogin } from '../checkout_nologin';
import { SummaryList } from '../summary_list';
import './modal_checkout.scss';


export const ModalCheckout = ({setShowModalCheckout}) => {

    const user = useSelector((state) => state.loggedUser);
    const [showSummaryList, setShowSummaryList] = useState(true);
    const [isLogged, setIsLogged] = useState();
    const products = useSelector((state) => state.cart.cart);
    const [totalprice, setTotalPrice] = useState(0);
    
  
    useEffect(() => {
        if(user.user === ""){
            setIsLogged(false); 
        }else{
            setIsLogged(true);
        }  
    }, [showSummaryList])


    useEffect(() => {
        let total = 0;
        products.forEach(element => {
            total = total + (element.qty * element.item.price);
        });
        setTotalPrice(total);
    },[])



    const handlePage = (e) => {
       
        if(e.target.className === "modalcheckout"){
            setShowModalCheckout(false);
        }
    } 

    return(
        <div onClick={(e) => handlePage(e)} className='modalcheckout'>
            { showSummaryList &&  <SummaryList setShowSummaryList={setShowSummaryList} setShowModalCheckout={setShowModalCheckout}/>}
            { !showSummaryList && isLogged ? <CheckoutLogin user={user.user} totalprice={totalprice}/> : ``}
            { !showSummaryList && !isLogged ? <CheckoutNoLogin totalprice={totalprice}/> : ``}
        </div>
    )
}