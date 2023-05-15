const { getDogById } = require("../controllers/dogControllers");

const getDogByIDHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "db" : "api";
  console.log(source); // source is working

  try {
    console.log(id);
    const dogsId = await getDogById(id, source);
    res.status(200).json(dogsId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogByIDHandler;
