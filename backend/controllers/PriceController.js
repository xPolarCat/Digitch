const Post = require("../models/PostSchema");
const Price = require("../models/PriceSchema"); // Traigo mi modelo Price.

// Obtener todos los precios 
exports.price_getall = async (req, res) =>{
    const data = await Price.find();

    res.send(data);
}

// Insert
exports.price_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body.

    const postdb = await Post.findById(body._post); // Valio si existe un post con el id recibido

    if(postdb){ // Si el post existe, entonces creo el post 
        // Validación de información 
        let newPrice = new Price({name: body.name, price: body.price, description: body.description, _post: body._post, created_at: body.created_at}); // Creo un objeto tipo Price basado en mi modelo Price.
        await newPrice
        .save() // si newPost es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
        .then((newPrice) => console.log("New post succesfully registered!", newPrice))
        .catch((err) => {
            console.error("An error in the Post register has occurred.", err);
            res.send(err.errors);
        }); // Aquí guardo el nuevo precio.

        res.send(newPrice); // Regreso el objeto creado.
    }else{
        res.send({message: "The price does not exist"});
    }
}

// Update
exports.price_update = async (req, res) => {
    const { id } = req.params; // Los params son los que se envían en el URL.
    const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto

    const postdb = await body._post; // Valio si mandé un post como parámetro

    if(!postdb){ // Si no mandé un post, entonces hago un update, debido a que no me interesa cambiar el id del post al que pertenece el precio.
    try{
        const pricedb = await Price.findById(id); // Hago una consulta basándome en el id. 

        if(pricedb){
            // Actualizar el contenido de mi fila.
            const data = await Price.findOneAndUpdate(  
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

exports.price_delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Price.deleteOne({_id:id}); // deleteOne borra el primer dato que coincida con la búsqueda. deleteMany borra todos los que coincidan
        res.send({message: "Data has been deleted succefully"});
    }catch(err){
        res.send(err);
    }
}


exports.price_getById = async (req, res) =>{
    const { id } = req.params;
    // Método optimizado para buscar por ids.
    const data = await Price.findById(id); // Encuentra el primer registro que coincide con la condición. 
    //const data = await Post.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

    if(data){
        res.send(data);
    }else{
        res.send({message: "Price does not exists."})
    }
}

exports.price_getByPost = async (req, res) =>{
    const { post } = req.params;

    console.log("entre al normal");
    //Tuve que convertir el objeto a string
    const myJSON = JSON.stringify(req.params);

    //Despues separarlo para que solo me quedara el numero y no exista un error
    const splitString = myJSON.split(":");
    const splitString2= splitString[1].split("}");
    const splitString3 = splitString2[0].split(' " ');
    const idFinal= splitString3[0].slice(1,25);
    // Método optimizado para buscar por ids.
    //const data = await Price.find({_post: idFinal}); // Encuentra el primer registro que coincide con la condición. 
    const data = await Price.findOne({_post: idFinal}); 
    // Es lo mismo que hacer lo de arriba


    if(data){
        res.send(data);
    }else{
        res.send({message: "Comments do not exist in this post."})
    }
}

exports.price_getByPostAll = async (req, res) =>{
    const { post } = req.params;

    console.log("entre al que quiero");
    //Tuve que convertir el objeto a string
    const myJSON = JSON.stringify(req.params);

    //Despues separarlo para que solo me quedara el numero y no exista un error
    const splitString = myJSON.split(":");
    const splitString2= splitString[1].split("}");
    const splitString3 = splitString2[0].split(' " ');
    const idFinal= splitString3[0].slice(1,25);
    // Método optimizado para buscar por ids.
    const data = await Price.find({_post: idFinal}); // Encuentra el primer registro que coincide con la condición. 
    //const data = await Price.findOne({_post: idFinal}); 
    // Es lo mismo que hacer lo de arriba


    if(data){
        res.send(data);
    }else{
        res.send({message: "Comments do not exist in this post."})
    }
}