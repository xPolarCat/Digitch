const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const CategoryController = require("../controllers/CategoryController");

router.get("/category", CategoryController.category_getall); // Ruta para ver todas las categorías.
router.post("/category", protect, CategoryController.category_register); // Mi ruta para el registro de categorías tipo POST.
router.put("/category/:id", protect, CategoryController.category_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/category/:id", protect, CategoryController.category_delete); // Ruta para borrar una categoría.
router.get("/category/:id", protect, CategoryController.category_getById); // Búsqueda por Id
module.exports = router;