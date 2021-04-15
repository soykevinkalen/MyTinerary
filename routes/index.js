const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const validador = require('../config/validador')

const {getCities, postCities} = citiesControllers
router.route('/cities')
.get(getCities)
.post(postCities)
// .post(validador, postCities)
// .post(()=>{

// })

// router.route('/city/:id')
// .get(()=>{

// })
// .put(()=>{
    
// })
// .delete(()=>{
    
// })
module.exports = router