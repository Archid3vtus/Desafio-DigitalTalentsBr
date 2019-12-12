import React, { Component } from "react";

class Sensores extends Component {
  render() {
    return <div>{JSON.stringify(this.props.sensores)}</div>;
  }
}

export default Sensores;
