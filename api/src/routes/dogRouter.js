const express= require("express");
const dogRouter = express.Router();
const{ Dog, Temperament} = require("../db")

// all of dogRouter starts with "/dogs"
dogRouter.get("", (req, res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports = dogRouter;
