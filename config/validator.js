const joi = require('joi')

const validator = (req, res, next) => {
    //      El schema
    console.log("validador")
    const schema = joi.object({
        
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        lastName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        email: joi.string().required().trim().email(),
        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/),
        userImage: joi.string().required().trim(),
        country: joi.string().required().trim()
    })
//      La verificación
    const validation = schema.validate(req.body, {abortEarly: false})
//      Respuesta o el next
    console.log(validation.error)
    if (validation.error) {
        return res.json({success: false, errores: validation.error})
    }
    next()
}

module.exports = validator