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

module.exports = router;
