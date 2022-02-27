const express = require("express");
const router = express.Router();

const PurchaseController = require("../controllers/PurchaseController");

router.get("/purchase", PurchaseController.purchase_getall); // Ruta para ver todos los usuarios.
router.post("/purchase", PurchaseController.purchase_register); // Mi ruta para el registro de usuarios tipo POST.
router.put("/purchase/:id", PurchaseController.purchase_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el nombre.
router.delete("/purchase/:id", PurchaseController.purchase_delete); // Ruta para borrar un usuario.
router.get("/purchase/:id", PurchaseController.purchase_getById); // Búsqueda por Id
module.exports = router;