const { Router } = require("express");
const { getTodo, getDocumentos } = require("../controllers/busquedas");
const { validarJWT } = require("../middlewares/validar-jwt");

const  router = Router();

router.get('/:busqueda',validarJWT, getTodo);

router.get('/coleccion/:tabla/:busqueda',validarJWT, getDocumentos);

module.exports = router