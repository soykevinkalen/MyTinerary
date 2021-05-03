const joi = require('joi')

const validator = (req, res, next) => {
    
    const schema = joi.object({
        
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.base": "Your name should only have letters",
            "string.empty": "Your first name is a required field",
            "any.required": "Your first name is a required field",
            "string.min": "You first name must have at least 2 letters",
            "string.max": "Your name must be up to 20 characters long",
            "string.trim": "Your first name contains unnecessary spaces",
            "string.pattern.base":"Your name should only have letters"
        }),
        lastName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.base": "Your last name should only have letters",
            "string.empty": "Your last name is a required field",
            "any.required": "Your last name is a required field",
            "string.min": "You last name must have at least 2 letters",
            "string.max": "Your last name must be up to 20 characters long",
            "string.trim": "Your last name contains unnecessary spaces",
            "string.pattern.base":"Your last name should only have letters"
        }),
        email: joi.string().required().trim().email().messages({
            "string.base": "Your email should by a text type",
            "string.empty": "Your email is a required field",
            "string.email": "Please write a valid email address",
            "any.required": "Your email is a required field",
            "string.trim": "Your email contains unnecessary spaces"
        }),
        // "/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/" full password (in regexp)
        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/).messages({
            "string.empty": "Your password is a required field",
            "string.pattern.base": "Your password must contain a letter and a number",
            "string.min": "Your passwrod must contain at least 5 characters",
            "any.required": "Your password is a required field",
        }),
        userImage: joi.string().required().trim().messages({
            "string.empty": "Your image direction is a required field",
            "any.required": "Your image direction is a required field",
            "string.trim": "Your image direction contains unnecessary spaces"
        }),
        country: joi.string().required().trim().messages({
            "string.empty": "Your country is a required field",
            "any.required": "Your country is a required field"
        }),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
   
    if (validation.error) {
        return res.json({success: false, errores: validation.error.details})
    }
    next()
}

module.exports = validator