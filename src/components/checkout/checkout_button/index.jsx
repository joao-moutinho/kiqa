import './checkout_button.scss';

export const CheckoutButton = ({text, setShowSummaryList , setShowCartSidebar, setShowModalCheckout}) => {

    return(
        <div className='checkoutbutton'>
          { setShowCartSidebar && <button onClick={() => {setShowCartSidebar(false); setShowModalCheckout(true)}} className='checkoutbutton-button'>{text}</button> }
          {setShowSummaryList && <button onClick={() => setShowSummaryList(false)} className='checkoutbutton-button'>{text}</button>}
          {!setShowCartSidebar && !setShowSummaryList ?  <button className='checkoutbutton-button'>{text}</button> : ""}
        </div>
    )
}