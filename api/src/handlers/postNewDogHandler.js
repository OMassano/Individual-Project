const { createDog } = require("../controllers/dogControllers");

const postNewDogHandler = async (req, res) => {
  const { name, image, height, weight, lifespan, temperament } = req.body;
  try {
    const newDog = await createDog({name, image, height, weight, lifespan, temperament});
    res.status(200).json(newDog);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = postNewDogHandler;
