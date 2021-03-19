const mongoose = require('mongoose')

const mongoDB_URL= process.env.mongoDB_URL || "mongodb://localhost:27017/blogApp"
mongoose.connect(mongoDB_URL , {useNewUrlParser : true ,useUnifiedTopology: true}
    ,(err)=>{
if(err) console.log(err);
else console.log("createIndexes")

})