const express = require("express");
const router = express.Router();

const PostController = require("../controllers/PostController");

router.get("/post", PostController.post_getall); // Ruta para ver todos los usuarios.
router.post("/post", PostController.post_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/post/:id", PostController.post_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/post/:id", PostController.post_delete); // Ruta para borrar un usuario.
router.get("/post/:id", PostController.post_getById); // Búsqueda por Id
module.exports = router;