import React from "react";
import LogIn from "./Auth";
import ExpectedLost from "./ExpectedLost";
import Riesgo from "./QualitativeRisk";
import Risks from "./Risks";
import TopBar from "./TopBar";
import { Switch, Route } from "react-router-dom";

/**
 * This component is the principal when all the routes and the limits of
 * the systems are defined.
 */
const Routes = () => (
  <>
    <Route path="/" component={TopBar} />
    <Switch>
      <Route exact path="/logIn" component={LogIn} />
      <Route exact path="/qualitativeRisk" component={Riesgo} />
      <Route exact path="/" component={Risks} />
      <Route exact path="/expectedLost" component={ExpectedLost} />
    </Switch>
  </>
);

export default Routes;
