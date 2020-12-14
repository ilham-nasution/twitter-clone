import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";

const SignupForm = ({ show, handleModal }) => {
  let history = useHistory();
  const { register, handleSubmit } = useForm();

  const handleSignUp = async (values) => {
    const { username, email, password } = values;
    try {
      await firebase.register(username, email, password);
      history.push("/home");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
    }
  };

  return (
    <div hidden={show} className="signup-modal">
      <div className="modal-dialog w-75 shadow">
        <div className="modal-content bg-secondary text-white">
          <div className="modal-header border-0">
            <h5 className="modal-title">Create an Account</h5>
            <button
              onClick={handleModal}
              type="button"
              className="btn close text-white"
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body mb-3">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="custom-form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="custom-input"
                  name="username"
                  ref={register}
                />
              </div>
              <div className="custom-form-group">
                <label>Email</label>
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
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block rounded-pill"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
