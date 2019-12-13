import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Spinner } from "reactstrap";

class Chart extends Component {
  render() {
    if (this.props.sensor === null) {
      return <Spinner />;
    }

    let data = {
      labels: this.props.sensor.Medidas.map((medida, i) => i + 1),
      datasets: [
        {
          label: this.props.sulfixo,
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.sensor.Medidas.map(medida => medida.valor)
        }
      ]
    };

    return (
      <div>
        <h2>Dados de {this.props.sensor.codename}</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
