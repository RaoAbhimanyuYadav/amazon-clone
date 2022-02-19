import React from "react";
import "./Login.css";
import logo from "./Amazon-logo-light.png";
import { Link } from "react-router-dom";

const Login = () => {
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
            <input type="email" />
            <h5>Password</h5>
            <input type="password" />
            <button className="login__signInButton">Sign In</button>
          </form>
          <p>By signing-in you agree to Amazon's Fake conditions of Use & Sale ,Please see our Privacy Notice, our Cookies Notice and our Interes-Based Ads Notice. </p>
          <button className="login__registerButton">Create your amazon account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
