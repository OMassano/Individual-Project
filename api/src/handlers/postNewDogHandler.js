const { Dog, Temperament } = require("../db");
const postNewDogHandler = async (req, res) => {
  const { name, image, height, weight, life_span, temperaments } = req.body;
  try {
    const newDog = await Dog.create({ name, image, height, weight, life_span });

    const tempInDb = await Temperament.findAll({
      where: { name: temperaments },
    });

    await newDog.addTemperaments(tempInDb); // creating relationship

    const dogsInTemp = await Dog.findAll({
      where: { id: newDog.id },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    
    res.status(200).json(dogsInTemp);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = postNewDogHandler;
