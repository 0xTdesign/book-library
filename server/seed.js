const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./Models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create({
    title: "The Hobit",
    description: "Small people running around for 2hrs",
    year: "1937",
  });
  await Book.create({
    title: "StarWars",
    description: "Lots of spaceships",
    year: "1977",
  });
  console.log("Books Summoned");
}

seed();
