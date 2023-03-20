const mongoose = require("mongoose");

// Define the schema for a Hadith
const hadithSchema = new mongoose.Schema({
  book: String, // The book in which the Hadith is found
  chapter: String, // The chapter in the book
  hadithNumber: Number, // The number of the Hadith in the book
  text: String, // The text of the Hadith
  narrator: String, // The narrator of the Hadith
  reference: String, // The reference for the Hadith
});

// Create a model based on the schema
const Hadith = mongoose.model("Hadith", hadithSchema);

module.exports = Hadith;
