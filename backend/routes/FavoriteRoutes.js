const express = require("express");
const router = express.Router();

const FavoriteController = require("../controllers/FavoriteController");

router.get("/favorite", FavoriteController.favorite_getall); // Ruta para ver todos los vendedores favoritos.
router.post("/favorite", FavoriteController.favorite_register); // Mi ruta para el registro de vendedores favoritos tipo POST.
router.delete("/favorite/:id", FavoriteController.favorite_delete); // Ruta para eliminar un vendedor favorito.
router.get("/favorite/:id", FavoriteController.favorite_getById); // Búsqueda por Id
module.exports = router;