const express = require("express");
const router = express.Router();

const MessageController = require("../controllers/MessageController");

router.get("/message", MessageController.message_getall); // Ruta para ver todos los mensajes.
router.post("/message", MessageController.message_register); // Mi ruta para el registro de mensajes tipo POST.
router.put("/message/:id", MessageController.message_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/message/:id", MessageController.message_delete); // Ruta para borrar un mensaje.
router.get("/message/search/:id", MessageController.message_getById); // Búsqueda por Id
router.get("/message/:id", MessageController.message_getByUsers); // Búsqueda de mensajes entre dos usuarios

module.exports = router;