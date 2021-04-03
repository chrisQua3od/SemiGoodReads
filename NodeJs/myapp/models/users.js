const mongoose = require("mongoose");
const booksModel = require('./books')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    photo: { type: String },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    ///chris
    userReview: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
    ////chris
    library: [{ bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" }, status: { type: String }, rating: { type: Number } }]

})
/////chris
UserSchema.post('save', function (doc) {
    booksModel.findByIdAndUpdate(doc.userReview, { $push: { reviews: doc._id } }, (err, posts) => {
        console.log("hello")
    })
});

/////chris

UserSchema.pre('save', function (next) {
    const doc = this
    if (doc.isNew) {
        bcrypt.hash(doc.password, 10, (err, hashedText) => {
            doc.password = hashedText;
            next()
        })

    }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;