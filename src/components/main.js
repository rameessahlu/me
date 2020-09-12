import { Switch, Route } from "react-router-dom";
import React from "react";
import Resume from "./resume";
import CombinedMainPage from "./CombinedMainPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={CombinedMainPage} />
    {/*<Route exact path="/group_projects" component={GroupProjects} />
    <Route exact path="/solo_projects" component={SoloProjects} /> */}
    <Route exact path="/resume" component={Resume} />
    {/*<Route exact path="/contact_me" component={ContactMe} />*/}
  </Switch>
);

export default Main;
