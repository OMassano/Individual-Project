const { Dog, Temperament } = require("./db");
const axios = require("axios");
const { API_KEY, API_URL } = process.env;

// filtering data from my response in api to return the specific data im asking for, which will be put in the object
const filterDogsData = (response) => {
  const filteredDogs = response.data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image,
    height: dog.height,
    weight: dog.weight,
    life_span: dog.life_span,
    temperament:
          dog.temperament?.split(",").map((temp) => temp.trim()) || [],
  }));
  return filteredDogs;
};

const allDogs = async () => {
  const res = await axios.get(`${API_URL}?apikey=${API_KEY}`);
  const dogsInApi = filterDogsData(res);
  const dogsInDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
    },
  });
  return [...dogsInApi, ...dogsInDb];
};

module.exports = allDogs;
