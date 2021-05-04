const Activity = require('../models/Activity')

const activitiesControllers = {
    getActivities: async (req,res) =>{
        try{
            const activities = await Activity.find()
            res.json({success: true, respuesta: activities})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    postActivity: async (req, res) => {
        const newActivity = new Activity(req.body)
        try{
            await newActivity.save()
            res.json({success: true, respuesta: newActivity})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    getActivitiesByItinerary: async (req, res) => {
        try{
            const activities = await Activity.find({idItinerary: req.params.id})
            res.json({success: true, respuesta: activities})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    getActivity: async (req, res) => {
        try{
            const activity = await Activity.find({_id: req.params.id})
            res.json({success: true, respuesta: activity})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    putActivity: async (req, res) => {
        try{
            const activity = await Acitivity.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            res.json({success: true, respuesta: activity})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})
            console.log(error)
        }
    },
    deleteActivity: async (req, res) => {
        try{
            const activity = await Activity.findOneAndDelete({_id: req.params.id})
            res.json({success: true, respuesta: activity})
        }catch(error){
            res.json({success: false, respuesta: 'An error has occurred'})
            console.log(error)
        }
    }
}

module.exports = activitiesControllers