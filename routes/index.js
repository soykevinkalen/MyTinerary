const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const userControllers = require('../controllers/userControllers')
const activitiesControllers = require('../controllers/ativitiesControllers')
const validator = require('../config/validator')
const passport = require('passport')


const {getCities, postCities,getCity,putCity,deleteCity} = citiesControllers
const {updateComment,getItineraries,getItinerariesbyCityId,postItineraries,getItinerary,putItinerary,putComments,likes,deleteItinerary,deleteComment} = itinerariesControllers
const {userSignUp, userSignIn, loginForced} = userControllers
const {getActivities, postActivity, getActivitiesByItinerary, putActivity} = activitiesControllers

router.route('/cities')
.get(getCities)
.post(postCities)

router.route('/cities/:id')
.get(getCity)
.put(putCity)
.delete(deleteCity)

router.route('/itineraries')
.get(getItineraries)
.post(postItineraries)

router.route('/itinerariesByCity/:id')
.get(getItinerariesbyCityId)

router.route('/itineraries/:id')
.get(getItinerary)
.put(putItinerary)
.delete(deleteItinerary)

router.route('/user/signup')
.post(validator, userSignUp)
router.route('/user/signin')
.post(userSignIn)

router.route('/user/loginForced')
.get(passport.authenticate('jwt', {session:false}), loginForced)

router.route('/activities')
.get(getActivities)
.post(postActivity)

router.route('/activities/:id')
.put(putActivity)

router.route('/activitiesByItinerary/:id')
.get(getActivitiesByItinerary)

router.route('/itineraries/like/:id')
.put(passport.authenticate('jwt', {session:false}), likes)
router.route('/itineraries/comments/:id')
.put(passport.authenticate('jwt', {session:false}), putComments)
router.route('/comments/')
.put(passport.authenticate('jwt', {session:false}), deleteComment)
router.route('/commentsUpdate/')
.put(passport.authenticate('jwt', {session:false}), updateComment)

module.exports = router