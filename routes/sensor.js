const express = require("express");

const router = express.Router();

/**
 * Test route
 */
router.get("/", (req, res) => {
  return res.status(200).send({ msg: "Sensor route works!" });
});

/**
 * Return all sensors
 */
router.get("/list", (req, res) => {});

/**
 * Add a new sensor
 */
router.post("/add", (req, res) => {});

/**
 * Edit a sensor
 */
router.put("/edit", (req, res) => {});

/**
 * Delete a sensor
 */
router.delete("/remove", (req, res) => {});

module.exports = router;
