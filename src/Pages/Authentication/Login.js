import { NavLink } from "react-router-dom";
import { SignUp } from "./SignUp";
import { Explore } from "../Explore";

import "./Login.css";
import aero from "./aero.jpg";

export const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="ImageContainer">
        <img alt="AERO-Talk" src={aero} />
      </div>
      <div className="LoginFormContainer">
        <h1>
          Sky<span className="talk">Talk</span>
        </h1>
        <div className="loginDiv">
          <label>
            <h3>Email</h3>
            <input placeholder="example@gmail.com" />
          </label>
          <label>
            <h3>Password</h3>
            <input placeholder="Password" />
          </label>
          <NavLink to="/Explore">
            <button className="btnLogin">Login</button>
          </NavLink>
        </div>

        <span>
          <NavLink to="/Explore" className="guest">
            Guest Login{" "}
          </NavLink>
        </span>

        <p>
          Don't have an account ?{" "}
          <NavLink to="/SignUp">
            <span className="sign">Sign Up</span>{" "}
          </NavLink>
        </p>
      </div>
    </div>
  );
};
