const express = require("express");
const path = require("path");
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
const tensao = require("./routes/tensao");
const medida = require("./routes/medida");

app.use("/api/sensor", sensor);
app.use("/api/marca", marca);
app.use("/api/tipo", tipo);
app.use("/api/tensao", tensao);
app.use("/api/medida", medida);

// serve react build
app.use(express.static(path.join(__dirname, "client")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

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
