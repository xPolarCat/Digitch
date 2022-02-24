const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.post("/user", UserController.user_register); // Mi ruta para el registro de usuarios tipo POST.

module.exports = router;