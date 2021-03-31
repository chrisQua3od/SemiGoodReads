const express = require("express")
const userModel = require('../models/users')
const userRouter = express.Router();
const UserController = require('../controllers/users')


///bassiony
userRouter.get("/:id/books", UserController.getBooks);
userRouter.get("/:id", UserController.getUser)
userRouter.post("/", UserController.saveNewUser);
userRouter.get("/:id/read", UserController.getReadBooks);
userRouter.get("/:id/wantToRead", UserController.getWantToReadBooks);
userRouter.get("/:id/currentlyReading", UserController.getCurrentlyReadingBooks);
///bassiony

userRouter.get("/", async (req, res) => {
    const user = await userModel.find({}).populate('books').exec()
    try {
        console.log(user);
        res.json(user)
    }
    catch (err) {
        console.log(err)
    }
})


module.exports = userRouter;