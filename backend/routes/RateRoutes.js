const express = require("express");
const router = express.Router();

const RateController = require("../controllers/RateController");

router.get("/rate", RateController.rate_getall); // Ruta para ver todas las calficaciones.
router.post("/rate", RateController.rate_register); // Mi ruta para el registro de calificaciones tipo POST.
router.put("/rate/:id", RateController.rate_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/rate/:id", RateController.rate_delete); // Ruta para borrar una calificación.
router.get("/rate/:id", RateController.rate_getById); // Búsqueda por Id
router.get("/rate/user/:_user", RateController.rate_getByUser); // Búsqueda por usuario. 
router.get("/rate/post/:_post", RateController.rate_getByPost); // Búsqueda por post.
module.exports = router;