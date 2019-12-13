const Marca = require("../db/models").Marca;
const Tipo = require("../db/models").Tipo;
const Tensao = require("../db/models").Tensao;
const Sensor = require("../db/models").Sensor;
const Tamanho = require("../db/models").Tamanho;
const Localizacao = require("../db/models").Localizacao;

const addData = async function() {
  let marcasIniciais = [
    {
      nome: "A1"
    },
    {
      nome: "B3"
    },
    {
      nome: "T10"
    }
  ];

  let tiposIniciais = [
    {
      nome: "Temperatura",
      sulfixo: "°C"
    },
    {
      nome: "Corrente elétrica",
      sulfixo: "volts"
    },
    {
      nome: "Pressão",
      sulfixo: "atm"
    },
    {
      nome: "Intensidade luminosa",
      sulfixo: "lumens"
    },
    {
      nome: "Aceleração",
      sulfixo: "m/s²"
    }
  ];

  let tensoesIniciais = [
    {
      valor: 1.5
    },
    {
      valor: 3.0
    }
  ];

  let sensorInicial = {
    codename: "Sensor teste 1",
    tensao_id: 2,
    tipo_id: 1,
    marca_id: 1
  };

  let tamanhoInicial = {
    altura: 2,
    largura: 2,
    comprimento: 2
  };

  let localizacaoInicial = {
    latitude: -19.8157,
    longitude: -43.9542
  };

  await Marca.bulkCreate(marcasIniciais);
  await Tipo.bulkCreate(tiposIniciais);
  await Tensao.bulkCreate(tensoesIniciais);

  Sensor.create(sensorInicial).then(async sensor => {
    tamanhoInicial.sensor_id = sensor.id;
    localizacaoInicial.sensor_id = sensor.id;

    await Tamanho.create(tamanhoInicial);
    await Localizacao.create(localizacaoInicial);
  });
};

module.exports = addData;
