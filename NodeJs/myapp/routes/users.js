const express = require("express")
const userModel = require('../models/users')
const userRouter = express.Router();
const UserController = require('../controllers/users')

///bassiony
userRouter.get("/:id/books", UserController.getBooks);
userRouter.get("/:id", UserController.getUser)
userRouter.patch("/:id", UserController.updateUser)
userRouter.post("/", UserController.saveNewUser);
userRouter.get("/:id/read", UserController.getReadBooks);
userRouter.get("/:id/wantToRead", UserController.getWantToReadBooks);
userRouter.get("/:id/currentlyReading", UserController.getCurrentlyReadingBooks);
userRouter.post("/:id/addBook", UserController.addBookForUser);
userRouter.post("/:id/addReview", UserController.addBookReview);
userRouter.post("/:id/addRating", UserController.addBookRating);
userRouter.patch("/:id/editRating", UserController.editBookRating);
///bassiony

userRouter.get("/", UserController.getUsers);


module.exports = userRouter;