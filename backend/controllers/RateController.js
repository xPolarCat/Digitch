const Post = require('../models/PostSchema');
const Rate = require('../models/RateSchema');
const User = require('../models/UserSchema');

// Obtener todas las calificaciones 
exports.rate_getall = async (req, res) =>{
    const data = await Rate.find();

    res.send(data);
}

// Mi método para registrar calificaciones 
exports.rate_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    const userdb = await User.findById(body._user); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const postdb = await Post.findById(body._post);
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(userdb){
        if(postdb){
            // Validación de información 
            let rate = new Rate(body); // Creo un objeto tipo Rate basado en mi modelo Rate.

            await rate
            .save() // si rate es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
            .then((rate) => console.log("New message succesfully registered!", rate))
            .catch((err) => {
                console.error("An error in the message register has occurred.", err)
                res.send(err.errors);
            }); // Aquí guardo la nueva calificación.

            res.send(rate); // Regreso el objeto creado.
        }else{
            res.send({message: "The post does not exists"});
        }
    }else{
        res.send({message: "The user does not exists"});
    }
}

// Update
exports.rate_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    const userdb = await User.findById(body._user); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const postdb = await Post.findById(body._post);
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(!userdb){
        if(!postdb){
            try{
                const ratedb = await Rate.findById(id); // Hago una consulta basándome en el id. 

                if(ratedb){
                    // Actualizar el contenido de mi fila.
                    const data = await Rate.findOneAndUpdate(  
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
            res.send({message: "You can not edit the user"});
        }
    }else{
        res.send({message: "You can not edit the post"});
    }
}

exports.rate_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Rate.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}

exports.rate_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Rate.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Message does not exists."})
    }
}