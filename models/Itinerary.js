const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: {type: String, required: true},
    authorName: {type: String, required: true},
    authorImage: {type: String, required: true},
    hashtag: [{type: String}],
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    // likes: {type: Number, default: 0},
    comments: [{userId: {type: mongoose.Types.ObjectId, ref: 'user'}, comment: {type: String}}],
    usersLiked: [{type: String}],
    idCity: {type: mongoose.Types.ObjectId, ref: 'city'}
})

const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports = Itinerary