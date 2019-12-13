import React, { Component } from "react";
import { Spinner, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import Map from "../components/Map";

class Sensores extends Component {
  render() {
    if (this.props.sensores.length === 0) {
      return <Spinner></Spinner>;
    }

    return (
      <Row>
        <Col xs="12" sm="9">
          <div style={{ height: "90vh", width: "100%" }}>
            <Map zoom={2} sensores={this.props.sensores}></Map>
          </div>
        </Col>
        <Col xs="12" sm="3">
          <ListGroup>
            {this.props.sensores.map(sensor => {
              return (
                <ListGroupItem tag="button" action>
                  {sensor.codename}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Sensores;
