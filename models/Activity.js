const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    idItinerary: {type: mongoose.Types.ObjectId, ref: 'itinerary'}
})

const Activity = mongoose.model('activity',activitySchema)

module.exports = Activity