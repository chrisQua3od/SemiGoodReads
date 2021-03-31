const express = require("express")
const bookModel = require('../models/books')
const bookRouter = express.Router();


bookRouter.post("/", async (req, res) => {

    const bookInstance = new bookModel({
        author: req.body.author,
        cover: req.body.cover,
        name: req.body.name,
        categoryId: req.body.categoryId,
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
    .get("/", async (req, res) => {
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
        const result = await bookModel.findByIdAndRemove({ _id: req.params.id }, { author: req.body.author, cover: req.body.cover, name: req.body.name, categoryId: req.body.categoryId })
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
            ...(book.cover ? { cover: book.cover } : {}),
            ...(book.name ? { name: book.name } : {}),
            ...(book.categoryId ? { categoryId: book.categoryId } : {}),

        }

        try {
            const bookA = await bookModel.findOneAndUpdate({ _id: id }, updatedBook)
            res.json(bookA)

        } catch (error) {
            return console.log("Error : failed to update book with id: " + id);
        }
    })

module.exports = bookRouter;