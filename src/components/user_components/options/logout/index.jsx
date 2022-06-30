import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeLoggedUser } from "../../../../redux/logactions";
import "./logout.scss";

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const logOut = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "https://kiqa-be.herokuapp.com/basic-logout",

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      dispatch(removeLoggedUser());
      localStorage.removeItem("user");
      navigate("/");
      console.log("logged out")
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Somethin Went Wrong");
      }
    }
  };

  return (
    <div className="logout-wrapper">
      <button onClick={(e) => logOut(e)} className="logout-btn">
        Log Out
      </button>
      <div className={errMsg ? "err-msg" : "offscreen"}>
        <p>{errMsg}</p>
      </div>
    </div>
  );
};
