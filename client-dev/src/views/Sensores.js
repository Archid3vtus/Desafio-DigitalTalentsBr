import React, { Component } from "react";

import Map from "../components/Map";

class Sensores extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          center={[
            this.props.sensores[1].Localizacao.latitude,
            this.props.sensores[1].Localizacao.longitude
          ]}
          zoom={9}
          lat={this.props.sensores[1].Localizacao.latitude}
          lng={this.props.sensores[1].Localizacao.longitude}
        ></Map>
      </div>
    );
  }
}

export default Sensores;
