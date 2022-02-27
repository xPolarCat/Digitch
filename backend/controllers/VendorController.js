const Vendor = require("../models/VendorSchema"); // Traigo mi modelo vendor.

// Obtener todos los usuarios 
exports.vendor_getall = async (req, res) =>{
    const data = await Vendor.find();

    res.send(data);
}

// Mi método para registrar usuarios 
exports.vendor_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    // Validación de información 
    let newVendor = new Vendor(body); // Creo un objeto tipo vendor basado en mi modelo Vendor.

    await newVendor
    .save() // si newVendor es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
    .then((newVendor) => console.log("New vendor succesfully registered!", newVendor))
    .catch((err) => {
        console.error("An error in the Vendor register has occurred.", err)
        res.send(err.errors);
    }); // Aquí guardo el nuevo usuario.

    res.send(newVendor); // Regreso el objeto creado.
}

// Update
exports.vendor_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    try{
        const venordb = await Vendor.findById(id); // Hago una consulta basándome en el id. 

        if(venordb){
            // Actualizar el contenido de mi fila.
            const data = await Vendor.findOneAndUpdate(  
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

exports.vendor_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Vendor.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.vendor_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Vendor.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await Vendor.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Id does not exists."})
    }
}