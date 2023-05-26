const express = require("express");
const dogRouter = express.Router();

const {getDogByIDHandler, getDogBreedHandler, postNewDogHandler} = require("../handlers/index")

// all of dogRouter starts with "/dogs"
dogRouter.get("", getDogBreedHandler);
dogRouter.get("/:id", getDogByIDHandler);

dogRouter.post("", postNewDogHandler);


module.exports = dogRouter;
