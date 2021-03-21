const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({

 
    photo: {type : String, required : true},
    fname: {type : String, required : true},
    lname: {type : String, required : true},
    email: {type : String, required : true},
    password :{type : String , required : true},
    library:[{ }]
  
})
UserSchema.pre('save',function(next){
    const doc = this
    if(doc.isNew){
        bcrypt.hash(doc.password,10,(err , hashedText)=>{
            doc.password = hashedText;
            next()
        })

    }
})

const UserModel = mongoose.model("Users",UserSchema)
module.exports = UserModel;