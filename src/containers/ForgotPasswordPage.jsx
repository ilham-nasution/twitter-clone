import React, { useContext, useState } from "react";
import FirebaseContext from "../firebase/context";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { firebase } = useContext(FirebaseContext);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const resetPassword = async (values) => {
    setLoading(true);
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
          {loading ? (
            <button
              className="btn btn-primary rounded-pill ml-3 px-4"
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
            <button type="submit" className="ml-3 btn btn-primary rounded-pill">
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
