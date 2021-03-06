const express = require("express");
const router = express.Router();

const VendorController = require("../controllers/VendorController");

router.get("/vendor", VendorController.vendor_getall); // Ruta para ver todos los vendedores.
router.post("/vendor", VendorController.vendor_register); // Mi ruta para el registro de vendedores tipo POST.
router.put("/vendor/:id", VendorController.vendor_update); // Cuando vamos a mandar un parámetro en la ruta se escribe : y el id.
router.delete("/vendor/:id", VendorController.vendor_delete); // Ruta para borrar un vendedor.
router.get("/vendor/:id", VendorController.vendor_getById); // Búsqueda por Id
module.exports = router;