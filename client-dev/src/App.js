import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "reactstrap";

import TabBar from "./components/TabBar";
import Administracao from "./views/Administracao";
import Sensores from "./views/Sensores";

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
    let marcaRequest = await listMarca();
    let tipoRequest = await listTipo();
    let tensaoRequest = await listTensao();

    this.setState({ marcas: marcaRequest.data });
    this.setState({ tipos: tipoRequest.data });
    this.setState({ tensoes: tensaoRequest.data });

    listSensores()
      .then(res => {
        this.setState({ sensores: res.data.sensor });
      })
      .catch(err => {
        alert("Por favor, cadastre um novo sensor!");
      });
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
          <Route
            path="/sensores"
            render={props => (
              <Sensores
                {...props}
                sensores={this.state.sensores}
                tipos={this.state.tipos}
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
