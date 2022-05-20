const express = require("express");
const router = express.Router();
const uploader = require("../middleware/multer");
const {protect} = require('../middleware/authMiddleware');

const PostController = require("../controllers/PostController");


router.get("/post",  PostController.post_getall); // Ruta para ver todos los posts.
router.post("/post", protect, uploader.single("images"), PostController.post_register); // Mi ruta para el registro de posts tipo POST. "images" es el nombre del campo donde guardaremos la imagen.
router.put("/post/:id", protect, uploader.single("images"), PostController.post_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/post/:id", PostController.post_delete); // Ruta para borrar un post.
router.get("/post/:id", protect, PostController.post_getById); // Búsqueda por Id
router.get("/posts/category/:id", protect, PostController.post_getByCategory) // Búsqueda por Categoría
router.get("/posts/search/:name", protect, PostController.post_getByName) // Búsqueda por Nombre
router.get("/posts/user/:id", PostController.post_getByUser); // Búsqueda por usuario

module.exports = router;