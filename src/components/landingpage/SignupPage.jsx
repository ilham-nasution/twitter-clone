import React from "react";
import Input from "../form/Input";

const SignupPage = ({ show, handleModal }) => {
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
          <div className="modal-body">
            <Input label="Username" htmlFor="name" type="text" />
            <Input label="Email" htmlFor="email" type="text" />
            <Input label="Password" htmlFor="password" type="password" />
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
