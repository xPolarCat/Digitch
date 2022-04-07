const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/CommentController");

router.get("/comment", CommentController.comment_getall); // Ruta para ver todos los comentarios.
router.post("/comment", CommentController.comment_register); // Mi ruta para el registro de comentarios tipo POST.
router.put("/comment/:id", CommentController.comment_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/comment/:id", CommentController.comment_delete); // Ruta para borrar un comentario.
router.get("/comment/:id", CommentController.comment_getById); // Búsqueda por Id
router.get("/comment/:_post", CommentController.comment_getByPost); // Obtener todos los comentarios de un post
module.exports = router;