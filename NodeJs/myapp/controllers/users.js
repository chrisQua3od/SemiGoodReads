const UserModel = require('../models/users')


//Save new User
async function saveNewUser(req, res) {
    const userInstance = new UserModel({
        photo: req.body.photo,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        review: req.body.review,
        library: req.body.library
    })
    const user = await userInstance.save()
    try {
        console.log("instance saves", user)
        res.json(user)
    }
    catch (err) {
        console.log(err)
    }
}



//list all books for user
async function getBooks(req, res) {
    try {
        const userData = await UserModel.findById(req.params.id).populate({ path: 'library', populate: { path: 'bookId' } }).exec();
        res.status(200).send(userData.library)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// list books with read status
async function getReadBooks(req, res) {
    try {
        const readBooks = await getBooksByStatus(req.params.id, "read")
        res.status(200).send(readBooks)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getCurrentlyReadingBooks(req, res) {
    try {
        const readBooks = await getBooksByStatus(req.params.id, "current reading")
        res.status(200).send(readBooks)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getWantToReadBooks(req, res) {
    try {
        const readBooks = await getBooksByStatus(req.params.id, "want to read")
        res.status(200).send(readBooks)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getBooksByStatus(userId, status) {
    const allBooks = await UserModel.findOne({ _id: userId }).select({ library: 1, _id: 0 }).populate({ path: 'library', populate: { path: 'bookId' } }).exec()
    const readBooks = allBooks.library.filter((book) => book.status === status)
    return readBooks
}
async function addBookForUser(req, res) {
    try {
        await UserModel.findByIdAndUpdate(req.params.id, { $push: { library: req.body } })
        res.status(200).send("Book Added Succeffully");
    } catch (erro) {
        res.status(400).send("bad request")
    }
}

async function getUser(req, res) {
    try {
        res.status(200).send(await UserModel.findById(req.params.id));

    } catch (error) {
        res.status(400).send("UserID not Found");
    }
}
async function getUsers(req, res) {
    const user = await UserModel.find({}).populate({ path: 'library', populate: { path: 'bookId' } }).exec()
    try {
        console.log(user);
        res.json(user)
    }
    catch (err) {
        console.log(err)
    }
}
async function addBookReview(req, res) {
    console.log(req.body.review)
    try {
        await UserModel.findByIdAndUpdate(req.params.id,
            { '$set': { 'library.$[el].review': req.body.review } },
            {
                arrayFilters: [{ "el.bookId": req.body.bookId }],
                new: true
            })
        // {$set: {"myArray.$[el].value": 424214 } },

        res.status(200).send("Review Added Succeffully");
    } catch (error) {
        console.log(error.message)
        res.status(500).send("bad request")
    }
}
module.exports = {
    getBooks,
    getReadBooks,
    saveNewUser,
    getCurrentlyReadingBooks,
    getWantToReadBooks,
    getUser,
    addBookForUser,
    getUsers,
    addBookReview
}