const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({
    Name: { type: String, required:true },
    CategoryID: { type: Number, required:true },
    books: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'books' }]
})
const categoriesModel = mongoose.model("categories", categoriesSchema)
module.exports = categoriesModel;