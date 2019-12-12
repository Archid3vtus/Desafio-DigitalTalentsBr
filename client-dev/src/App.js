import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "reactstrap";

import TabBar from "./components/TabBar";
import Administracao from "./views/Administracao";

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <TabBar history={hist}></TabBar>
        <Container fluid={true}>
          <Route path="/admin" render={props => <Administracao {...props} />} />
        </Container>
        <Redirect from="/" to="/admin" />
      </Router>
    );
  }
}

export default App;
