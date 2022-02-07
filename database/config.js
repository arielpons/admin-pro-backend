const mongoose = require('mongoose');


const dbConnection = async ()=>{
    try{
    await mongoose.connect('mongodb+srv://mean:mean@cluster0.zwwvc.mongodb.net/test');
    console.log("DB online");
    }catch(error){
    console.log(error);
    throw new Error("Error en la conexion de DDBB")
    }
}

module.exports = {
    dbConnection
}