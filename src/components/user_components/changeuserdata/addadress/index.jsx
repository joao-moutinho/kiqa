import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./addadress.scss";

export const AddAdress = () => {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [doorNumber, setDoorNumber] = useState();
  const [floorNumber, setFloorNumber] = useState();
  const [streetName, setStreetName] = useState();
  const [zipCode, setZipCode] = useState();

  const user = useSelector((state) => state.loggedUser.user);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [city, country, doorNumber, floorNumber, streetName, zipCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://kiqa-be.herokuapp.com/users/${user.id}`,
        {
          city,
          country,
          doorNumber,
          floorNumber,
          streetName,
          zipCode,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setCity("");
      setCountry("");
      setZipCode("");
      setDoorNumber("");
      setFloorNumber("");
      setStreetName("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };


  return (
    <div className="change-info-main">
      <form onSubmit={handleSubmit} className="change-info-wrapper">
      <h3>Add Adress</h3>
        <input
          type="text"
          className="user-info-inpt"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <input
          type="text"
          className="user-info-inpt"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <input
          type="text"
          className="user-info-inpt"
          placeholder="Door Number"
          onChange={(e) => setDoorNumber(e.target.value)}
          value={doorNumber}
        />
        <input
          type="text"
          className="user-info-inpt"
          placeholder="Floor Number"
          onChange={(e) => setFloorNumber(e.target.value)}
          value={floorNumber}
        />
        <input
          type="text"
          className="user-info-inpt"
          placeholder="Street Name"
          onChange={(e) => setStreetName(e.target.value)}
          value={streetName}
        />
        <input
          type="text"
          className="user-info-inpt"
          placeholder="ZipCode"
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
        />
        <button className="change-button">Add Adress</button>
      </form>

      <div className={errMsg ? "err-msg" : "offscreen"}>
        <p ref={errRef}>{errMsg}</p>
      </div>
    </div>
  );
};
