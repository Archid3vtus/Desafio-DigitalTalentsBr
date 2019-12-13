const express = require("express");
const Medida = require("../db/models").Medida;

const router = express.Router();

/**
 * Test route
 */
router.get("/", (req, res) => {
  res.status(200).send({ msg: "Medida route works!" });
});

/**
 * Get medidas given sensor id
 */
router.get("/list/:sensor_id", (req, res) => {
  Medida.findAll({
    where: {
      sensor_id: req.params.sensor_id
    }
  }).then(medida => {
    res.status(200).send(medida);
  });
});

/**
 * New medida for a sensor
 */
router.post("/add", (req, res) => {
  Medida.create({
    valor: req.body.valor,
    sensor_id: req.body.sensor_id
  }).then(medida => {
    res.status(200).send(medida);
  });
});

module.exports = router;
