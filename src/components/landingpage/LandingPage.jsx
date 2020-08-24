import React, { useState } from "react";
import SignupPage from "./SignupPage";
import Input from "../form/Input";

const LandingPage = () => {
  const [show, setShow] = useState(true);

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <SignupPage show={show} handleModal={handleModal} />
      <div className="row vh-100 m-0">
        <div className="col bg-primary text-white center">
          <div>
            <h5 className="mb-5">
              <i className="mr-4 fas fa-search"></i>
              <strong>Follow your interests.</strong>
            </h5>
            <h5 className="mb-5">
              <i className="mr-4 far fa-user"></i>
              <strong>Hear what peopleare talking about.</strong>
            </h5>
            <h5 className="mb-5">
              <i className="mr-4 far fa-comment"></i>
              <strong>Join the conversation.</strong>
            </h5>
          </div>
        </div>
        <div className="col bg-secondary text-white">
          <div className="d-flex justify-content-center mt-2">
            <form>
              <div className="row align-items-center">
                <div className="col">
                  <Input label="Email" htmlFor="email" type="text" />
                </div>
                <div className="col label-custom">
                  <Input label="Password" htmlFor="password" type="password" />
                  <a className="forgot-link" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="col">
                  <button className="btn btn-outline-primary">Log in</button>
                </div>
              </div>
            </form>
          </div>
          <div className="center h-75">
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
                className="btn btn-primary btn-block"
              >
                Sign up
              </button>
              <button className="btn btn-outline-primary btn-block">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
