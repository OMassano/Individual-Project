const getDogByNameHandler = (req, res) => {
    try {
      res.status(200).send("hi, I am the route that returns the dog by name");
    } catch (error) {
      res.status(404).send(error.message);
    }
  };

  module.exports = getDogByNameHandler