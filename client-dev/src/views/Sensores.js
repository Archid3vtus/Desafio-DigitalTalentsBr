import React, { Component } from "react";
import { Spinner } from "reactstrap";

import Map from "../components/Map";

class Sensores extends Component {
  render() {
    if (this.props.sensores.length === 0) {
      return <Spinner></Spinner>;
    }

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={2} sensores={this.props.sensores}></Map>
      </div>
    );
  }
}

export default Sensores;
