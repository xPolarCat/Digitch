const express = require("express");
const router = express.Router();

const MessageController = require("../controllers/MessageController");

router.get("/message", MessageController.message_getall); // Ruta para ver todos los usuarios.
router.post("/message", MessageController.message_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/message/:id", MessageController.message_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/message/:id", MessageController.message_delete); // Ruta para borrar un usuario.
router.get("/message/:id", MessageController.message_getById); // Búsqueda por Id
module.exports = router;