const Category = require("../models/CategorySchema"); // Traigo mi modelo Category.

// Obtener todas las categorías 
exports.category_getall = async (req, res) =>{
    const data = await Category.find();

    res.send(data);
}

// Mi método para registrar categorías 
exports.category_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    // Validación de información 
    let newCategory = new Category(body); // Creo un objeto tipo Category basado en mi modelo Category.

    await newCategory
    .save() // si newCategory es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
    .then((newCategory) => console.log("New user succesfully registered!", newCategory))
    .catch((err) => {
        console.error("An error in the User register has occurred.", err)
        res.send(err.errors);
    }); // Aquí guardo la nueva categoría.

    res.send(newCategory); // Regreso el objeto creado.
}

// Update
exports.category_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    try{
        const categorydb = await Category.findById(id); // Hago una consulta basándome en el id. 

        if(categorydb){
            // Actualizar el contenido de mi fila.
            const data = await Category.findOneAndUpdate(  
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

exports.category_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Category.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.category_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Category.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Id does not exists."})
    }
}