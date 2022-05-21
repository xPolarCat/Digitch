const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const FavoriteController = require("../controllers/FavoriteController");

router.get("/favorite", FavoriteController.favorite_getall); // Ruta para ver todos los vendedores favoritos.
router.post("/favorite", FavoriteController.favorite_register); // Mi ruta para el registro de vendedores favoritos tipo POST.
router.delete("/favorite/:id", FavoriteController.favorite_delete); // Ruta para eliminar un vendedor favorito.
router.get("/favorite/:id", protect, FavoriteController.favorite_getById); // Búsqueda por Id
router.get("/favorite/user/:id", protect, FavoriteController.favorite_getUserFavorites); // Favoritos por usuario

module.exports = router;