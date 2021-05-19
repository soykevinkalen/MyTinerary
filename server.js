require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const passport = require('passport')
const path = require('path')
require('./config/database')
require('./config/passport')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT

app.listen(port, host, () => console.log("App listering on port "+port+" on "+host))