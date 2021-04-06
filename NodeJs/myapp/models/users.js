const mongoose = require("mongoose");
const booksModel = require('./books')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    photo: { type: String },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    library: [{
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" }, status: { type: String },
        rating: { type: Number }, review: { type: String }
    }]
})



const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;