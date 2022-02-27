const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/CommentController");

router.get("/comment", CommentController.comment_getall); // Ruta para ver todos los usuarios.
router.post("/comment", CommentController.comment_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/comment/:id", CommentController.comment_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/comment/:id", CommentController.comment_delete); // Ruta para borrar un usuario.
router.get("/comment/:id", CommentController.comment_getById); // Búsqueda por Id
module.exports = router;