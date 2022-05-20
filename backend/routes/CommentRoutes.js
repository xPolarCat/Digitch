const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const CommentController = require("../controllers/CommentController");

router.get("/comment", protect, CommentController.comment_getall); // Ruta para ver todos los comentarios.
router.post("/comment", protect, CommentController.comment_register); // Mi ruta para el registro de comentarios tipo POST.
router.put("/comment/:id", protect, CommentController.comment_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/comment/:id", protect, CommentController.comment_delete); // Ruta para borrar un comentario.
router.get("/comment/:id", CommentController.comment_getById); // Búsqueda por Id
router.get("/comment/post/:_post", CommentController.comment_getByPost); // Obtener todos los comentarios de un post
module.exports = router;