const express = require("express");
const Tipo = require("../db/models").Tipo;

const router = express.Router();

/**
 * Test Route
 */
router.get("/", (req, res) => {
  res.status(200).send({ msg: "Tipo route works!" });
});

/**
 * Get all tipo
 */
router.get("/list", (req, res) => {
  Tipo.findAll().then(tipo => {
    res.status(200).send(tipo);
  });
});

/**
 * Register a new tipo
 */
router.post("/add", (req, res) => {
  Tipo.create({ nome: req.body.nome, sulfixo: req.body.sulfixo }).then(tipo => {
    return res.status(200).send(tipo);
  });
});

module.exports = router;
