const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db/models/index").sequelize;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using routes
const sensor = require("./routes/sensor");

app.use("/api/sensor", sensor);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  sequelize
    .query('SELECT 1 FROM "Sensor" LIMIT 0')
    .then(() => console.log("Tables are present"))
    .catch(err => {
      console.log(err);
      sequelize.sync({
        alter: true
      });
    });
});
