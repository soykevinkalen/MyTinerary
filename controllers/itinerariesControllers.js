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
            const itineraries = await Itinerary.find({idCity: req.params.id})
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

module.exports = itinerariesControllers