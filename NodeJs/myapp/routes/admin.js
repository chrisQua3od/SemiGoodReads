const express = require("express")
const adminModel = require('../models/admin')
const adminRouter = express.Router();
const bcrypt = require('bcrypt')
adminRouter.post("/:adminName", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const { adminName } = req.params
    // try {
    //     const admin = await adminModel.findOne({adminName:adminName}).exec();
    //     if(admin == null){

    //         res.status(400).send({message:"user not found"})
    //     }
    //     res.json(admin)
        try {
            const admine = await adminModel.findOne({adminName:adminName}).exec()
            console.log(admine)
            if (!admine) {
        
              res.status(403).json({
        
              })
            }
            else {
                console.log(admine.password,"ho")
                console.log(req.body.password,"jj")
              const same = await bcrypt.compare(req.body.password, admine.password)
              if (!same) {
                console.log("error2")
                res.status(404).json({})
              }else{

res.status(200).send({auth:true})

              }
             
            }
          }
          catch (err) {
            console.log(err)
          }
        
    
    

})


.post("/", async (req, res) => {

    
    })

module.exports = adminRouter;