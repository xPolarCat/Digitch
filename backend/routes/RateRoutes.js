const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const RateController = require("../controllers/RateController");

router.get("/rate", protect, RateController.rate_getall); // Ruta para ver todas las calficaciones.
router.post("/rate", protect, RateController.rate_register); // Mi ruta para el registro de calificaciones tipo POST.
router.put("/rate/:id", protect, RateController.rate_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/rate/:id", protect, RateController.rate_delete); // Ruta para borrar una calificación.
router.get("/rate/:id", protect, RateController.rate_getById); // Búsqueda por Id
router.get("/rate/user/:_user", protect, RateController.rate_getByUser); // Búsqueda por usuario. 
router.get("/rate/post/:_post", protect, RateController.rate_getByPost); // Búsqueda por post.
module.exports = router;