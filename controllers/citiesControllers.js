const City = require('../models/City')

const citiesControllers = {
    getCities: async (req,res) =>{
        const cities = await City.find()
        res.json({respuesta: cities})
    },
    postCities: async (req,res) => {
        const {city, country, path} = req.body
        const cityToRecord = new City({city: city, country: country, path:path})
        try{
            await cityToRecord.save()
            res.json({respuesta: cityToRecord})           
        }catch(error){
            res.json({respuesta: 'An error has occurred'})           
            console.log(error)
        }
    },
    getCity: async(req,res) =>{
        try{
            const city = await City.findOne({_id:req.params.id})
            console.log(city)
            res.json({success: true, respuesta: city})
        }catch(error){
             res.json({success: false, respuesta: 'An error has occurred'})
             console.log(error)
        }
    },
    putCity: async(req, res) =>{
        try{
            const modifiedCity = await City.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new: true})
            res.json({respuesta: modifiedCity})
        }catch(error){
            console.log(error)
        }
    },
    deleteCity: async(req, res) =>{
        try {
            const erasedCity = await City.findOneAndDelete({_id:req.params.id})
            res.json({respuesta: erasedCity})
        }catch(error){
            console.log(error)
        }
    }

}

module.exports = citiesControllers