const express = require("express");
const router = express.Router();
const uploader = require("../middleware/multer");
const {protect} = require('../middleware/authMiddleware');

const UserController = require("../controllers/UserController");

//router.use(protect);

router.get("/user", protect, UserController.user_getall); // Ruta para ver todos los usuarios.
router.post("/user", uploader.single("photo"), UserController.user_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/user/:id", protect, uploader.single("photo"), UserController.user_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/user/:id", protect, UserController.user_delete); // Ruta para borrar un usuario.
router.get("/user/:id", protect, UserController.user_getById); // Búsqueda por Id
router.post("/user/login", UserController.user_login); // mi login
router.get("/user/profile/me", protect, UserController.user_getMe); // Obtener mi propio id
module.exports = router;