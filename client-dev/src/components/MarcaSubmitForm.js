import React, { Component } from "react";
import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";

class MarcaSubmitForm extends Component {
  state = {
    nome: ""
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
          Cadastro de marca
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

export default MarcaSubmitForm;
