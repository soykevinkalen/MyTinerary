const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

const {getCities, postCities,getCity,putCity,deleteCity} = citiesControllers
router.route('/cities')
.get(getCities)
.post(postCities)

router.route('/cities/:id')
.get(getCity)
.put(putCity)
.delete(deleteCity)

module.exports = router