const { Router } = require("express");
const dogRouter = require("./dogRouter");
const tempRouter = require("./tempRouter");
const getAllDogsHandler = require("../handlers/getAllDogsHandler");

const router = Router();

// Configurar los routers
router.use("/dogs", dogRouter);
router.use("/temperaments", tempRouter);

router.get("/getalldogs", getAllDogsHandler)

module.exports = router;
