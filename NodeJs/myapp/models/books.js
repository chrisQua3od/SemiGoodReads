const mongoose = require("mongoose");
const categoriesModel = require('./categories')
const AuthorModel = require('./author')

const booksSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "author" },
  cover: { type: String, required: true },
  name: { type: String, required: true },
  avgRate: { type: Number, },
  categoryId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "categories" },
  sumAvg: { type: Number },
  countAvg: { type: Number },
  ///chris
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
  ///chris
})

///chris
booksSchema.post('save', function (doc) {
  categoriesModel.findByIdAndUpdate(doc.categoryId, { $push: { books: doc._id } }, (err, posts) => {
    console.log("hello")
  })
});
///chris

booksSchema.post('save', function (doc) {
  AuthorModel.findByIdAndUpdate(doc.author, { $push: { books: doc._id } }, (err, posts) => {
    console.log("hello2")
  })

});

booksSchema.statics.FindAll = function () {
  return this.find({})
}

booksSchema.statics.FindByCategory = function () {
  return this.find({ "_id": "60550b98f614a772827c0a8f" })
}

booksSchema.statics.FindByAuthor = function () {
  return this.find({ "_id": "60550b98f614a772827c0a8f" })
}

const booksModel = mongoose.model("books", booksSchema)
module.exports = booksModel;