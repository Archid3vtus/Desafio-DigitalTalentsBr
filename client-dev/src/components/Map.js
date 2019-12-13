import React from "react";
import { Badge } from "reactstrap";

import GoogleMap from "google-map-react";

const mapCenter = (lat, lng) => {
  let response = {
    lat: 0,
    lng: 0
  };

  for (let x in lat) {
    response.lat += x;
  }

  response.lat = response.lat / lat.length;

  for (let x in lng) {
    response.lng += x;
  }

  response.lng = response.lng / lng.length;

  return response;
};

const Map = props => {
  let latList = props.sensores.map(sensor => {
    return sensor.Localizacao.latitude;
  });

  let lngList = props.sensores.map(sensor => {
    return sensor.Localizacao.longitude;
  });

  return (
    <GoogleMap center={mapCenter(latList, lngList)} zoom={props.zoom}>
      {/*<Badge lat={props.lat} lng={props.lng} href="#" color="primary" pill>
        Teste
      </Badge>*/}

      {props.sensores.map(sensor => {
        return (
          <Badge
            lat={sensor.Localizacao.latitude}
            lng={sensor.Localizacao.longitude}
            href="#"
            color="danger"
            pill
          >
            {sensor.codename}
          </Badge>
        );
      })}
    </GoogleMap>
  );
};

export default Map;
