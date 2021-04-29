const User = require('../models/User')

const userControllers = {

    userSignUp: async (req,res) => {
        const {firstName, lastName, email, password, userImage, country} = req.body
        const mailExist = await User.findOne({email})

        let respuesta;
        let error;
        
        if(!mailExist){
            try{
                const userToRecord = new User({firstName, lastName, email, password, userImage, country})
                console.log(userToRecord)       
                await userToRecord.save()
                respuesta = userToRecord  
            }catch{
                error = "There was an error in the user engraving. Retry"
            }
        } else {
            error = 'The mail is already in use'
        }

        res.json({
            success: !error ? true : false,
            respuesta: respuesta,
            error: error
        }) 
    },
    userSignIn: async (req,res) => {
        const {email, password} = req.body
        
        let respuesta;
        let error;
        
        const userExist = await User.findOne({email})
        if(userExist && userExist.password === password){
            respuesta = userExist
        } else {
            error = 'Incorrect username and/or password'
        }

        res.json({
            success: !error ? true : false,
            respuesta: respuesta,
            error: error
        }) 
    }

}

module.exports = userControllers