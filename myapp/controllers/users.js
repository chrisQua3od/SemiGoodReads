const UserModel = require('../models/user')

//list all books for user
async function getBooks(userId) {
    return await UserModel.findById({ userId });
}
// list books with read status
async function getReadBooks() {

}