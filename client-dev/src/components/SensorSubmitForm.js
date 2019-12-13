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

class SensorSubmitForm extends Component {
  state = {
    codename: "",
    altura: 0,
    largura: 0,
    comprimento: 0,
    latitude: 0,
    longitude: 0,
    tipo_id: 1,
    marca_id: 1,
    tensao_id: 1
  };

  submitForm = e => {
    if (this.props.sensor) {
      this.props.action(this.state, this.props.sensor.id).then(data => {
        window.location.reload();
      });
    } else {
      this.props.action(this.state).then(data => {
        window.location.reload();
      });
    }
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (this.props.sensor) {
      this.setState({
        codename: this.props.sensor.codename,
        altura: this.props.sensor.Tamanho.altura,
        largura: this.props.sensor.Tamanho.largura,
        comprimento: this.props.sensor.Tamanho.comprimento,
        latitude: this.props.sensor.Localizacao.latitude,
        longitude: this.props.sensor.Localizacao.longitude,
        tipo_id: this.props.sensor.tipo_id,
        marca_id: this.props.sensor.marca_id,
        tensao_id: this.props.sensor.tensao_id
      });
    }
  }

  render() {
    return (
      <div>
        <ModalHeader toggle={this.props.toggleModal}>
          Cadastro de sensor
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col>
                <FormGroup>
                  <Label for="codename">Codenome</Label>
                  <Input
                    type="text"
                    name="codename"
                    id="codename"
                    placeholder="Insira um apelido"
                    value={this.state.codename}
                    onChange={this.onChangeInput}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="altura">Dimensões</Label>
                  <Input
                    id="altura"
                    name="altura"
                    type="number"
                    placeholder="Altura"
                    value={this.state.altura}
                    onChange={this.onChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="largura">‎‎‎‎‎</Label>
                  <Input
                    id="largura"
                    name="largura"
                    type="number"
                    placeholder="Largura"
                    value={this.state.largura}
                    onChange={this.onChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="comprimento">‎‎‎‎‎‎</Label>
                  <Input
                    id="comprimento"
                    name="comprimento"
                    type="number"
                    placeholder="Comprimento"
                    value={this.state.comprimento}
                    onChange={this.onChangeInput}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="latitude">Localização</Label>
                  <Input
                    id="latitude"
                    name="latitude"
                    type="number"
                    placeholder="Latitude"
                    value={this.state.latitude}
                    onChange={this.onChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="latitude">‎</Label>
                  <Input
                    id="longitude"
                    name="longitude"
                    type="number"
                    placeholder="Longitude"
                    value={this.state.longitude}
                    onChange={this.onChangeInput}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="marca">Marca</Label>
                  <Input
                    id="marca"
                    name="marca_id"
                    type="select"
                    value={this.state.marca_id}
                    onChange={this.onChangeInput}
                  >
                    {this.props.marcas.length !== 0
                      ? this.props.marcas.map((marca, i) => {
                          return (
                            <option value={marca.id} key={i}>
                              {marca.nome}
                            </option>
                          );
                        })
                      : null}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="tensao">Tensão da bateria</Label>
                  <Input
                    id="tensao"
                    name="tensao_id"
                    type="select"
                    value={this.state.tensao_id}
                    onChange={this.onChangeInput}
                  >
                    {this.props.tensoes.length !== 0
                      ? this.props.tensoes.map((tensao, i) => {
                          return (
                            <option value={tensao.id} key={i}>
                              {tensao.valor}
                            </option>
                          );
                        })
                      : null}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <Label for="tipo">Tipo de sensor</Label>
                  <Input
                    id="tipo"
                    name="tipo_id"
                    type="select"
                    value={this.state.tipo_id}
                    onChange={this.onChangeInput}
                  >
                    {this.props.tipos.length !== 0
                      ? this.props.tipos.map((tipo, i) => {
                          return (
                            <option value={tipo.id} key={i}>
                              {tipo.nome}
                            </option>
                          );
                        })
                      : null}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
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

export default SensorSubmitForm;
