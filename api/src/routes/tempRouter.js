const express = require("express");
const { Temperament } = require("../db");
const getAllTemperaments = require("../controllers/tempController");

const tempRouter = express.Router();

tempRouter.get("", async (req, res) => {
  try {
    const temperaments = await Temperament.findAll();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(404).send(error.message);
    console.log(error);
  }
});

tempRouter.get("/update", async (req, res) => {// for first time to store in db
  try {
    const updatedTemperaments = await getAllTemperaments();
    res.status(200).json(updatedTemperaments);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});

module.exports = tempRouter;
