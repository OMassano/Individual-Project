const { getBreed } = require("../controllers/dogControllers");

const getDogBreedHandler = async (req, res) => {
  try {
    const dog = await getBreed();
    res.status(200).json(dog);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = getDogBreedHandler;
