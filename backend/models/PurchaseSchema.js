const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    cost:{
        type: Number,
        required: true
    },
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
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
const Purchase = mongoose.model("purchases", PurchaseSchema);
module.exports = Purchase; // Exporto mi modelo