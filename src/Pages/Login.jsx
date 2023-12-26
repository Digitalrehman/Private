import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let emailref = useRef();
  let passwordref = useRef();
  const SubmitFormHandler = (e) => {
    e.preventDefault();
    let email = emailref.current.value;
    let password = passwordref.current.value;
    if (!email || !password) {
      alert("Missing Your value");
      return;
    }
    localStorage.setItem("isuserlogin", true);
    navigate("/Home");
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-3">
          <div className="col-7">
            <div className="text-center my-2">
              <h1 className="fw-bold">Login</h1>
            </div>

            <form onSubmit={SubmitFormHandler}>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    ref={emailref}
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    ref={passwordref}
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
