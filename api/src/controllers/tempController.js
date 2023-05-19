const { API_KEY, API_URL } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");

const getAllTemperaments = async () => {
  const dogsInAPI = await axios.get(`${API_URL}?apikey=${API_KEY}`);
  const tempArray = [];
  const temps = await dogsInAPI.data
    .filter((dog) => dog.temperament !== null)
    .map((dog) => dog.temperament) // receiving temp from each dog in api
    .join(",")
    .split(",")
    .map((temp) => temp.trim()) // getting rid of spaces
    .map((temp) => {
      if (tempArray.includes(temp)) {
        console.log(
          `"${temp}" is a Temperament that already exists in this database!`
        );
        return null;
      } else {
        tempArray.push(temp);
        return { name: temp }; // Return an object with only the name field
      }
    })
    .filter((temp) => temp !== null);

  // Find all existing temperaments in the database
  const existingTemperaments = await Temperament.findAll();

  // Map the existing temperaments to an object that maps name -> id
  const existingTemperamentMap = {};
  existingTemperaments.forEach((temp) => {
    existingTemperamentMap[temp.name] = temp.id;
  });

  // Generate a new array of all temperaments, with unique IDs
  const allTemperaments = temps.map((temp, index) => {
    // If the temperament already exists in the database, use its existing ID
    if (existingTemperamentMap.hasOwnProperty(temp.name)) {
      return { id: existingTemperamentMap[temp.name], name: temp.name };
    } else {
      // Otherwise, assign a new unique ID
      return { id: index + 1, name: temp.name };
    }
  });

  const tempInDb = await Temperament.bulkCreate(allTemperaments);
  return tempInDb;
};

module.exports = getAllTemperaments;
