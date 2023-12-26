import React, { useState } from "react";
import "./App.css";
import { Headers } from "./Components/Header";
import Router from "./Router/Router";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const naviget = useNavigate();
  const isuser = localStorage.getItem("isuserlogin");

  const Logouthandler = () => {
    localStorage.removeItem("isuserlogin");
    naviget("/");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1 className="fw-bold">Private</h1>
        </div>
        <div className="navs">
          <ul>
            {Headers.map((nav, ind) => (
              <li key={ind}>
                <Link to={nav.HomeUrl}>{nav.Home}</Link>
              </li>
            ))}
            {!isuser && (
              <li>
                <Link to={"/"}>Login</Link>
              </li>
            )}
            {isuser && (
              <li>
                <button
                  style={{
                    padding: "8px 12px",
                    outline: "none",
                    border: "none",
                    fontWeight: "bold",
                    background: "red",
                    color: "snow",
                    borderRadius: "5px",
                  }}
                  onClick={Logouthandler}
                >
                  LogOut
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Router />
    </>
  );
};

export default App;
