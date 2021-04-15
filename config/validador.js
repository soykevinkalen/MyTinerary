const validador = (req,res) =>{
    if(req.body.nombre === ''){
        return res.json({success: false, error:'no se puede'})
    // el frontend captura la respuesta false y lanza un error
    }
    next()
    
}

module.exports = validador