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
    const category = await categoriesModel.find({}).populate("books").exec()
    try {
        console.log(category);
        res.json(category)
    }
    catch (err) {
        console.log(err)
    }
})


.get("/:id", async (request, response)=> {
    const { id } = request.params
    try {
        const category = await categoriesModel.findById(id).populate("books").exec()
        response.json(category);
    } catch (error) {
        return console.log(error);
    }
})

.delete("/:id", async (request, response)=> {
    const { id } = request.params
    try {
        const deletedcategory = await categoriesModel.deleteOne({_id: id})
        response.send("categoriesModel Deleted Correctly")
    } catch (error) {
        return console.log(error);
    }
})

.patch("/:id", async (request, response)=> {
    const { id } = request.params;
    const category = request.body
    const updatedcategory = {
        ...(category.Name ? { Name: category.Name } : {}),
        ...(category.CategoryId ? { CategoryId: category.CategoryId  } : {})

    }

    try {
        const updatededcategory = await categoriesModel.findOneAndUpdate({ _id: id }, updatedcategory)
        response.json(updatededcategory)
    } catch (error) {
        return console.log(error);
    }
})

module.exports = categoriesRouter;