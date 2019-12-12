import React, { Component } from "react";
import { Collapse, Table, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import SensorTable from "../components/SensorTable";
import GeneralTable from "../components/GeneralTable";

import { listSensores } from "../actions/sensor";
import { listMarca } from "../actions/marca";
import { listTipo } from "../actions/tipo";
import { listTensao } from "../actions/tensao";

class Administracao extends Component {
  state = {
    sensores: [],
    marcas: [],
    tipos: [],
    tensoes: [],
    open: null
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

  toggleCollapse = e => {
    // eslint-disable-next-line default-case
    if (e.target.id === this.state.open) {
      this.setState({ open: null });
    } else {
      this.setState({ open: e.target.id });
    }
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem
            id="sensores"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Sensores
          </ListGroupItem>
          <Collapse isOpen={this.state.open === "sensores"}>
            <SensorTable
              sensores={this.state.sensores}
              marcas={this.state.marcas}
              tipos={this.state.tipos}
              tensoes={this.state.tensoes}
            ></SensorTable>
          </Collapse>
          <ListGroupItem
            id="marcas"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Marcas e Fornecedores
          </ListGroupItem>
          <Collapse isOpen={this.state.open === "marcas"}>
            <GeneralTable tableType={this.state.marcas}></GeneralTable>
          </Collapse>
        </ListGroup>
      </div>
    );
  }
}

export default Administracao;
