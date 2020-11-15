import React from "react";
import LogIn from "./Auth";
import { Switch, Route } from "react-router-dom";

/**
 * This component is the principal when all the routes and the limits of
 * the systems are defined.
 */
const Routes = () => (
  <>
    <Switch>
      <Route exact path="/logIn" component={LogIn} />
    </Switch>
  </>
);

export default Routes;
