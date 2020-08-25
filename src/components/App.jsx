import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import Homepage from "./homepage/Homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
