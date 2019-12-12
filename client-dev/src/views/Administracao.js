import React, { Component } from "react";
import {
  Container,
  Collapse,
  Table,
  ListGroup,
  ListGroupItem,
  Spinner
} from "reactstrap";

import { listSensores } from "../actions/sensor";

class Administracao extends Component {
  state = {
    sensores: null,
    sensorCollapse: false,

    marca: null,
    marcaCollapse: false
  };

  async componentDidMount() {
    /*listSensores().then(data => {
      this.setState({ sensores: data.data.sensor });
      console.log(data);
    });*/
    let sensorRequest = await listSensores();

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
              <tr>
                <th>{sensor.id}</th>
                <td>{sensor.codename}</td>
                <td>{sensor.tensao_id}</td>
                <td>{sensor.marca_id}</td>
                <td>{sensor.tipo_id}</td>
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
