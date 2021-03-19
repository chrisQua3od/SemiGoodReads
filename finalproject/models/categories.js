const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({
    Name: { type: String, requirerd },
    CategoryId: { type: Number, requirerd },
    books: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'books' }]
})
const categoriesModel = mongoose.model("categories", categoriesSchema)
module.exports = categoriesModel;