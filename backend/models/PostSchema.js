const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content:{
        type: String,
        minlength: 150, // Mínimo de caracteres. 
        maxlength: 500, // Máximo de caracteres.
    },
    images:[{
        type: String,
        required: true
    }],
    _price:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"prices",
        required: true
    }],
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    _category:{
        type: mongoose.Schema.Types.ObjectId,
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
const Post = mongoose.model("posts", PostSchema);
module.exports = Post; // Exporto mi modelo