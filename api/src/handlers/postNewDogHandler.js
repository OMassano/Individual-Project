const { createDog } = require("../controllers/dogControllers");
const { Dog, Temperament } = require("../db");
const postNewDogHandler = async (req, res) => {
  const { name, image, height, weight, life_span, temperamentId } = req.body;
  try {
    const newDog = await Dog.create({ name, image, height, weight, life_span });

    //if they passed me a temperamentId, it means that there is a relationshipd between dog and temp
    if(temperamentId){
      const temp = await Temperament.findByPk(temperamentId)
      //relationship
      await newDog.setTemperament(temp)
    }
    res.status(200).json(newDog);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = postNewDogHandler;
