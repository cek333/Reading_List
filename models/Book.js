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
  authors: {
    type: [String],
    default: ['']
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/125'
  },
  link: {
    type: String,
    default: 'https://books.google.com/'
  }
});

//BookSchema.set('toJSON', { getters: true, virtuals: true });
//BookSchema.set('toObject', { getters: true, virtuals: true });

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
