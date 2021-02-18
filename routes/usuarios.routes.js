const {Router  } = require('express')
const router = Router()
const { usuariosGet,usuariosPost,usuariosPut,usuariosDelete} = require('../controllers/usuarios.controllers')


        router.get('/',usuariosGet)
        //se utiliza : para recibir un
//parametro enviador por la URL
        router.put('/:id',usuariosPut)

        router.post('/',usuariosPost)

        router.delete('/',usuariosDelete)

module.exports = router
