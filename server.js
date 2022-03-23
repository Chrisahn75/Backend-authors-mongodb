const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use("*", (err, req, res, next) => {
	res.send("error");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});