const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 20, // Mínimo de caracteres. 
        maxlength: 150, // Máximo de caracteres.
        required: true
    },
    content:{
        type: String,
        minlength: 20, // Mínimo de caracteres. 
        maxlength: 500, // Máximo de caracteres.
        required: true
    },
    images:[{
        type: String,
        required: true
    }],
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },
    _category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"categories",
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