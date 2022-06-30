import React from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../../components/auth_components/register";
import { PrimaryButton } from "../../../components/share_components/primary-button";
import "./signup.scss"

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-wrapper">
      <h3>Sign Up</h3>
      <Register/>
      <h4>Already a member?</h4>
      <PrimaryButton onClick={() => navigate("/auth/login")} text="Log in" />
    </div>
  );
};
