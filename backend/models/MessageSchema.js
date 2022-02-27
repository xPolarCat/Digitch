const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content:{
        type: String,
        minlength: 1, // Mínimo de caracteres. 
        maxlength: 500, // Máximo de caracteres.
    },
    _sender:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    }],
    _receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
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
const Message = mongoose.model("messages", MessageSchema);
module.exports = Message; // Exporto mi modelo