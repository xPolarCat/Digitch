const mongoose = require('mongoose'); // Usaré la librería mongoose que me sirve para conectar con JS mi aplicación a MongoDB.

mongoose.Promise = global.Promise; // Indicamos que la interacción que generamos con mongoose se pueda utilizar de forma global.

mongoose
    .connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {useNewUrlParser:true})
    .then(()=> console.log("Succefully connected to MongoDB"))
    .catch(() => {
        console.error("Could not connect to MongoDB");
        process.exit();
    }); // Mi conexión con MongoDB