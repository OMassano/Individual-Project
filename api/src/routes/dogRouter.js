const express = require("express");
const dogRouter = express.Router();

const getByIdHandler = require("../handlers/getDogByIDHandler")
const getDogBreedHandler = require("../handlers/getDogBreedHandler");
const postNewDogHandler = require("../handlers/postNewDogHandler");

// all of dogRouter starts with "/dogs"
dogRouter.get("", getDogBreedHandler);
dogRouter.get("/:id", getByIdHandler);
dogRouter.post("", postNewDogHandler);

module.exports = dogRouter;
