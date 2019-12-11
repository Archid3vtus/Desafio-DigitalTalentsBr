import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import TabBar from "./components/TabBar";
import Administracao from "./views/Administracao";

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <TabBar history={hist}></TabBar>
        <Route path="/admin" render={props => <Administracao {...props} />} />
        <Redirect from="/" to="/admin" />
      </Router>
    );
  }
}

export default App;
