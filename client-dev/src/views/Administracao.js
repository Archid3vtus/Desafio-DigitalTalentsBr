import React, { Component } from "react";
import { Collapse, ListGroup, ListGroupItem, Button, Modal } from "reactstrap";
import SensorTable from "../components/SensorTable";
import GeneralTable from "../components/GeneralTable";
import SensorSubmitForm from "../components/SensorSubmitForm";
import { deleteSensor, addSensor } from "../actions/sensor";

class Administracao extends Component {
  state = {
    open: "",
    modalOpen: false
  };

  toggleCollapse = e => {
    if (e.target.id === this.state.open) {
      this.setState({ open: "" });
    } else {
      this.setState({ open: e.target.id });
    }
  };

  toggleModal = e => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  modalContent = () => {
    let response;
    // eslint-disable-next-line default-case
    switch (this.state.open) {
      case "sensores":
        response = (
          <SensorSubmitForm
            marcas={this.props.marcas}
            tipos={this.props.tipos}
            tensoes={this.props.tensoes}
          />
        );
    }

    return response;
  };

  onDeleteSensor = e => {
    deleteSensor(e.target.name).then(data => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modalOpen}>{this.modalContent()}</Modal>

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
            <Button color="success" onClick={this.toggleModal}>
              Novo
            </Button>

            <SensorTable
              onDeleteSensor={this.onDeleteSensor}
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
