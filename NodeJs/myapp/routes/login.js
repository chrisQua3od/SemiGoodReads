const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users')
const loginRoute = express.Router();
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
      const same = await bcrypt.compare(req.body.password, useree.password)
      if (!same) {
        console.log("error2")
        res.status(404).json({})
      }
      else {
        const token = await jwt.sign({ user: useree }, "secretkeyaya123")
         console.log("ok")
        res.json({ token })
     }
    }
  }
  catch (err) {
    console.log(err)
  }
})

module.exports = loginRoute;