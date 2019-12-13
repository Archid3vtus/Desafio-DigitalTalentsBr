import React, { Component } from "react";
import {
  Spinner,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import Chart from "../components/Chart";

import Map from "../components/Map";

class Sensores extends Component {
  state = {
    selectedSensor: null,
    isOpen: false
  };

  onSensorClick = e => {
    e.preventDefault();

    this.setState({
      selectedSensor: this.props.sensores[parseInt(e.target.id)],
      isOpen: true
    });
  };

  render() {
    if (this.props.sensores.length === 0) {
      return <Spinner></Spinner>;
    }

    return (
      <Row>
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
          </Collapse>
        </Col>
      </Row>
    );
  }
}

export default Sensores;
