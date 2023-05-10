const { Dog } = require("./db");
const axios = require("axios");
const { API_KEY, API_URL } = process.env;

const filterDogsData = (response) => {
  const filteredDogs = response.data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image,
    height: dog.height,
    weight: dog.weight,
    life_span: dog.life_span,
  }));
  return filteredDogs;
};

const allDogs = async () => {
  const res = await axios.get(`${API_URL}?apikey=${API_KEY}`);
  const dogsInApi = filterDogsData(res);
  const dogsInDb = await Dog.findAll();
  return [...dogsInApi, ...dogsInDb];
};

module.exports = allDogs;
