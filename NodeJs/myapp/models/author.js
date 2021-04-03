const mongoose = require("mongoose");

const Authorschema = new mongoose.Schema({

<<<<<<< HEAD
    ID: {type : Number, required:true},
    photo: {type : String},
    fname: {type : String, required : true},
    lname: {type : String, required : true},
    dateOfBirth:{type:Date, required:true},
=======
    ID: { type: Number, required: true },
    photo: { type: String },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
>>>>>>> a6cdc413b466c1d95e31a3ffc295d7ad640f31a7
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }]
})


module.exports = mongoose.model("author", Authorschema);