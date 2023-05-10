const { Router } = require("express");
const tempRouter = Router();

tempRouter.get("", (req, res)=>{
    try {
        res.status(200).send("hi I am the route that returns a temperament")
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = tempRouter
