const express = require("express")
const bookModel = require('../models/books')
const bookRouter = express.Router();


bookRouter.post("/", async (req, res) => {

    const bookInstance = new bookModel({
        author: req.body.author,
        Cover: req.body.Cover,
        name: req.body.name,
        CategoryId : req.body.CategoryId,
    })

    const book = await bookInstance.save()
    try {

        console.log("instance saves", book)
        res.json(book)
    }
    catch (err) {
        console.log(err)
    }

})
.get("/", async(req, res) => {
    const book = await bookModel.FindByAuthor().populate("author").exec();
    try {
        console.log(book);
        res.json(book)
    }
    catch (err) {
        console.log(err)
    }
    console.log("Done");
}).get("/:id", async (req, res) => {

    const { id } = req.params
    const book = await bookModel.findById(id).populate("author").exec();
    try {
        console.log(book);
        res.json(book)
    }
    catch (err) {
        console.log(err)
    }
    console.log("Done");
}).delete("/:id", async (req, res) => {
    const result = await bookModel.findByIdAndRemove({ _id: req.params.id }, { author: req.body.author, Cover: req.body.Cover,  name: req.body. name, CategoryId: req.body.CategoryId })
    try {
        res.json(result);

    }
    catch (err) {
        console.log(err);
    }
}).patch("/:id", async (req, res) => {

    const { id } = req.params;
    const book = req.body
    const updatedBook = {
        ...(book.author ? { author: book.author } : {}),
        ...(book.Cover ? { Cover: book.Cover } : {}),
        ...(book.name ? { name: book.name } : {}),
        ...(book.CategoryId ? { CategoryId: book.CategoryId } : {}),
    
    }

    try {
        const bookA = await bookModel.findOneAndUpdate({ _id: id }, updatedBook)
        res.json(bookA)

    } catch (error) {
        return console.log("Error : failed to update book with id: " + id);
    }
})

module.exports = bookRouter;