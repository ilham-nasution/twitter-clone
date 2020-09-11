import React, { useState } from "react";
import SignupForm from "./SignupForm";
import firebase from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import useForm from "../auth/useForm";
import Input from "../form/Input";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
};

const LandingPage = () => {
  const { handleSubmit, handleChange, values } = useForm(
    INITIAL_STATE,
    authenticateUser
  );

  let history = useHistory();
  const [show, setShow] = useState(true);
  const [error, setError] = useState(null);

  const handleModal = () => {
    setShow(!show);
  };

  async function authenticateUser() {
    const { username, email, password } = values;
    try {
      username === ""
        ? await firebase.login(email, password)
        : await firebase.register(username, email, password);
      history.push("/home");
    } catch (err) {
      console.error("Auth error", err);
      setError(err.message);
    }
  }

  return (
    <>
      <SignupForm
        values={values}
        handleChange={handleChange}
        show={show}
        handleModal={handleModal}
        onSubmit={handleSubmit}
        error={error}
      />
      <div className="row m-0">
        <div className="col-md-12 order-last order-lg-first col-lg-6 bg-primary text-white center vh-100">
          <div>
            <h5 className="mb-5">
              <i className="mr-4 fas fa-search"></i>
              <strong>Follow your interests.</strong>
            </h5>
            <h5 className="mb-5">
              <i className="mr-4 far fa-user"></i>
              <strong>Hear what people are talking about.</strong>
            </h5>
            <h5 className="mb-5">
              <i className="mr-4 far fa-comment"></i>
              <strong>Join the conversation.</strong>
            </h5>
          </div>
        </div>
        <div className="col-md-12 order-first order-lg-last col-lg-6 bg-secondary text-white pt-2 vh-100">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-sm-4 label-custom offset-sm-1">
                <Input
                  handleChange={handleChange}
                  label="Email"
                  htmlFor="email"
                  type="email"
                  value={values.email}
                />
              </div>
              <div className="col-12 col-sm-4 label-custom">
                <Input
                  handleChange={handleChange}
                  label="Password"
                  htmlFor="password"
                  type="password"
                  value={values.password}
                />
                <a className="forgot-link" href="#">
                  Forgot password?
                </a>
              </div>
              <div className="col-12 col-sm-3 pb-4 mt-2 text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-3"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
          <p className="mt-2 ml-5 text-danger">{error}</p>
          <div className="center h-50 mt-5">
            <div className="w-50">
              <h3>
                <i className="fab fa-twitter"></i>
              </h3>
              <h3 className="mb-5">
                <strong>See what's happening in the world right now</strong>
              </h3>
              <h5>Join Twitter today.</h5>
              <button
                onClick={handleModal}
                className="btn btn-primary btn-block rounded-pill"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
