const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db/models/index").sequelize;
const addData = require("./helpers/initialData");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using routes
const sensor = require("./routes/sensor");
const marca = require("./routes/marca");
const tipo = require("./routes/tipo");

app.use("/api/sensor", sensor);
app.use("/api/marca", marca);
app.use("/api/tipo", tipo);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  sequelize
    .query('SELECT 1 FROM "Sensor" LIMIT 0')
    .then(() => console.log("Tables are present"))
    .catch(err => {
      sequelize
        .sync({
          alter: true
        })
        .then(() => {
          addData();
        });
    });
});
