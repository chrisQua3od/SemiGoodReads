const express = require("express")
const categoriesModel = require('../models/categories')
const categoriesRouter = express.Router();
categoriesRouter.post("/", async (req, res) => {

    const categoriesInstance = new categoriesModel({
        Name: req.body.Name,
        CategoryId: req.body.CategoryId,
        books: req.body.books

    })

    const category = await categoriesInstance.save()
    try {
        console.log("instance saves", category)
        res.json(category)
    }
    catch (err) {
        console.log(err)
    }

})
.get("/", async(req, res) => {
    const category = await categoriesModel.find({})
    try {
        console.log(category);
        res.json(category)
    }
    catch (err) {
        console.log(err)
    }
})
// categoriesRouter.get("/:id", async (req, res) => {
//     const { id } = req.params
//     try {
//         const category = await categoriesModel.findById(id).exec()
//         res.json(category)
//     }
//     catch (err) {
//         console.log(err)
//     }
//     categoriesRouter.patch("/id", async (req, res) => {
//         const category = await categoriesModel.findByIdAndUpdate({

// })
//     })
// })

module.exports = categoriesRouter;