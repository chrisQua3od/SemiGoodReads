const mongoose = require("mongoose");

const Authorschema = new mongoose.Schema({

    ID: {type : Number, required:true},
    photo: {type : String},
    fname: {type : String, required : true},
    lname: {type : String, required : true},
    dateOfBirth:{type:Date, required:true},
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }]
})


module.exports = mongoose.model("Author",Authorschema);