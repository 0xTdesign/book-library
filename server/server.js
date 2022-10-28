("use strict");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const Book = require("./Models/book");

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extend: true }));

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  res.json("HOME MA BRU!!!!!");
});

//Retrieve all books
app.get("/books", async (req, res) => {
  try {
    // try and make a call to the database
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    // show the error if the "try" fails
    console.log(err);
    res.status(500).json(err);
  }
});

// retrieve a specific book
app.get("/books/:id", async (req, res) => {
  try {
    const theBook = await Book.find({ _id: req.params.id });
    res.status(200).json(theBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new book
app.post("/books", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(200).json(newBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// https://covers.openlibrary.org/b/id/12547191-L.jpg

// Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const bookToUpdate = req.params.id;
    const updatedBook = await Book.updateOne({ _id: bookToUpdate }, req.body);
    res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a book

app.delete("/books/:id", async (req, res) => {
  try {
    const bookToDelete = req.params.id;
    const deleteBook = await Book.deleteOne({ _id: bookToDelete });
    res.status(200).json(deleteBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(`App is listening on port${PORT}`));
