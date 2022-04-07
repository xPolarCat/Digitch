const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 1, // Mínimo de caracteres. 
        maxlength: 30, // Máximo de caracteres.
        required: true
    },
    price:{
        type: Number,
        default: 20,
        required: true
    },
    description:{
        type: String,
        minlength: 10, // Mínimo de caracteres. 
        maxlength: 200, // Máximo de caracteres.
        required: true
    },
    _post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required: true
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
const Price = mongoose.model("prices", PriceSchema);
module.exports = Price; // Exporto mi modelo