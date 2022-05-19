const User = require("../models/UserSchema"); // Traigo mi modelo User.
const {Storage} = require("@google-cloud/storage");


const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});


// Obtener todos los usuarios 
exports.user_getall = async (req, res) =>{
    const data = await User.find();

    res.send(data);
}

// Mi método para registrar usuarios 
exports.user_register = async (req, res) =>{
    const { body, file } = req; // Obtenemos la info del body.
    console.log("Body user: ", req); 
    const us = req.body;
    // if(!file){
    //     res.status(400).send({code: "400", message: "File does not exist"});
    // }

    // const bucket = storage.bucket(process.env.GCLOUD_BUCKET_URL);
    //         const blob = bucket.file(file.originalname);
    //         const blobStream = blob.createWriteStream({
    //             metadata:{
    //                 contentType: file.mimeType, // Especificamos el tipo de dato que queremos mandar. 
    //             },
    //         });
    
    //         blobStream.on("error", (err) => next(err));
            
    //         blobStream.on("finish", async ()  =>{
    //             const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`
    //             body.photo = publicUrl;
    //             // Validación de información 
    //             let newUser = new User(body); // Creo un objeto tipo User basado en mi modelo User.
            
    //             await newUser
    //             .save() // si newUser es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
    //             .then((newUser) => console.log("New user succesfully registered!", newUser))
    //             .catch((err) => {
    //                 console.error("An error in the User register has occurred.", err)
    //                 res.send(err.errors);
    //             }); // Aquí guardo el nuevo usuario.

    //             res.send(newUser); // Regreso el objeto creado.
    //             return newUser;
                
    //         });
    //         blobStream.end(file.buffer);
}

// Update
exports.user_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    try{
        const userdb = await User.findById(id); // Hago una consulta basándome en el id. 

        if(userdb){
            // Actualizar el contenido de mi fila.
            const data = await User.findOneAndUpdate(  
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

}

exports.user_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await User.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.user_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await User.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Id does not exists."})
    }
}

exports.user_login = async (req, res) =>{
    const { body } = req;
    // Método optimizado para buscar por ids.
    const data = await User.find({email: body.email, password: body.password}); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "incorrect user or password."})
    }
}