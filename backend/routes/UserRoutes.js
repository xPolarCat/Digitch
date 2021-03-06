const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/user", UserController.user_getall); // Ruta para ver todos los usuarios.
router.post("/user", UserController.user_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/user/:id", UserController.user_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/user/:id", UserController.user_delete); // Ruta para borrar un usuario.
router.get("/user/:id", UserController.user_getById); // Búsqueda por Id
router.post("/user", UserController.user_login); // mi login

module.exports = router;