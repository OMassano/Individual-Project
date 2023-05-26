const { Dog, Temperament } = require("./db");
const axios = require("axios");
const { API_KEY, API_URL } = process.env;
//getting all info from each dog same thing as map of dogsInDb
const filterDogsData = async (res) => {
  const filteredDogs = res.data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    height: dog.height.imperial,
    weight: dog.weight.imperial,
    life_span: dog.life_span,
    temperament: dog.temperament
      ? dog.temperament.split(",").map((temp) => temp.trim())
      : [],
  }));
  return filteredDogs;
};
// getting all dogs from axios
const allDogs = async () => {
  const res = await axios.get(`${API_URL}?apikey=${API_KEY}`);
  const dogsInApi = await filterDogsData(res);

  const dogsInDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
    },
  });
// getting all of the info for each dog
  const dogsInDbValues = dogsInDb.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image,
    height: dog.height,
    weight: dog.weight,
    life_span: dog.life_span,
    temperament: dog.Temperaments.map((temp) => temp.name),
  }));

  const allDogs = [...dogsInApi, ...dogsInDbValues];
  //alphabetical order
  allDogs.sort((a, b) => a.name.localeCompare(b.name));

  return allDogs;
};

module.exports = allDogs;
