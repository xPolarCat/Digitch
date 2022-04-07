const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    _favorite:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"vendors",
        required: true
    },
    created_at:{
        type: Date,
        required: false
    },
});

// Este es el modelo, el cual tendrá las funcionalidades que requiero. 
const Favorite = mongoose.model("favorites", FavoriteSchema);
module.exports = Favorite; // Exporto mi modelo