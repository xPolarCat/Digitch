const mongoose = require('mongoose');
const passwordValidator = require('password-validator');

// // Validación de password 
// var password = new passwordValidator();

// password
// .is().min(8)            // Minimum length 8
// .is().max(30)           // Maximum length 100
// .has().uppercase()      // Must have uppercase letters
// .has().lowercase()      // Must have lowercase letters
// .has().digits(2)        // Must have at least 2 digits
// .has().not().spaces()   // Should not have spaces

// Mi esquema recibe como parámetro los atributos que tendrá. Este hace referencia a mi tabla Users de la DB
const UserSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId, // Mi id va a ser tipo ObjectId 
        default: new mongoose.Types.ObjectId(), // Genero un ObjectId como valor default.
        unique: true
    },
    name:{  // Podemos poner las características de cada atributo de la siguiente manera y funcionan como validaciones.
        type: String, // Tipo de dato.
        required: true, // Es requerido. 
        minlength: 4, // Mínimo de caracteres. 
        maxlength: 60 // Máximo de caracteres.
    },
    email:{
        type: String, // Tipo de dato.
        lowercase: true, // En minúsculas.
        required: true, // Es requerido. 
        minlength: 8, // Mínimo de caracteres. 
        maxlength: 30, // Máximo de caracteres.
        trim: true, // Sin espacios en blanco.
        unique: true,
        validate: { // validación para saber si se ingresó un correo
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        }
    },

    password:{
        type: String
    },

    phone:{
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^[0-9]{10}/.test(v);
          },
          message: '{VALUE} is not a valid 10 digit number!'
        }
    },

}); 

// Este es el modelo, el cual tendrá las funcionalidades que requiero. 
const User = mongoose.model("user", UserSchema);  // El primer parámetro "user" es cómo quiero que se llame el collection en mi BD
module.exports = User; // Exporto mi modelo User
