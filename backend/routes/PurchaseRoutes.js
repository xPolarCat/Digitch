const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

const PurchaseController = require("../controllers/PurchaseController");

router.get("/purchase", protect, PurchaseController.purchase_getall); // Ruta para ver todas las compras.
router.post("/purchase", protect, PurchaseController.purchase_register); // Mi ruta para el registro de compras tipo POST.
router.put("/purchase/:id", protect, PurchaseController.purchase_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/purchase/:id", protect, PurchaseController.purchase_delete); // Ruta para borrar una compra.
router.get("/purchase/:id", protect, PurchaseController.purchase_getById); // Búsqueda por Id
router.get("/purchase/user/:id", PurchaseController.purchase_getByUser); // Búsqueda por Id

module.exports = router;