const express = require("express");
const router = express.Router();

const PriceController = require("../controllers/PriceController");

router.get("/price", PriceController.price_getall); // Ruta para ver todos los usuarios.
router.post("/price", PriceController.price_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/price/:id", PriceController.price_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/price/:id", PriceController.price_delete); // Ruta para borrar un usuario.
router.get("/price/:id", PriceController.price_getById); // Búsqueda por Id
module.exports = router;