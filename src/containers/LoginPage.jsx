import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import TwitterInput from "../components/TwitterInput";
import FirebaseContext from "../firebase/context";

const LoginPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const handleSignIn = async (values) => {
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
      <Link to="/">
        <i className="fab fa-twitter h1 mt-5"></i>
      </Link>
      <h1 className="mb-5">Log in to twitter</h1>
      <form className="mb-3" onSubmit={handleSubmit(handleSignIn)}>
        <TwitterInput
          label="Email or username"
          type="email"
          name="email"
          ref={register}
        />
        <TwitterInput
          label="Password"
          type="password"
          name="password"
          ref={register}
        />
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
