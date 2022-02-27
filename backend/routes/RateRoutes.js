const express = require("express");
const router = express.Router();

const RateController = require("../controllers/RateController");

router.get("/rate", RateController.rate_getall); // Ruta para ver todos los usuarios.
router.post("/rate", RateController.rate_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/rate/:id", RateController.rate_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/rate/:id", RateController.rate_delete); // Ruta para borrar un usuario.
router.get("/rate/:id", RateController.rate_getById); // Búsqueda por Id
module.exports = router;