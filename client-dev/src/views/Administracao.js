import React, { Component } from "react";
import { Collapse, Table, ListGroup, ListGroupItem, Spinner } from "reactstrap";

import { listSensores } from "../actions/sensor";
import { listMarca } from "../actions/marca";
import { listTipo } from "../actions/tipo";
import { listTensao } from "../actions/tensao";

class Administracao extends Component {
  state = {
    sensores: [],
    sensorCollapse: false,

    marcas: [],
    marcaCollapse: false,

    tipos: [],
    tipoCollapse: false,

    tensoes: [],
    tensaoCollapse: false
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
    switch (e.target.id) {
      case "sensores":
        this.setState({ sensorCollapse: !this.state.sensorCollapse });
        break;
      case "marca":
    }
  };

  sensorTable = () => {
    if (this.state.sensores === null) {
      return <Spinner />;
    }

    return (
      <Table responsive striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Codenome</th>
            <th>Tensão da Bateria</th>
            <th>Marca</th>
            <th>Tipo de sensores</th>
            <th>Altura</th>
            <th>Largura</th>
            <th>Comprimento</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {this.state.sensores.map(sensor => {
            return (
              <tr key="{sensor.id}">
                <th>{sensor.id}</th>
                <td>{sensor.codename}</td>
                <td>
                  {
                    this.state.tensoes.find(
                      tensao => tensao.id === sensor.tensao_id
                    ).valor
                  }
                  v
                </td>
                <td>
                  {
                    this.state.marcas.find(
                      marca => marca.id === sensor.marca_id
                    ).nome
                  }
                </td>
                <td>
                  {
                    this.state.tipos.find(tipo => tipo.id === sensor.tipo_id)
                      .nome
                  }
                </td>
                <td>{sensor.Tamanho.altura}</td>
                <td>{sensor.Tamanho.largura}</td>
                <td>{sensor.Tamanho.comprimento}</td>
                <td>{sensor.Localizacao.latitude}</td>
                <td>{sensor.Localizacao.longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
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
          <Collapse isOpen={this.state.sensorCollapse}>
            {this.sensorTable()}
          </Collapse>
          <ListGroupItem
            id="marca"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Marcas e Fornecedores
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Administracao;
