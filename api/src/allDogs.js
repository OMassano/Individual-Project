const { Dog, Temperament } = require("./db");
const axios = require("axios");
const { API_KEY, API_URL } = process.env;

// filtering data from my response in api to return the specific data im asking for, which will be put in the object
const filterDogsData = async (res) => {
  const filteredDogs = await res.data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span: dog.life_span,
    temperament:
          dog.temperament?.split(",").map((temp) => temp.trim()) || [],
  }));
  return filteredDogs;
};

const allDogs = async () => {
  const res = await axios.get(`${API_URL}?apikey=${API_KEY}`);
  const dogsInApi = await filterDogsData(res);
  const dogsInDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
    },
  });
  const dogsInDbValues = dogsInDb.map((dog) => dog.get({ plain: true }));
  
  const allDogs = [...dogsInApi, ...dogsInDbValues];
  allDogs.sort((a, b) => a.name.localeCompare(b.name));
  
  return allDogs;
};

module.exports = allDogs;
