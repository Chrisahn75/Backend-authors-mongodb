const express = require("express");
const mongoose = require("mongoose");
const authors = require("./models/authorsModel");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
  });
const app = express();

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI,
		{
			useNewUrlParser: true,
		}
	)
	.then(() => console.log("Connected to MongoDB"));

app.get("/", (_req, res) => {
    res.send("Authors API");
});

app.post("/authors", async (req, res) => {
	await authors.create(req.body);

	res.status(201).json({
		message: "authors created",
	});
});

app.get("/authors", async (_req, res) => {
	const author = await authors.find();

	res.json(author);
});

app.use("*", (err, req, res, next) => {
	res.send("error");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});