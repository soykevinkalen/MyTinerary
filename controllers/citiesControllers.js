const City = require('../models/City')

const citiesControllers = {
    getCities: async (req,res) =>{
        const cities = await City.find()
        res.json({respuesta: cities})
    },
    postCities: async (req,res) => {
        const {city, country, path} = req.body
        const cityToRecord = new City({city: city, country: country, path:path})
        await cityToRecord.save()
        res.json({respuesta: cityToRecord})           
    },
    getCity: async(req,res) =>{
        const city = await City.findOne()
        res.json({respuesta: city})
    },
    putCity: async(req, res) =>{
        const id = req.params.id
        const modifiedCity = await City.findOneAndUpdate({_id:id}, {...req.body}, {new: true})
        res.json({respuesta: modifiedCity})
    },
    deleteCity: async(req, res) =>{
        const id = req.params.id
        try {
            const erasedCity = await City.findOneAndDelete({_id:id})
            res.json({respuesta: erasedCity})
        }catch(error){
            res.json({respuesta: 'Ha ocurrido un error'})
        }
    }

}

module.exports = citiesControllers