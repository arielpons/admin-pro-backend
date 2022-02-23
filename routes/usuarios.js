const { Router } = require("express");
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuario } = require("../controllers/usuarios");
const { check } = require('express-validator');
const { validarCampos } = require("../middlewares/validar.campos");
const { validarJWT, validarRole, validarRoleOMismoUsuario } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/", validarJWT, getUsuarios);

router.post("/",
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
        validarCampos
    ],
    postUsuarios);

router.put("/:id",
    [
        validarJWT,
        validarRoleOMismoUsuario,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
        validarCampos
    ],
    putUsuarios);

router.delete("/:id",
    [
        validarJWT,
        validarRole
    ],
    deleteUsuario)
    
module.exports = router;