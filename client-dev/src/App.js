import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "reactstrap";

import TabBar from "./components/TabBar";
import Administracao from "./views/Administracao";

import { listSensores } from "./actions/sensor";
import { listMarca } from "./actions/marca";
import { listTipo } from "./actions/tipo";
import { listTensao } from "./actions/tensao";

const hist = createBrowserHistory();

class App extends Component {
  state = {
    sensores: [],
    marcas: [],
    tipos: [],
    tensoes: []
  };

  async componentDidMount() {
    let sensorRequest = await listSensores();
    let marcaRequest = await listMarca();
    let tipoRequest = await listTipo();
    let tensaoRequest = await listTensao();

    this.setState({ marcas: marcaRequest.data });
    this.setState({ tipos: tipoRequest.data });
    this.setState({ tensoes: tensaoRequest.data });
    this.setState({ sensores: sensorRequest.data.sensor });
  }

  render() {
    return (
      <Router history={hist}>
        <TabBar history={hist}></TabBar>
        <Container fluid={true}>
          <Route
            path="/admin"
            render={props => (
              <Administracao
                {...props}
                sensores={this.state.sensores}
                marcas={this.state.marcas}
                tipos={this.state.tipos}
                tensoes={this.state.tensoes}
              />
            )}
          />
        </Container>
        <Redirect from="/" to="/admin" />
      </Router>
    );
  }
}

export default App;
