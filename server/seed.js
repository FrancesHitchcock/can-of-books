const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({
    title: "Martin the warrier",
    description:
      "Red horse series - fantacy novel published 1993. About a little mouse",
    status: false,
  });
  await Book.create({
    title: "Music and Silence",
    description:
      "Brilliant historical novel full of passion and desire with a magical flavour",
    status: false,
  });
  await Book.create({
    title: "The Mother",
    description:
      "A revolutinery factory workers story - brilliant novel Maxim Gorky",
    status: false,
  });
  console.log("running seed funciton");
  mongoose.disconnect();
}
seed();
