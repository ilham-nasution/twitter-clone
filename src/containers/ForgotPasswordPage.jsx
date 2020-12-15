import React, { useContext } from "react";
import FirebaseContext from "../firebase/context";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { firebase } = useContext(FirebaseContext);
  const { register, handleSubmit } = useForm();

  const resetPassword = async (values) => {
    try {
      await firebase.resetPassword(values.email);
      alert("Password reset success, please check your email.");
    } catch (error) {
      console.error("Error sending email", error);
      alert(error.message);
    }
  };

  return (
    <div className="container text-white">
      <Link to="/">
        <i className="fab fa-twitter h1 mt-5"></i>
      </Link>
      <h1 className="mt-5 mb-3">Reset your password</h1>
      <form onSubmit={handleSubmit(resetPassword)}>
        <label>Email address</label>
        <div className="d-flex w-75">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter your email"
            ref={register}
          />
          <button type="submit" className="ml-3 btn btn-primary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
