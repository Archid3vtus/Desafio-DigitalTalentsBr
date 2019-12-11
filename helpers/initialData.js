const Marca = require("../db/models").Marca;
const Tipo = require("../db/models").Tipo;
const Tensao = require("../db/models").Tensao;

const addData = function() {
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

  Marca.bulkCreate(marcasIniciais);
  Tipo.bulkCreate(tiposIniciais);
  Tensao.bulkCreate(tensoesIniciais);
};

module.exports = addData;
