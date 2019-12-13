import React, { Component } from "react";
import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class TipoSubmitForm extends Component {
  state = {
    nome: "",
    sulfixo: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    this.props.action(this.state).then(res => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <ModalHeader toggle={this.props.toggleModal}>
          Cadastro de tipo de sensor
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input
                name="nome"
                type="text"
                value={this.state.nome}
                onChange={this.onInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="sulfixo">Sufixo</Label>
              <Input
                name="sulfixo"
                type="text"
                value={this.state.sulfixo}
                onChange={this.onInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.submitForm}>
            Salvar
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

export default TipoSubmitForm;
