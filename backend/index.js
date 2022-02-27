const bodyParser = require("body-parser");
const express = require("express"); // Mando a llamar el contenido de mi librería.
const app = express(); // Con la constante express creamos la aplicación y app representa nuestro servicio.
const port = 5000; // Puerto en donde se ejecutará el servicio dentro de nuestra computadora.

require('./models/connection'); // Agrego el archivo de conexión para poder utilizarlo.

// REQUIRES DE MIS RUTAS //
const user_router = require("./routes/UserRoutes");
const post_router = require("./routes/PostRoutes");
const category_router = require("./routes/CategoryRoutes");
const comment_router = require("./routes/CommentRoutes");
const price_router = require("./routes/PriceRoutes");
const rate_router = require("./routes/RateRoutes");
const purchase_router = require("./routes/PurchaseRoutes");
const message_router = require("./routes/MessageRoutes");

// --------------------- //

app.use(bodyParser.json()); // Sirve para mandar objetos y leerlos en formato JSON.

app.listen(port, () => {
    console.log("La aplicación está escuchando al puerto " + port);  // Me dice el puerto que está escuchando el servicio
});

// Mis rutas: //
app.use('/api', user_router);
app.use('/api', post_router);
app.use('/api', category_router);
app.use('/api', comment_router);
app.use('/api', price_router);
app.use('/api', rate_router);
app.use('/api', purchase_router);
app.use('/api', message_router);


// app.get("/api/holamundo", async (req, res) =>{
//     const { query } = req; // destructuring: descompone una variable en varias partes.
//     console.log(query.param1); // con esto le decimos que imprima el parámetro 1.
//     res.send({message: "Mi primer API REST"});
// });