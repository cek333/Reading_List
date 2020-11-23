const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  authors: [String],
  description: String,
  image: String,
  link: String
});

//BookSchema.set('toJSON', { getters: true, virtuals: true });
//BookSchema.set('toObject', { getters: true, virtuals: true });

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
