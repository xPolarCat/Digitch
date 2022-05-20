const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const MessageController = require("../controllers/MessageController");

router.get("/message", protect, MessageController.message_getall); // Ruta para ver todos los mensajes.
router.post("/message", protect, MessageController.message_register); // Mi ruta para el registro de mensajes tipo POST.
router.put("/message/:id", protect, MessageController.message_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/message/:id", protect, MessageController.message_delete); // Ruta para borrar un mensaje.
router.get("/message/:id", protect, MessageController.message_getById); // Búsqueda por Id
router.post("/message/users", protect, MessageController.message_getByUsers); // Búsqueda de mensajes entre dos usuarios

module.exports = router;