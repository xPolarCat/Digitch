const Favorite = require("../models/FavoriteSchema");
const User = require("../models/UserSchema");
const Vendor = require("../models/VendorSchema");


// Obtener todos los usuarios 
exports.favorite_getall = async (req, res) =>{
    const data = await Favorite.find();

    res.send(data);
}

// Mi método para registrar usuarios 
exports.favorite_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    const userdb = await User.findById(body._sender); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const favoritedb = await Vendor.findById(body._receiver);
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(userdb){
        if(favoritedb){
            // Validación de información 
            let favorite = new Favorite(body); // Creo un objeto tipo Comment basado en mi modelo Comment.

            await favorite
            .save() // si newComment es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
            .then((favorite) => console.log("New favorite succesfully registered!", favorite))
            .catch((err) => {
                console.error("An error in the favorite register has occurred.", err)
                res.send(err.errors);
            }); // Aquí guardo el nuevo usuario.

            res.send(favorite); // Regreso el objeto creado.
        }else{
            res.send({message: "The user does not exists"});
        }
    }else{
        res.send({message: "The user/favorite does not exists"});
    }
}


exports.favorite_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Favorite.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.favorite_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Favorite.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Favorite does not exists."})
    }
}