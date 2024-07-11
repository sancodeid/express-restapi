const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("Sugeng rawuh wonten api kula");
});

app.listen(PORT, () => {
  console.log("Running on port" + PORT);
});
