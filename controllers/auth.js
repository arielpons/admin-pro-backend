const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");
const Usuario = require("../models/usuario");


const login = async(req, res = response) =>{
    const {email, password} = req.body;

    try {
        //Verificar email
        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
            res.status(404).json({
                ok:false,
                msg: 'El email y/o contraseña es inválido'
            })
        }
        //Verificar contraseña
        const validPassword = bcryptjs.compareSync( password, usuarioDB.password );
        if (!validPassword){
            res.status(400).json({
                ok:false,
                msg:'El email y/o contraseña es inválido'
            })
        }
        //Generar el TOKEN - JWT
        const token = await generarJWT( usuarioDB.id );
        res.json({
            ok: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}