const mongoose = require('mongoose');

// Mi esquema recibe como parámetro los atributos que tendrá. Este hace referencia a mi tabla Users de la DB
const CategorySchema = new mongoose.Schema({
    name:{  // Podemos poner las características de cada atributo de la siguiente manera y funcionan como validaciones.
        type: String, // Tipo de dato.
        required: true, // Es requerido. 
        minlength: 4, // Mínimo de caracteres. 
        maxlength: 60 // Máximo de caracteres.
    },
    description:{
        type: String, // Tipo de dato.
        required: true, // Es requerido. 
        minlength: 10, // Mínimo de caracteres. 
        maxlength: 300, // Máximo de caracteres.
    },
    created_at:{
        type: Date,
        required: false
    },
    updated_at:{
        type:Date, 
        required: false
    },
    deleted_at:{
        type:Date, 
        required: false
    },
}); 

// Este es el modelo, el cual tendrá las funcionalidades que requiero. 
const Category = mongoose.model("categories", CategorySchema);  // El primer parámetro "category" es cómo quiero que se llame el collection en mi BD
module.exports = Category; // Exporto mi modelo Category