import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import MapContainer from "../MapContainer";
import Hours from "../Hours";

import "./styles.css";

class Router extends Component {
  render() {
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" component={MapContainer} />
          <Route path="/hours" component={Hours} />
        </Switch>
      </div>
    );
  }
}

export default Router;
