const { Router } = require("express");
const dogRouter = require("./dogRouter");
const tempRouter = require("./tempRouter");

const router = Router();

// Configurar los routers
router.use("/dogs", dogRouter);
router.use("/temperaments", tempRouter);

module.exports = router;
