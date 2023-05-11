const { getBreed, getDogByName } = require("../controllers/dogControllers");

const getDogBreedHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const dogsName = await getDogByName(name);
      res.status(200).json(dogsName);
    } 
    else {
      const dog = await getBreed();
      res.status(200).json(dog);
    }
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

module.exports = getDogBreedHandler;
