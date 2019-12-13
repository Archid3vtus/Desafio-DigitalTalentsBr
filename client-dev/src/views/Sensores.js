import React, { Component } from "react";
import {
  Spinner,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Collapse,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import Chart from "../components/Chart";
import Map from "../components/Map";

import { addMedida } from "../actions/medida";

class Sensores extends Component {
  state = {
    selectedSensor: null,
    newMedida: "",
    isOpen: false
  };

  onSensorClick = e => {
    e.preventDefault();

    this.setState({
      selectedSensor: this.props.sensores[parseInt(e.target.id)],
      isOpen: true
    });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNewMedida = e => {
    addMedida({
      valor: this.state.newMedida,
      sensor_id: this.state.selectedSensor.id
    }).then(res => {
      window.location.reload();
    });
  };

  render() {
    if (this.props.sensores.length === 0) {
      return <Spinner></Spinner>;
    }

    return (
      <Row style={{ paddingBottom: "10px" }}>
        <Col xs="12" sm="9">
          <div style={{ height: "90vh", width: "100%" }}>
            <Map
              zoom={2}
              sensores={this.props.sensores}
              onSensorClick={this.onSensorClick}
            ></Map>
          </div>
        </Col>
        <Col xs="12" sm="3">
          <ListGroup>
            {this.props.sensores.map((sensor, i) => {
              return (
                <ListGroupItem
                  id={i}
                  key={i}
                  tag="button"
                  action
                  onClick={this.onSensorClick}
                >
                  {sensor.codename}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
        <Col xs="12">
          <Collapse isOpen={this.state.isOpen}>
            <Chart
              sensor={this.state.selectedSensor}
              sulfixo={
                this.state.selectedSensor !== null
                  ? this.props.tipos.find(
                      tipo => tipo.id === this.state.selectedSensor.tipo_id
                    ).sulfixo
                  : null
              }
            />
            <InputGroup>
              <Input
                type="number"
                placeholder="Valor"
                name="newMedida"
                value={this.state.newMedidaField}
                onChange={this.onInputChange}
              />

              <InputGroupAddon addonType="append">
                <Button onClick={this.submitNewMedida}>Nova Medição</Button>
              </InputGroupAddon>
            </InputGroup>
          </Collapse>
        </Col>
      </Row>
    );
  }
}

export default Sensores;
