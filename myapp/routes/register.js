const express = require("express");
const router = express.Router();
const UserModel = require('../models/user')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
router.post('/', async function (req, res) {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userInctance = new UserModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword
    })
    console.log(userInctance)
    await userInctance.save()
    try {
        const token = jwt.sign({ id: userInctance._id }, config.secret);
        res.status(200).send({ auth: true, token: token });
    }
    catch {
        return res.status(500).send("There was a problem register user");
    }
});

module.exports = router;