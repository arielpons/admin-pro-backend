const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require('cors')
//Crear el servidor
const app = express();
//Configura CORS
app.use(cors());

app.use(express.json());
//Base de datos
dbConnection();
//rutas
app.use('/api/usuarios', require('./routes/usuarios') )
app.use('api/login', require('./routes/auth'))
app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto ' + 3000);
})