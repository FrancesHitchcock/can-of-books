const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bp.json());

const Book = require("./models/book");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("This is the root endpoint");
});

app.get("/books", async (request, response) => {
  try {
    const allBooks = await Book.find(request.query);
    response.status(200).json(allBooks);
  } catch (error) {
    response.status(404).json(error);
  }
});

app.delete("/books/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    response.status(200).send(deletedBook);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.post("/books", async (request, response) => {
  try {
    const newBook = await Book.create(request.body);
    response.status(200).json(newBook);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
