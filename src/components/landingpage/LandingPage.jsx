import React, { useState } from "react";
import SignupPage from "./SignupPage";
import Input from "../form/Input";
import firebase from "../../firebase/firebase";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  let history = useHistory();

  const [show, setShow] = useState(true);
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    e.persist();
    setValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = value;
    try {
      username === ""
        ? await firebase.login(email, password)
        : await firebase.register(username, email, password);
      history.push("/home");
    } catch (err) {
      console.error("Auth error", err);
      setError(err.message);
    }
  };

  return (
    <>
      <SignupPage
        value={value}
        handleChange={handleChange}
        show={show}
        handleModal={handleModal}
        onSubmit={onSubmit}
        error={error}
      />
      <div className="row vh-100 m-0">
        <div className="col bg-primary text-white center">
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
        <div className="col bg-secondary text-white pt-2">
          <form onSubmit={onSubmit}>
            <div className="row justify-content-center align-items-center">
              <div className="col-5">
                <Input
                  handleChange={handleChange}
                  label="Email"
                  htmlFor="email"
                  type="email"
                  value={value.email}
                />
              </div>
              <div className="col-5 label-custom">
                <Input
                  handleChange={handleChange}
                  label="Password"
                  htmlFor="password"
                  type="password"
                  value={value.password}
                />
                <a className="forgot-link" href="#">
                  Forgot password?
                </a>
              </div>
              <div className="col-2 pb-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-3"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
          <p className="mt-2">{error}</p>
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
