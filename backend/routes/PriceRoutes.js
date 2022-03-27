const express = require("express");
const router = express.Router();

const PriceController = require("../controllers/PriceController");

router.get("/price", PriceController.price_getall); // Ruta para ver todos los precios.
router.post("/price", PriceController.price_register); // Mi ruta para el registro de precios tipo POST.
router.put("/price/:id", PriceController.price_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/price/:id", PriceController.price_delete); // Ruta para borrar un precio.
router.get("/price/search/:id", PriceController.price_getById); // Búsqueda por Id
router.get("/price/:_post", PriceController.price_getByPost); // Búsqueda por Post
module.exports = router;