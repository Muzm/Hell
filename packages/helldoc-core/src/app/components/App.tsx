import * as React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Page from "./Page";
import siteData from "@internal/site-data";

let App = class extends React.PureComponent {
  public render() {
    return (
      <Router basename={siteData.base}>
        <>
          <NavBar />
          <Switch>
            <Route component={Page} />
          </Switch>
        </>
      </Router>
    );
  }
};

if (process.env.NODE_ENV === "development") {
  App = hot(App);
}

export default App;
