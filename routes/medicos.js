const { Router } = require("express");

const { check } = require('express-validator');
const { validarCampos } = require("../middlewares/validar.campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const { deleteMedico, putMedico, postMedico, getMedico, getMedicoById } = require("../controllers/medicos");

const router = Router();

router.get("/", validarJWT, getMedico);

router.post("/",
    [
        validarJWT,
        check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
        check('hospital', 'El hospital del hospital es necesario').isMongoId(),
        validarCampos,
    ],
    postMedico);

router.put("/:id",
    [
        validarJWT,
        check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
        check('hospital', 'El hospital del hospital es necesario').isMongoId(),
        validarCampos,
    ],
    putMedico);

router.delete("/:id",
    validarJWT,
    deleteMedico)

router.get("/:id",
    validarJWT,
    getMedicoById)

module.exports = router;