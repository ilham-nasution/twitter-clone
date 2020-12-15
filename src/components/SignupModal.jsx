import React from "react";
import { useForm } from "react-hook-form";
import TwitterInput from "./TwitterInput";

const SignupModal = ({ show, handleModal, handleSignUp }) => {
  const { register, handleSubmit } = useForm();

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
              <div className="form-group">
                <label>Avatar</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="image"
                  ref={register}
                />
              </div>
              <TwitterInput
                label="Username"
                type="text"
                name="username"
                ref={register}
              />
              <TwitterInput
                label="Email"
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

export default SignupModal;
