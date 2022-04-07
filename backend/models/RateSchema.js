const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
    rate:{
        type: Number,
        min: 1,
        max: 5,
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
const Rate = mongoose.model("rates", RateSchema);
module.exports = Rate; // Exporto mi modelo