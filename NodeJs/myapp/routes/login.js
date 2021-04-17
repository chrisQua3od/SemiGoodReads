const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users')
const loginRoute = express.Router();
const config = require('../config');
const bcrypt = require('bcrypt')

loginRoute.post("/", async (req, res) => {

  try {
    const useree = await UserModel.findOne({ email: req.body.email })
    console.log(useree)
    if (!useree) {
      res.status(403).json({
      })
    }
    else {
      console.log(useree.password)
      console.log(req.body.password)
      const same = await bcrypt.compare(req.body.password, useree.password)
      console.log(same)
      if (!same) {
        console.log("error2")
        res.status(404).json({})
      }
      else {
        const token = await jwt.sign({ user: useree }, config.secret)
        console.log("ok")
        res.status(200).send({ auth: true, userId: useree._id, token });
      }
    }
  }
  catch (err) {
    console.log(err)
  }
})

module.exports = loginRoute;