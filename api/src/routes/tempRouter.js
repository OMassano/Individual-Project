const express = require("express");
const getAllTemperaments = require("../controllers/tempController");
const tempRouter = express.Router();
tempRouter.get("", async (req, res) => {
  try {
    const temperaments = await getAllTemperaments();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = tempRouter;
