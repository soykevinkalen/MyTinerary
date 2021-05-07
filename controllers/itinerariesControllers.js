const Itinerary = require('../models/Itinerary')
const User = require('../models/User')

const itinerariesControllers = {
    getItineraries: async (req,res) =>{
        try{
            const itineraries = await Itinerary.find()
            res.json({respuesta: itineraries})
        }catch(error){
            res.json({respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    getItinerariesbyCityId: async (req, res) =>{
        try{
            const itineraries = await Itinerary.find({idCity: req.params.id}).populate({ path:"comments", populate:{ path:"userId", select:{ "firstName":1 ,"lastName":1,"userImage":1, "email":1 } } })
            res.json({respuesta: itineraries})
        }catch(error){
            res.json({respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    postItineraries: async (req,res) => {
        const itineraryToRecord = new Itinerary(req.body)
        try{
            await itineraryToRecord.save()
            res.json({success: true, response: itineraryToRecord})
        }catch(error){
            res.json({respuesta: 'An error has occurred'})           
            console.log(error)
        }
    },
    getItinerary: async(req,res) =>{
        try{
            const itinerary = await Itinerary.findOne({_id:req.params.id})
            res.json({success: true, respuesta: itinerary})
        }catch(error){
             res.json({success: false, respuesta: 'An error has occurred'})
             console.log(error)
        }
    },
    putItinerary: async(req, res) =>{
        try{
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new: true})
            res.json({success: true, respuesta: modifiedItinerary})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})           
            console.log(error)
        }
    },
    putComments: async(req,res) => {
        try{
            console.log(req)
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$push: {'comments': {...req.body, userId: req.user._id}}}, {new: true}).populate({ path:"comments", populate:{ path:"userId", select:{ "firstName":1 ,"lastName":1,"userImage":1,"email":1} } })
            res.json({success: true, respuesta: modifiedItinerary})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})           
            console.log(error)
        }
    },
    likes: async (req, res) =>{
        const {_id} = req.user
        try{
            const array = req.body.itinerary.usersLiked 
            let modifiedItinerary = null
            let modifiedUser = null
            if(array.indexOf(req.user.email) != -1){
                // modifiedUser = await User.findOneAndUpdate({_id:req.user._id},{$pull: {'itinerariesLiked':req.params.id}},{new: true})
                modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$pull: {'usersLiked':req.user.email}},{new: true})
                // console.log(modifiedUser)
                res.json({success: true, respuesta: modifiedItinerary}) 
            }else{
                // modifiedUser = await User.findOneAndUpdate({_id:req.user._id},{$push: {'itinerariesLiked':req.params.id}}, {new: true})
                modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$push: {'usersLiked': req.user.email}}, {new: true})
                // console.log(modifiedUser)
                res.json({success: true, respuesta: modifiedItinerary})
            }
        }catch(error){
            
            res.json({success: false, respuesta: error})           
            console.log(error)
        }
    },
    deleteItinerary: async(req, res) =>{
        try {
            const erasedItinerary = await Itinerary.findOneAndDelete({_id:req.params.id})
            res.json({respuesta: erasedItinerary})
        }catch(error){
            res.json({respuesta: 'An error has occurred'})           
            console.log(error)
        }
    }
    ,
    deleteComment: async(req,res) =>{
        try{
            console.log(req.body.comment)
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.body.itinerary._id},{$pull: {'comments': {_id: req.body.comment._id, userId: req.body.comment.userId._id }}}, {new: true}).populate({ path:"comments", populate:{ path:"userId", select:{ "firstName":1 ,"lastName":1,"userImage":1, "email":1 } } })
            res.json({success: true, respuesta: modifiedItinerary})
        }catch(error){
            res.json({respuesta: 'An error has occurred'})           
            console.log(error)
        }
    },
    updateComment: async(req, res) => {
        try{
            console.log(req.body.comment)
            const result = await Itinerary.findOneAndUpdate({"_id":req.body.itinerary._id ,"comments._id":req.body.comment._id }, { $set: { "comments.$.comment": req.body.comment.comment } },{ new:true }).populate({ path:"comments", populate:{ path:"userId", select:{ "firstName":1 ,"lastName":1,"userImage":1, "email":1 } } })
            res.json({success: true, respuesta: modifiedItinerary})
            res.json({success: true, respuesta: result})
        }catch(error){
            console.log(error)
        }
    }

}
module.exports = itinerariesControllers