const UserModel = require('../models/users')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

async function register(req, res) {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userInctance = new UserModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword
    })
    await userInctance.save()
    try {
        const token = jwt.sign({ id: userInctance._id }, config.secret);
        res.status(200).send({ auth: true, token: token });
    }
    catch {
        return res.status(500).send("There was a problem register user");
    }
}

module.exports = {
    register
}