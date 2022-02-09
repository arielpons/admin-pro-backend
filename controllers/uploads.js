const path = require('path');
const { response } = require("express");
const { v4:uuidv4 } = require('uuid');
const { actualizarImagen } = require("../helpers/actualizar-imagen");
const fs  = require('fs');

const fileUpload = (req, res = response)=>{
    const tipo = req.params.tipo;
    const id = req.params.id;
    const tiposValidos = ['hospitales', 'medicos','usuarios'];
    if (!tiposValidos.includes(tipo)){
        return res.status(400).json({
            ok:false,
            msg:'No es un médico,usuario u hospital (tipo)'
        });
    }
    //Validad que exista un archivo
    if (!req.files){
        return res.status(400).json({
            ok:false,
            msg:'No hay ningún archivo'
        });
    }
    // Procesar la imagen
    const file = req.files.imagen;
    const nombreCortado = file.name.split('.');
    const extensionArchivo = nombreCortado[nombreCortado.length - 1];
    
    // Valida extension
    const extensionesValidas = ['png','jpg','jpeg', 'gif'];
    if (!extensionesValidas.includes(extensionArchivo)){
        return res.status(400).json({
            ok:false,
            msg:'No es una extensión permitida'
        });
    }
    //Generar el nombre del archivo
    const nombreArchivo = `${ uuidv4()}.${extensionArchivo}`;
    
    //Path para guardar la imagen
    var path =  `./uploads/${tipo}/${nombreArchivo}`;
    
    //Mover la imagen
    file.mv(path, (err)=>{
        if (err){
            return res.status(500).json({
                ok:false,
                msg:'Error al mover la imagen'
            })
        }
    
    //Actualizar base de datos
    actualizarImagen( tipo, id, nombreArchivo);
        res.json({
            ok:true,
            msg:'Archivo subido',
            nombreArchivo
        })
    }) 
}

const retornaImagen = (req, res = response) =>{
    const tipo = req.params.tipo;
    const foto = req.params.foto;
    const pathImg = path.join(__dirname, `../uploads/${tipo}/${foto}`);
    //Imagen por defecto
    if(fs.existsSync(pathImg)){
        res.sendFile(pathImg);
    } else{
        const pathImg = path.join(__dirname, `../uploads/no-image.png`);
        res.sendFile(pathImg);
    }
    
}
module.exports = {
    fileUpload,
    retornaImagen
}