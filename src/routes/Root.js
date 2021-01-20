import React, { Component, Fragment } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import Demo from '../pages/Demo';
import Home from '../pages/Home';
import Documentation from '../pages/Documentation';
import About from '../pages/About';

class Root extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/documentation" exact component={Documentation} />
        <Route path="/demo" exact component={Demo} />
        <Route path="/about" exact component={About} />
      </Switch>
    );
    return <Fragment>{routes}</Fragment>;
  }
}

export default withRouter(Root);
