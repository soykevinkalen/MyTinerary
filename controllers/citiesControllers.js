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
        const cities = await City.find()
        res.json({respuesta: cities})           
    }
}

module.exports = citiesControllers