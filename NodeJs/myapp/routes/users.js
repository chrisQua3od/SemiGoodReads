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
userRouter.patch("/:id/addBook", UserController.addBookForUser)
userRouter.patch("/:id/addReview", UserController.addBookReview)
///bassiony

userRouter.get("/", UserController.getUsers);
module.exports = userRouter;