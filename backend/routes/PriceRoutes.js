const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const PriceController = require("../controllers/PriceController");

router.get("/price", protect, PriceController.price_getall); // Ruta para ver todos los precios.
router.post("/price", protect, PriceController.price_register); // Mi ruta para el registro de precios tipo POST.
router.put("/price/:id", protect, PriceController.price_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/price/:id", protect, PriceController.price_delete); // Ruta para borrar un precio.
router.get("/price/:id", protect, PriceController.price_getById); // Búsqueda por Id
router.get("/price/post/:_post", protect, PriceController.price_getByPost); // Búsqueda por Post, solo el primer precios
router.get("/price/post/:_post/:opc", protect, PriceController.price_getByPostAll); // Búsqueda por Post
module.exports = router;