import React, { useEffect } from "react";
import { useState } from "react";
import { HiUser, HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartSidebar } from "../../cart/cart-sidebar";
import "./headerlogin.scss";

export const HeaderLogin = () => {
  const navigate = useNavigate();
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const myUser = useSelector((state) => state.loggedUser);

  const products = useSelector((state) => state.cart.cart);

  useEffect(() => {
   
    let items = 0;
    setTimeout(() => {
      products.forEach(item => {
        items += item.qty;
        setTotalItems(items);
      })
    },800);
  }, [products])

  
  return (
    <div className="logo-wrapper">
      {myUser.user === "" ? (
        <HiUser onClick={() => navigate("/auth")} className="icons" />
      ) : (
        <Link to={"/userpanel"}>
          <div>{myUser.user.name}</div>
        </Link>
      )}

      <HiShoppingCart
        onClick={() => setShowCartSidebar(true)}
        className="icons"
      />
      {products.length !== 0 ? (
        <div className="logo-wrapper-totalItems">{totalItems}</div>
      ) : (
        ""
      )}
      <CartSidebar
        setShowCartSidebar={setShowCartSidebar}
        openSidebar={showCartSidebar}
      />
    </div>
  );
};
