const multer = require("multer");

const uploader = multer({
    storage: multer.memoryStorage() // Esto me sirve para guardar una imagen en la memoria del servidor. 
});

module.exports = uploader;