const Post = require("../models/PostSchema"); // Traigo mi modelo Post.
const Vendor = require("../models/VendorSchema");
const User = require("../models/UserSchema");

// Obtener todos los posts 
exports.post_getall = async (req, res) =>{
    const data = await Post.find({sort:{created_at: -1} });

    res.send(data);
}

// Insert
exports.post_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    const userdb = await User.findById(body._user); // Valio si existe un usuario con el id recibido

    if(userdb){ // Si el usuario existe, entonces creo el post 
        // Validación de información 
        let newPost = new Post({created_at: Date.now(), body}); // Creo un objeto tipo post basado en mi modelo post.
        await newPost
        .save() // si newPost es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
        .then((newPost) => console.log("New post succesfully registered!", newPost))
        .catch((err) => {
            console.error("An error in the Post register has occurred.", err);
            res.send(err.errors);
        }); // Aquí guardo el nuevo post.

        res.send(newPost); // Regreso el objeto creado.
    }else{
        res.send({message: "The user does not exist"});
    }
}

// Update
exports.post_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    const userdb = await body._user; // Valio si mandé un usuario como parámetro

    if(!userdb){ // Si no mandé un usuario, entonces hago un update, debido a que no me interesa cambiar el id del usuario del post.
    try{
        const postdb = await Post.findById(id); // Hago una consulta basándome en el id. 

        if(postdb){
            // Actualizar el contenido de mi fila.
            const data = await Post.findOneAndUpdate(  
            // El id en mi base de datos se guarda con un _
                {_id: id}, // El primer parámetro es un objeto ya que está entre { }, aquí se guardan los criterios de búsqueda. 
                body, // El segundo parámetro es un objeto con los campos que se van a actualizar. 
                {returnOriginal: false}) // Query Options. Este sirve para que me muestre la data nueva y no la anterior.
            
            res.send({message: "Data updated correctly", data}); // data: data <-- es ambiguo, por lo tanto es lo mismo solo poner data
        }else{
            // Regresar un mensaje de error. 
            res.send({message: "The id does not exists"});
        }
    }catch(err){
        res.send(err);
    }
    }else{
        res.send({message: "You can not send the user as parameter to update a Post"});
    }

}

exports.post_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Post.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.post_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Post.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await Post.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Id does not exists."})
    }
}

exports.post_getByCategory = async (req, res) =>{
    const { category } = req.params;
    const data = await Post.find({'_category': {$in: category} , sort:{created_at: -1}}); // Busca posts basándonos en el id de una categoría

    if(data){
        res.send(data);
    }else{
        res.send({message: "Category does not exists."})
    }
}

exports.post_getByName = async (req, res) =>{
    const { name } = req.params;
    const data = await Post.find({name: { $regex: '.*' + name + '.*' }, sort:{created_at: -1} }); // Filtra por nombres de post similares al escrito

    if(data){
        res.send(data);
    }else{
        res.send({message: "Category does not exists."})
    }
}
