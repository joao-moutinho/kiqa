import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import { Auth } from "../../pages/auth";
import { Login } from "../../pages/auth/login";
import { SignUp } from "../../pages/auth/signup";
import { Home } from "../../pages/home";
import { ProductList } from "../../pages/product_list";
import { ProductPage } from "../../pages/product_page";
import { AboutUs } from "../../pages/about_us";
import { UserPage } from "../../pages/user";
import { useSelector } from "react-redux";

export const RoutesApp = () => {
  const myUser = useSelector((state) => state.loggedUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/userpanel"
            element={
              myUser.user === "" ? <Navigate to="/auth/login" /> : <UserPage />
            }
          />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
