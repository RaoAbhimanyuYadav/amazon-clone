import React from "react";
import "./Login.css";
import logo from "./Amazon-logo-light.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //firebase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login">
        <Link to="/">
          <img className="login__logo" src={logo} alt="gfz" />
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>
          <form action="">
            <h5>E-mail</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="login__signInButton" onClick={signIn}>
              Sign In
            </button>
          </form>
          <p>By signing-in you agree to Amazon's Fake conditions of Use & Sale ,Please see our Privacy Notice, our Cookies Notice and our Interes-Based Ads Notice. </p>
          <button className="login__registerButton" onClick={register}>
            Create your amazon account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
