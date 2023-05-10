const postNewDogHandler = (req, res) => {
  try {
    res.status(200).send("hi, I am the route that posts a new dog");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = postNewDogHandler ;
