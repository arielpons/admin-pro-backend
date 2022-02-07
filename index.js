const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require('cors')
//Crear el servidor
const app = express();
//Configura CORS
app.use(cors());
//Base de datos
dbConnection();
//rutas
app.get("/", (req,res)=>{
    res.json({
        "ok": true,
        "msg":"hola papa"
    })
});

app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto ' + 3000);
})