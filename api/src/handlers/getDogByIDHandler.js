const  {getDogById}  = require("../controllers/dogControllers");

const getByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id)
    const dogsId = await getDogById(id);
    res.status(200).json(dogsId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getByIdHandler;
