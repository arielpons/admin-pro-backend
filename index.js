require('dotenv').config();
const path = require('path');
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

//Directorio público
app.use(express.static('public'));
//rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'))
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/login', require('./routes/auth'));

// Lo último
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, '.public/index.html' ) );
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})