const express = require("express")
const adminModel = require('../models/admin')
const adminRouter = express.Router();
const bcrypt = require('bcrypt')
adminRouter.get("/:adminName", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const { adminName } = req.params
    // try {
    //     const admin = await adminModel.findOne({adminName:adminName}).exec();
    //     if(admin == null){

    //         res.status(400).send({message:"user not found"})
    //     }
    //     res.json(admin)
        
    // }
    // catch (err) {
    //     console.log(err);
    // }
    try {
        const admine = await adminModel.findOne({adminName:adminName}).exec();
        console.log(admine)
        if (!admine) {
    
          res.status(403).json({
    
          })
        }
        else {
          const same = await bcrypt.compare(req.body.password, admine.password)
          if (!same) {
            console.log("error2")
            res.status(404).json({})
          }
         
        }
      }
      catch (err) {
        console.log(err)
      }

}).post("/", async (req, res) => {

    const adminInstance = new adminModel({
        adminName: req.body.adminName,
        password: req.body.password,
        
    })

    const admin = await adminInstance.save()
    try {
        console.log("instance saves", admin)
        res.json(admin)
    }
    catch (err) {
        console.log(err)
    }

})


module.exports = adminRouter;