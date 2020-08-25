import React from "react";
import Input from "../form/Input";

const SignupPage = ({
  show,
  handleModal,
  value,
  handleChange,
  onSubmit,
  error,
}) => {
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
            <form onSubmit={onSubmit}>
              <Input
                label="Username"
                htmlFor="username"
                type="text"
                value={value.username}
                handleChange={handleChange}
              />
              <Input
                label="Email"
                htmlFor="email"
                type="email"
                value={value.email}
                handleChange={handleChange}
              />
              <Input
                label="Password"
                htmlFor="password"
                type="password"
                value={value.password}
                handleChange={handleChange}
              />
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign up
                </button>
                <p className="mt-3">{error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
