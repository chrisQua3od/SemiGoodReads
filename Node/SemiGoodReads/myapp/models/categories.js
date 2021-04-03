const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({
    Name: { type: String, required:true },
    CategoryId: { type: Number, required:false },
    books: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'books' }]
})
const categoriesModel = mongoose.model("categories", categoriesSchema)
module.exports = categoriesModel;