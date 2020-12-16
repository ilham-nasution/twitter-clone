import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const user = useContext(UserContext);

  return (
    <Route
      {...restProps}
      render={(props) => {
        if (user) {
          return <Component {...restProps} {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
