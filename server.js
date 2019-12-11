const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).send("success!");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
