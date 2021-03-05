import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import HealthPlans from "../views/HealthPlans";

export default () => (
  <HashRouter>
      <Switch>
        <Route path="/" component={HealthPlans} exact />
      </Switch>
    </HashRouter>
);
