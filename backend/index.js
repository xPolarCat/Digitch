const bodyParser = require("body-parser");
const express = require("express"); // Mando a llamar el contenido de mi librería.
const app = express(); // Con la constante express creamos la aplicación y app representa nuestro servicio.
const port = 5000; // Puerto en donde se ejecutará el servicio dentro de nuestra computadora.

require('./models/connection'); // Agrego el archivo de conexión para poder utilizarlo.

// REQUIRES DE MIS RUTAS //
const user_router = require("./routes/UserRoutes");

// --------------------- //

app.use(bodyParser.json()); // Sirve para mandar objetos y leerlos en formato JSON.

app.listen(port, () => {
    console.log("La aplicación está escuchando al puerto " + port);  // Me dice el puerto que está escuchando el servicio
});

// Mis rutas: //
app.use('/api', user_router);





// app.get("/api/holamundo", async (req, res) =>{
//     const { query } = req; // destructuring: descompone una variable en varias partes.
//     console.log(query.param1); // con esto le decimos que imprima el parámetro 1.
//     res.send({message: "Mi primer API REST"});
// });