import React, { useState } from "react";
import SignupModal from "../components/SignupModal";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../firebase/firebase";

const LandingPage = () => {
  let history = useHistory();
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleModal = () => {
    setHidden(!hidden);
  };

  const handleSignIn = async (values) => {
    setLoading(true);
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      history.push("/home");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
      setLoading(false);
    }
  };

  const handleSignUp = async (values) => {
    setLoading(true);
    const { username, image, email, password } = values;
    try {
      const imageURL = await firebase.uploadImage(image[0]);
      await firebase.register(username, imageURL, email, password);
      history.push("/home");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <SignupModal
        hidden={hidden}
        handleModal={handleModal}
        handleSignUp={handleSignUp}
        loading={loading}
      />
      <div className="row m-0 text-white">
        <div className="col-md-12 order-last order-lg-first col-lg-6 bg-primary center vh-100">
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
        <div className="col-md-12 order-first order-lg-last col-lg-6 bg-secondary px-5 pt-3 vh-100">
          <form
            className="d-none d-xl-flex align-items-center justify-content-center"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="custom-form-group mr-3">
              <label>Email or username</label>
              <input
                type="email"
                className="custom-input"
                name="email"
                ref={register}
              />
            </div>
            <div className="custom-form-group mr-3">
              <label>Password</label>
              <input
                type="password"
                className="custom-input"
                name="password"
                ref={register}
              />
              <Link to="/password_reset" className="forgot-link">
                Forgot password?
              </Link>
            </div>
            {loading ? (
              <button
                className="btn btn-outline-primary rounded-pill mb-3 px-4"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-outline-primary rounded-pill mb-3"
              >
                Log in
              </button>
            )}
          </form>
          <div className="center h-50 mt-5">
            <div className="w-50">
              <h3>
                <i className="fab fa-twitter"></i>
              </h3>
              <h3 className="mb-5">
                <strong>See what's happening in the world right now</strong>
              </h3>
              <h5>Join Twitter today.</h5>
              <Link
                to="/login"
                className="btn btn-outline-primary btn-block rounded-pill"
              >
                Log in
              </Link>
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
