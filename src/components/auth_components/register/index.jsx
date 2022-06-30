import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../share_components/primary-button";
import "./register.scss";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;

export const Register = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [date, setDate] = useState("");
  const [dateFocus, setDateFocus] = useState(false);

  const [vat, setVat] = useState("");
  const [vatFocus, setVatFocus] = useState(false);

  const [cellPhone, setCellPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [pwd, setPwd] = useState();
  const [validPwd, setValidPwd] = useState();
  const [pwdFocus, setPwdFocus] = useState();

  const [matchPwd, setMatchPwd] = useState();
  const [validMatch, setValidMatch] = useState();
  const [matchFocus, setMatchFocus] = useState();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kiqa-be.herokuapp.com/users",
        {
          name: user,
          email: email,
          dateOfBirth: date,
          password: pwd,
          vat,
          phoneNumber: cellPhone,
        },
        { "Content-Type": "application/json" }
      );
      
      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
      setCellPhone("");
      setDate("");
      setEmail("");
      setVat("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Invalid Information");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <PrimaryButton
            onClick={() => navigate("/auth/login")}
            text="Log in"
          />
        </section>
      ) : (
        <>
          <form onSubmit={(e) => handleSubmit(e)} className="inputs-wrapper">
            <div className="input-msg-wrapper">
              <input
                type="text"
                className="user-info-inpt"
                placeholder="Name"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              ></input>
              <div
                className={
                  !userFocus && user && !validName
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </div>
            </div>
            <div className="input-msg-wrapper">
              <input
                type="email"
                className="user-info-inpt"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                autoComplete="off"
              ></input>
              <div
                className={
                  !emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <p>Type a gmail email pls</p>
              </div>
            </div>
            <div className="input-msg-wrapper"></div>
            <input
              type="date"
              className="user-info-inpt"
              placeholder="Date of Birth"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              onFocus={() => setDateFocus(true)}
              onBlur={() => setDateFocus(false)}
            ></input>
            <div className="input-msg-wrapper"></div>
            <input
              type="number"
              className="user-info-inpt"
              placeholder="VAT"
              onChange={(e) => setVat(e.target.value)}
              value={vat}
              onFocus={() => setVatFocus(true)}
              onBlur={() => setVatFocus(false)}
              autoComplete="off"
            ></input>
            <div className="input-msg-wrapper"></div>
            <input
              type="number"
              className="user-info-inpt"
              placeholder="Cellphone"
              onChange={(e) => setCellPhone(e.target.value)}
              value={cellPhone}
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(false)}
              autoComplete="off"
            ></input>
            <div className="input-msg-wrapper">
              <input
                type="password"
                className="user-info-inpt"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              ></input>
              <div
                className={
                  !pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters: <span>!</span> <span>@</span>{" "}
                <span>#</span> <span>$</span> <span>%</span>
              </div>
            </div>
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
            </div>
            <button className="sub-button">Sign up</button>
          </form>
          <div className={errMsg ? "err-msg" : "offscreen"}>
            <p ref={errRef}>{errMsg}</p>
          </div>
        </>
      )}{" "}
    </>
  );
};
