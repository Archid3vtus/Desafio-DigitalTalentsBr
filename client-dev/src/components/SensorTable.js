import React from "react";
import { Spinner, Table } from "reactstrap";

function SensorTable(props) {
  if (props.sensores.length === 0) {
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
          <th>Tipo de sensore</th>
          <th>Altura</th>
          <th>Largura</th>
          <th>Comprimento</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {props.sensores.map((sensor, i) => {
          return (
            <tr key={i}>
              <th>{sensor.id}</th>
              <td>{sensor.codename}</td>
              <td>
                {
                  props.tensoes.find(tensao => tensao.id === sensor.tensao_id)
                    .valor
                }
                v
              </td>
              <td>
                {props.marcas.find(marca => marca.id === sensor.marca_id).nome}
              </td>
              <td>
                {props.tipos.find(tipo => tipo.id === sensor.tipo_id).nome}
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
}

export default SensorTable;
