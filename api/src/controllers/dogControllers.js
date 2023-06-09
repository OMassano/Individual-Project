const allDogs = require("../allDogs");
//----------------------------------------------------------------------------------------------------------------------------------

const getBreed = async () => {
  // getting data from allDogs
  const dogs = await allDogs();
  // console.log(dogs)
  //returning an array with all the dog breeds as objects
  const dogsName = dogs.map((dog) => ({ name: dog.name }));
  return dogsName;
};

//----------------------------------------------------------------------------------------------------------------------------------

const getDogById = async (id, source) => {
  const dogs = await allDogs();
  if (source === "api") {
    const dogsIdApi = dogs.filter((dog) => dog.id === +id);
    if (!dogsIdApi[0])
      throw new Error(
        "The ID you entered is not valid. Please try again with another ID."
      );
    return dogsIdApi;
  } else {
    const dogsIdDb = dogs.filter((dog) => String(dog.id) === String(id));
    if (!dogsIdDb[0])
      throw new Error(
        "The ID you entered is not valid. Please try again with another ID."
      );
    return dogsIdDb;
  }
};

//----------------------------------------------------------------------------------------------------------------------------------

const getDogByName = async (name) => {
  const dogs = await allDogs();
  const dogName = dogs.filter(
    (dog) =>
      dog.name.toLowerCase().replace(/ /g, "") ===
      name.toLowerCase().replace(/ /g, "")
  );
  if (!dogName[0])
    throw new Error(
      "There are no dogs of that breed. Please try again with a different breed."
    );
  return dogName;
};

//----------------------------------------------------------------------------------------------------------------------------------

module.exports = { getBreed, getDogById, getDogByName };
