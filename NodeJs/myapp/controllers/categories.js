const categoriesModel = require('../models/categories');


//find all categories
async function listCategories() {
    // console.log(categoriesModel.find({}))
    return await categoriesModel.find({});
}
module.exports = {
    listCategories,
}