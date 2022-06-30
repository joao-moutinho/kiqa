import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./changephonenumber.scss";

export const ChangePhone = () => {
  const [cellPhone, setCellPhone] = useState("");

  const [newCellPhone, setNewCellPhone] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [cellPhone, newCellPhone]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        "https://kiqa-be.herokuapp.com/login",
        {},
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Wrong Credentials!");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="change-info-main">
      <form onSubmit={(e) => handleSubmit(e)} className="change-info-wrapper">
        <h3>Change number</h3>
        <input
          type="number"
          className="user-info-inpt"
          placeholder="Old Phone Number"
          onChange={(e) => setCellPhone(e.target.value)}
          value={cellPhone}
        ></input>
        <input
          type="number"
          className="user-info-inpt"
          placeholder="New Phone Number"
          onChange={(e) => setNewCellPhone(e.target.value)}
          value={newCellPhone}
        ></input>
        <button className="change-button">Change Number</button>
      </form>
      <div className={errMsg ? "err-msg" : "offscreen"}>
        <p ref={errRef}>{errMsg}</p>
      </div>
    </div>
  );
};
