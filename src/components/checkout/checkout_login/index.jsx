import { useEffect } from 'react';
import './checkout_login.scss';
import axios from 'axios';
import { useQuery } from 'react-query';

export const CheckoutLogin = ({user})=> {

    const { data, isLoading } = useQuery(
        "user",
        async () =>
          await axios
            .get(`https://kiqa-be.herokuapp.com/users/${user.id}`)
            .then((res) => res.data)
      ,{
          retry: 1,
      });

    console.log("user",data);

    return (
        <div className='checkoutlogin'>
            <div className="checkoutlogin-top">
                <p className="checkoutlogin-top-title">Checkout</p>
                <hr/>
            </div>

            <div className='checkoutlogin-center' >
                <div className='checkoutlogin-center-left'>
                  <p className="checkoutnologin-center-left-title">Billing Details</p>
                  <div className='checkoutnologin-center-left'>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone Number: {data.phoneNumber}</p>
                    <p>Vat: {data.vat}</p>
                  </div>
                </div>
                <hr/>
                <div className='checkoutlogin-center-right'>
                  
                </div>
            </div>
        </div>
    )
} 