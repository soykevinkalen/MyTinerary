require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const passport = require('passport')

require('./config/database')
require('./config/passport')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT

app.listen(port, host, () => console.log("App listering on port "+port+" on "+host))