const Comment = require("../models/CommentSchema"); // Traigo mi modelo Comment.
const User = require("../models/UserSchema");
const Post = require("../models/PostSchema");
const { post } = require("../routes/UserRoutes");

// Obtener todos los comentarios 
exports.comment_getall = async (req, res) =>{
    const data = await Comment.find();

    res.send(data);
}

// Mi método para registrar comentarios 
exports.comment_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    const userdb = await User.findById(body._user); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const postdb = await Post.findById(body._post); 
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(userdb){
        if(postdb){
            // Validación de información 
            let comment = new Category(body); // Creo un objeto tipo Comment basado en mi modelo Comment.

            await comment
            .save() // si newComment es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
            .then((comment) => console.log("New comment succesfully registered!", comment))
            .catch((err) => {
                console.error("An error in the Comment register has occurred.", err)
                res.send(err.errors);
            }); // Aquí guardo el nuevo usuario.

            res.send(comment); // Regreso el objeto creado.
        }
    }
}

// Update
exports.comment_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    const userdb = await User.findById(body._user); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const postdb = await Post.findById(body._post); 
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(userdb){
        if(postdb){
            try{
                const commentdb = await Comment.findById(id); // Hago una consulta basándome en el id. 

                if(commentdb){
                    // Actualizar el contenido de mi fila.
                    const data = await Comment.findOneAndUpdate(  
                    // El id en mi base de datos se guarda con un _
                        {_id: id}, // El primer parámetro es un objeto ya que está entre { }, aquí se guardan los criterios de búsqueda. 
                        body, // El segundo parámetro es un objeto con los campos que se van a actualizar. 
                        {returnOriginal: false}) // Query Options. Este sirve para que me muestre la data nueva y no la anterior.
                    
                    res.send({message: "Data updated correctly", data}); // data: data <-- es ambiguo, por lo tanto es lo mismo solo poner data
                }else{
                    // Regresar un mensaje de error. 
                    res.send({message: "The comment does not exists"});
                }
            }catch(err){
                res.send(err);
            }
        }else{
            res.send({message: "The post does not exists"});
        }
    }else{
        res.send({message: "The user does not exists"});
    }
}

exports.comment_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Comment.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.comment_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Comment.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Id does not exists."})
    }
}

exports.comment_getByPost = async (req, res) =>{
    const { post } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Comment.find({_post: post}); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Comments do not exist in this post."})
    }
}