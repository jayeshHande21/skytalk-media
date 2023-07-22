import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./signUp.css";
import { Home } from "../Home";

export const SignUp = () => {
  return (
    <div
      style={{
        height: "850px",
        width: "600px",
        backgroundColor: "white",
        // marginTop: "40px",
      }}
    >
      <div style={{ float: "left" }}>
        <span style={{ padding: "30px", margin: "40px", marginBottom: "30px" }}>
          <label>
            <span
              input
              style={{
                color: "black",
                fontWeight: "20px",
                fontFamily: "cursive",
              }}
            >
              FIRST NAME
            </span>
            <input
              style={{
                color: "black",
                fontWeight: "20px",
                fontFamily: "cursive",
              }}
            />
          </label>
        </span>

        <br />
        <label>
          <span
            input
            style={{
              color: "black",
              fontWeight: "20px",
              fontFamily: "cursive",
            }}
          >
            LAST NAME
          </span>
          <input
            input
            style={{
              color: "black",
              fontWeight: "20px",
              fontFamily: "cursive",
            }}
          />
        </label>
        <br />
        <label>
          <span
            input
            style={{
              color: "black",
              fontWeight: "20px",
              fontFamily: "cursive",
            }}
            placeholder="example@gmail.com"
          >
            EMAIL ADDRESS
          </span>
          <input
            input
            style={{
              color: "black",
              fontWeight: "20px",
              fontFamily: "cursive",
            }}
          />
        </label>
        <br />
        <NavLink>
          <button style={{ padding: "10px", marginTop: "10px" }}>
            Register
          </button>
        </NavLink>
      </div>
    </div>
  );
};
