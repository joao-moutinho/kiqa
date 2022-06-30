import React, { useEffect, useRef, useState } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./pwdchange.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const ChangePwd = () => {
  const [pwd, setPwd] = useState();
  const [pwdFocus, setPwdFocus] = useState();

  const [newPwd, setNewPwd] = useState();
  const [validNewPwd, setNewValidPwd] = useState();
  const [newPwdFocus, setNewPwdFocus] = useState();

  const [matchPwd, setMatchPwd] = useState();
  const [validMatch, setValidMatch] = useState();
  const [matchFocus, setMatchFocus] = useState();

  const user = useSelector((state) => state.loggedUser.user);

  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, newPwd, matchPwd]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setNewValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `https://kiqa-be.herokuapp.com/users/${user.id}/password`,
        { oldPassword: pwd, newPassword: newPwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    
      setSuccess(true);
      setNewPwd("");
      setPwd("");
      setMatchPwd("");
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
        <h3>Change Password</h3>
        <input
          type="password"
          className="user-info-inpt"
          placeholder="Old Password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        ></input>
        <input
          type="password"
          className="user-info-inpt"
          placeholder="New Password"
          onChange={(e) => setNewPwd(e.target.value)}
          value={newPwd}
          onFocus={() => setNewPwdFocus(true)}
          onBlur={() => setNewPwdFocus(false)}
        ></input>
        <div className="input-msg-wrapper">
          <input
            type="password"
            className="user-info-inpt"
            placeholder="Match Password"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          ></input>
          <div
            className={
              !matchFocus && matchPwd && !validMatch
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </div>
        </div >
        <button className="change-button">Change Password</button>
      </form>
      <div className={errMsg ? "err-msg" : "offscreen"}>
        <p ref={errRef}>{errMsg}</p>
      </div>
    </div>
  );
};
