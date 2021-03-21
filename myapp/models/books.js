const mongoose = require("mongoose");
const categoriesModel = require('./categories')
const AuthorModel = require('./author')

const booksSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  Cover: { type: String, required: true },
  name: { type: String, required: true },
  AvgRate: { type: Number,  },
  CategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  sumAvg: { type: Number },
  countAvg: { type: Number }
})

booksSchema.post('save', function (doc) {
  categoriesModel.findByIdAndUpdate(doc.CategoryId, { $push: { books: doc._id } }, (err, posts) => {
    console.log("hello")
  })

});

booksSchema.post('save', function (doc) {
  AuthorModel.findByIdAndUpdate(doc.author, { $push: { books: doc._id } }, (err, posts) => {
    console.log("hello2")
  })

});


const booksModel = mongoose.model("books", booksSchema)
module.exports = booksModel;