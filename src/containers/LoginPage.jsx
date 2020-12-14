import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase/firebase";

const LoginPage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const authenticateUser = async (values) => {
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      history.push("/home");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
    }
  };

  return (
    <div className="container text-white text-center">
      <i className="fab fa-twitter h1 mt-5"></i>
      <h1 className="mb-5">Log in to twitter</h1>
      <form className="mb-3" onSubmit={handleSubmit(authenticateUser)}>
        <div className="custom-form-group">
          <label>Email or username</label>
          <input
            type="email"
            className="custom-input"
            name="email"
            ref={register}
          />
        </div>
        <div className="custom-form-group">
          <label>Password</label>
          <input
            type="password"
            className="custom-input"
            name="password"
            ref={register}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block rounded-pill"
        >
          Log in
        </button>
      </form>
      <Link to="/password_reset" className="mr-2">
        Forgot password?
      </Link>
      <span>·</span>
      <Link to="/signup" className="ml-2">
        Sign up for Twitter
      </Link>
    </div>
  );
};

export default LoginPage;
