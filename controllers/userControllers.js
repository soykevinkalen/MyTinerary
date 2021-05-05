const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userControllers = {

    userSignUp: async (req,res) => {
        let {firstName, lastName, email, password, userImage, country, google} = req.body
        const mailExist = await User.findOne({email})

        let respuesta;
        let error;
        let userToRecord;
        
        password = bcryptjs.hashSync(password, 10)
        if(!mailExist){
            try{
                userToRecord = new User({firstName, lastName, email, password, userImage, country, google})       
                await userToRecord.save()
                const token = jwt.sign({...userToRecord}, process.env.SECRET_OR_KEY)
                respuesta = token  
            }catch{
                error = "There was an error in the user engraving. Retry"
            }
        } else {
            error = 'The mail is already in use'
        }
        if(error){
            return res.json({success: false, errores: {'controllers':error}})
        }
        res.json({
            success: true,
            respuesta: {token: respuesta, userImage: userToRecord.userImage, firstName: userToRecord.firstName, lastName: userToRecord.lastName}
        }) 
    },
    userSignIn: async (req,res) => {
        const {email, password} = req.body
        
        let respuesta;
        let error;
        
        const userExist = await User.findOne({email})
        
        if(userExist){
            const passwordEqual = bcryptjs.compareSync(password, userExist.password)
            if(passwordEqual){
                const token = jwt.sign({...userExist}, process.env.SECRET_OR_KEY)
                respuesta = token 
            }else{
                error = userExist.google ? 'You have to login with google' : 'Incorrect username and/or password'                
            }
        } else {
            error = 'Incorrect username and/or password'
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && {token: respuesta, userImage: userExist.userImage, firstName: userExist.firstName, lastName: userExist.lastName},
            error: error
        })  
    },
    loginForced: (req, res) => {
        res.json({success: true, respuesta: {userImage: req.user.userImage, firstName: req.user.firstName, lastName: req.user.lastName}})
    },
    idUser: (req,res) =>{
        res.json({success: true, respuesta: req.user._id})
    }

}

module.exports = userControllers