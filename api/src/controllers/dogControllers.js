const allDogs = require("../allDogs");
const { API_KEY, API_URL } = process.env;
const axios = require("axios");
//----------------------------------------------------------------------------------------------------------------------------------

const getBreed = async () => {
  // getting data from allDogs
  const dogs = await allDogs();
  //returning an array with all the dog breeds as objects
  const dogsName = dogs.map((dog) => ({ name: dog.name }));
  return dogsName;
};

//----------------------------------------------------------------------------------------------------------------------------------
// Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// Debe funcionar tanto para los perros de la API como para los de la base de datos
const getDogById = async (id) => {
  const dogs = await allDogs();
  const dogsId = dogs
    .filter((dog) => dog.id === +id)
    .map((dog) => ({
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.temperament?.split(",").map((temp) => temp.trim()) || []
    }));
  if (!dogsId[0])
    throw new Error(
      "The ID you entered is not valid. Please try again with another ID."
    );
  return dogsId;
};

//----------------------------------------------------------------------------------------------------------------------------------

const getDogByName = async () => {};

//----------------------------------------------------------------------------------------------------------------------------------

const createDog = async () => {};

module.exports = { getBreed, getDogById, getDogByName, createDog };
