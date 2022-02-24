const User = require("../models/UserSchema"); // Traigo mi modelo User.

// Mi método para registrar usuarios 
exports.user_register = async (req, res) =>{
    const { body } = req; // Obtenemos la info del body

    // Validación de información 

    let newUser = new User(body); // Creo un objeto tipo User basado en mi modelo User

    await newUser
    .save() // si newUser es un objeto de un modelo ya existentem lo actualiza y si es nuevo, lo inserta. 
    .then((newUser) => console.log("New user succesfully registered!", newUser))
    .catch((err) => console.error("An error in the User register has occurred.", err)); // Aquí guardo el nuevo usuario

    res.send(newUser); // Regreso el objeto creado 
}