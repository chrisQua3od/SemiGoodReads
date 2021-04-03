var mongoose = require("mongoose");

 

const atlasUri="mongodb+srv://semiGoodReadings:book1234@semigoodreadings.jkudq.mongodb.net/semiGoodReadings?retryWrites=true&w=majority";
//var mongoDB = "mongodb://127.0.0.1/blogApp";

 

//mongoose.
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>console.log("atlaaas"))
.catch((err)=>console.log("errrrrrrrrrrrrrrrrrrrrrrr\n",err));