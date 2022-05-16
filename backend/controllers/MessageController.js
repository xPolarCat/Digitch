const Message = require("../models/MessageSchema");
const User = require("../models/UserSchema");
const Post = require("../models/PostSchema");


// Obtener todos los mensajes 
exports.message_getall = async (req, res) =>{
    const data = await Message.find();

    res.send(data);
}

// Mi método para registrar mensajes 
exports.message_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    const senderdb = await User.findById(body._sender); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const receiverdb = await User.findById(body._receiver);
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(senderdb){
        if(receiverdb){
            // Validación de información 
            let message = new Message(body); // Creo un objeto tipo message basado en mi modelo Message.

            await message
            .save() // si message es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
            .then((message) => console.log("New message succesfully registered!", message))
            .catch((err) => {
                console.error("An error in the message register has occurred.", err)
                res.send(err.errors);
            }); // Aquí guardo el nuevo mensaje.

            res.send(message); // Regreso el objeto creado.
        }else{
            res.send({message: "The user/sender does not exists"});
        }
    }else{
        res.send({message: "The user/receiver does not exists"});
    }
}

// Update
exports.message_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    const senderdb = await User.findById(body._sender); // Esto me sirve para revisar si existe un usuario con el id que recibo
    const receiverdb = await Post.findById(body._receiver); // * NOTA: Cambiar a User
    // Esto me sirve para revisar si existe un post con el id que recibo

    if(senderdb){
        if(receiverdb){
            try{
                const messagedb = await Message.findById(id); // Hago una consulta basándome en el id. 

                if(messagedb){
                    // Actualizar el contenido de mi fila.
                    const data = await Message.findOneAndUpdate(  
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
            res.send({message: "The user/sender does not exists"});
        }
    }else{
        res.send({message: "The user/receiver does not exists"});
    }
}

exports.message_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Message.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.message_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Message.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Message does not exists."})
    }
}

exports.message_getByUsers = async (req, res) =>{
    const { users } = req.params;

    const data = await Message.find( 
        { $or: [{_receiver: users._receiver}, {_sender: users._sender}]}, // Donde mi usuario 1 es el que envía y el 2 el que recibe 
        { $or: [{_receiver: users._sender}, {_sender: users._receiver}]}) // Donde mi usuario 2 es el que envía y el 2 el que recibe
    
    if(data){
        res.send(data);
    }else{
        res.send({message: "Message does not exists."})
    }
}