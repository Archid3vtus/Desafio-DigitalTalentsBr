import React from "react";
import { Badge } from "reactstrap";

import GoogleMap from "google-map-react";

const Map = props => {
  return (
    <GoogleMap center={props.center} zoom={props.zoom}>
      <Badge lat={props.lat} lng={props.lng} href="#" color="primary">
        Teste
      </Badge>
    </GoogleMap>
  );
};

export default Map;
