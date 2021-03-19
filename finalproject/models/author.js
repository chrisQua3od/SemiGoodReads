const mongoose = require("mongoose");

const Authorschema = new mongoose.Schema({

    ID:{type : Number, required:true},
    photo: {type : String, required : true},
    fname: {type : String, required : true},
    lname: {type : String, required : true},
    dateOfBirth:{type:Date, required:true},
    books: [{ type: mongoose.Schema.Types.ObjectId,required: true, ref: 'books' }]
})



const AuthorModel = mongoose.model("Author",Authorschema)
module.exports = AuthorModel;