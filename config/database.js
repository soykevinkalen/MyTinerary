const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kevin:kevinbaez@cluster0.htap7.mongodb.net/myTinerary?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>console.log('todo ok'))
.catch(error => console.log(error))