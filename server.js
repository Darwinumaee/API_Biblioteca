require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

const app = express();
app.use(express.json());

//conexion a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error("MongoDB no conectado: ", error));

//iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Estamos conectados al puerto ${PORT}'));