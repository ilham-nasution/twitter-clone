import React, { useState, useContext } from "react";
import FirebaseContext from "../../firebase/context";
import useForm from "../auth/useForm";

const INITIAL_STATE = { email: "" };

const ForgotPassword = () => {
  const [passwordResetError, setPasswordResetError] = useState(null);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const { firebase } = useContext(FirebaseContext);

  const { handleSubmit, handleChange, values } = useForm(
    INITIAL_STATE,
    resetPassword
  );

  async function resetPassword() {
    try {
      await firebase.resetPassword(values.email);
      setIsPasswordReset(true);
      setPasswordResetError(null);
    } catch (error) {
      console.error("Error sending email", error);
      setPasswordResetError(error.message);
      setIsPasswordReset(false);
    }
  }

  return (
    <div className="container">
      <h1 className="text-white mt-5 mb-3">Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <label className="text-white" htmlFor="email">
          Email address
        </label>
        <div className="d-flex w-75">
          <input
            onChange={handleChange}
            className="form-control"
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter your email"
          />
          <button type="submit" className="ml-3 btn btn-primary">
            Reset
          </button>
        </div>
      </form>
      <p className="text-danger mt-1">{passwordResetError}</p>
      {isPasswordReset && (
        <p className="text-success mt-1">Check email to reset password</p>
      )}
    </div>
  );
};

export default ForgotPassword;
