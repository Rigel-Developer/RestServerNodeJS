 const { response, request } = require('express')


const usuariosGet = (req = request,res = response)=>{
    //para obtener parametros opcionales en la url se 
    //envian con ? 
    const query = req.query

            res.json({
                message:'solicitud GET - controller',
                query 

            })
        
        }

const usuariosPost = (req = request,res = response)=>{
    //con req se obtiene la informacion
    //enviada por el cliente
            const { nombre } = req.body
            res.json({
                message:'solicitud POST - controller',
                nombre
            })
        }

const usuariosPut = (req,res)=>{
    //para obtener el parametro se utiliza el mismo nombre
    //dado en la variable de URL -> user.routes
    const id = req.params.id
            res.json({
                message:'solicitud PUT - controller',
                id
            })
        }
const usuariosDelete = (req,res)=>{
            res.json({
                message:'solicitud DELETE - controller'
            })
        }



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}













