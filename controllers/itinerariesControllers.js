const Itinerary = require('../models/Itinerary')

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
            const itineraries = await Itinerary.find({idCity: req.params.id}).populate({ path:"comments", populate:{ path:"userId", select:{ "firstName":1 ,"lastName":1,"userImage":1 } } })
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
            console.log(req.user._id)
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$push: {'comments': {...req.body, userId: req.user._id}}}, {new: true}).populate({ path:"comments", populate:{ path:"userId", select:{ "firstName":1 ,"lastName":1,"userImage":1 } } })
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
            if(array.indexOf(String(_id)) != -1){
                
                modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$pull: {'usersLiked':req.user._id}},{new: true})
                res.json({success: false, respuesta: modifiedItinerary}) 
            }else{
                
                modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$push: {'usersLiked': req.user._id}}, {new: true})
                res.json({success: true, respuesta: modifiedItinerary})
            }
            
            
            
            // modifiedItinerary.aggregate([
            //     {
            //         $project:{
            //             item:1,
            //             likes: {$cond: {if: {$isArray: "$usersLiked"}, then: {$size: "$usersLiked"}, else: 0}}
            //         }
            //     }
            // ])
            
        }catch(error){
            res.json({success: false, respuesta: error})           
            console.log(error)
        }
    },
    deslike: async(req, res) => {
        try{
            console.log(req.user._id)
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id:req.params.id},{$pull: {'usersLiked':req.user._id}},{new: true})
            
            // modifiedItinerary.aggregate([
            //     {
            //         $project:{
            //             item:1,
            //             likes: {$cond: {if: {$isArray: "$usersLiked"}, then: {$size: "$usersLiked"}, else: 0}}
            //         }
            //     }
            // ])
            res.json({success: true, respuesta: modifiedItinerary})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})           
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

}
// const result = await Itinerary.findOneAndUpdate({"_id":id_Itinerary ,"comments._id":idComment }, { $set: { "comments.$.comment": comment } },{ new:true }  )
module.exports = itinerariesControllers