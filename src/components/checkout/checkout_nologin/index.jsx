import "./checkout_nologin.scss";
import { useForm } from "react-hook-form";
import axios from 'axios';

export const CheckoutNoLogin = ({totalprice}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        axios.post(`https://kiqa-be.herokuapp.com/orders/`,{data});
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="checkoutnologin">
      <div className="checkoutnologin-top">
        <p className="checkoutnologin-top-title">Checkout</p>
        <hr/>
      </div>

      <div className="checkoutnologin-center">
                <div  className="checkoutnologin-center-left" >
                    <p className="checkoutnologin-center-left-title">Billing Details</p>
                    <label className="checkoutnologin-center-left-label">Name</label>
                    <input type="text" {...register("name", { required: true })}/>
                    <label className="checkoutnologin-center-left-label">City</label>
                    <input type="text" {...register("city", { required: true })}/>
                    <label className="checkoutnologin-center-left-label">Country</label>
                    <input type="text" {...register("country", { required: true })}/>
                    <label className="checkoutnologin-center-left-label">Street</label>
                    <input type="text" {...register("street", { required: true })}/>
                    <label className="checkoutnologin-center-left-label">Door Number</label>
                    <input type="number" {...register("doorNumber", { required: true })}/>
                    <label className="checkoutnologin-center-left-label">FloorNumber</label>
                    <input type="number" {...register("floorNumber", { required: true })}/>
                    <label className="checkoutnologin-center-left-label">Postcode / ZIP</label>
                    <input type="number" {...register("zip", { required: true })}/>
                </div>
            <hr />
        <div className="checkoutnologin-center-right">
            <p className="checkoutnologin-center-right-title">Additional information</p>
            <label className="checkoutnologin-center-right-label">Order Notes (optional)</label>
            <textarea className="checkoutnologin-center-right-textarea" />

            <div className="checkoutnologin-center-right-orderbox">
                <div className="checkoutnologin-center-right-orderbox-title">
                    <p> Order Summary</p>
                </div>
                <div className="checkoutnologin-center-right-orderbox-items">
                    <span>Items: </span>
                    <span>{totalprice} €</span>
                </div >
                <hr className="checkoutnologin-center-right-orderbox-hr"/>
                <div className="checkoutnologin-center-right-orderbox-ordertotal">
                    <span>Order total: </span>
                    <span>{totalprice} €</span>
                </div>
                <div className="checkoutnologin-center-right-orderbox-ordertotal-button">
                    <input type="submit" value="Finalize Purchase" /> 
                </div>
            </div>
        </div>
        </div>
        </div>
    </form>
  );
};
