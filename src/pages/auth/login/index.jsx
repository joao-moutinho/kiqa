import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../../components/share_components/primary-button";
import { addLoggedUser } from "../../../redux/logactions";
import "./login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://kiqa-be.herokuapp.com/login",
        { email: user, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch(addLoggedUser(response?.data.principalDto));
      setSuccess(true);
      setUser("");
      setPwd("");
      localStorage.setItem("user", JSON.stringify(response?.data.principalDto));
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
    <>
      {success ? (
        <div>
          <h1>Log in sucesseful!</h1>
          <br />
          <p>
            <Link className="login-suc-link" to="/">
              Go to Home
            </Link>
          </p>
        </div>
      ) : (
        <div className="login-wrapper">
          <h3>Log In</h3>
          <form onSubmit={handleSubmit} className="inputs-wrapper">
            <input
              type="email"
              className="user-info-inpt"
              placeholder="Email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />

            <input
              type="password"
              className="user-info-inpt"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
            />
            <button className="sub-button">Log In</button>
          </form>
          <div className={errMsg ? "err-msg" : "offscreen"}>
            <p ref={errRef}>{errMsg}</p>
          </div>
          <h4>Need an account?</h4>
          <PrimaryButton
            onClick={() => navigate("/auth/signup")}
            text="Sign Up"
          />
        </div>
      )}
    </>
  );
};
