const allDogs = require("../allDogs");

const getAllDogsHandler = async (req, res) => {
  try {
    const allDogsData = await allDogs();
    const dogs = allDogsData.map((dog) => ({
      id: dog.id,
      image: dog.image,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.temperament.join(", "),
    }));
    console.log(dogs);
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllDogsHandler;
