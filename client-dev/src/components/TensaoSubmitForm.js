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

class TensaoSubmitForm extends Component {
  state = {
    valor: ""
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
          Cadastro de tensao de bateria
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="valor">valor</Label>
              <Input
                name="valor"
                type="text"
                value={this.state.valor}
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

export default TensaoSubmitForm;
