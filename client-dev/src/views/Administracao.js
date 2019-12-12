import React, { Component } from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import SensorTable from "../components/SensorTable";
import GeneralTable from "../components/GeneralTable";

class Administracao extends Component {
  state = {
    open: ""
  };

  toggleCollapse = e => {
    // eslint-disable-next-line default-case
    if (e.target.id === this.state.open) {
      this.setState({ open: "" });
    } else {
      this.setState({ open: e.target.id });
    }
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem
            id="sensores"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Sensores
          </ListGroupItem>
          <Collapse isOpen={this.state.open === "sensores"}>
            <SensorTable
              sensores={this.props.sensores}
              marcas={this.props.marcas}
              tipos={this.props.tipos}
              tensoes={this.props.tensoes}
            ></SensorTable>
          </Collapse>

          <ListGroupItem
            id="marcas"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Marcas e Fornecedores
          </ListGroupItem>
          <Collapse isOpen={this.state.open === "marcas"}>
            <GeneralTable tableType={this.props.marcas}></GeneralTable>
          </Collapse>

          <ListGroupItem
            id="tipos"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Tipos de sensor
          </ListGroupItem>
          <Collapse isOpen={this.state.open === "tipos"}>
            <GeneralTable tableType={this.props.tipos}></GeneralTable>
          </Collapse>

          <ListGroupItem
            id="tensoes"
            tag="button"
            action
            onClick={this.toggleCollapse}
          >
            Tensóes de bateria
          </ListGroupItem>
          <Collapse isOpen={this.state.open === "tensoes"}>
            <GeneralTable tableType={this.props.tensoes}></GeneralTable>
          </Collapse>
        </ListGroup>
      </div>
    );
  }
}

export default Administracao;
