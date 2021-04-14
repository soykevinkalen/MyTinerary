const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// Hardcodeo la información
var ciudades=[
          {title: 'London', src: '/assets/london.jpg'}, 
          {title: 'New York', src: '/assets/newyork.jpg'},
          {title: 'Paris', src: '/assets/paris.jpg'},
          {title: 'Moscow', src: '/assets/moscow.jpg'},
          {title: 'Tokyo', src: '/assets/tokyo.jpg'},
          {title: 'Dubai', src: '/assets/dubai.jpg'},
          {title: 'Singapore', src: '/assets/singapore.jpg'},
          {title: 'Barcelona', src: '/assets/barcelona.jpg'},
          {title: 'Los Angeles', src: '/assets/losAngeles.jpg'},
          {title: 'Madrid', src: '/assets/madrid.jpg'},
          {title: 'Rome', src: '/assets/rome.jpg'},
          {title: 'Queenstown', src: '/assets/queenstown.jpg'},
          {title: 'Tauranga', src: '/assets/tauranga.jpg'},
          {title: 'Buenos Aires', src: '/assets/buenosAires.jpg'},
          {title: 'Berlin', src: '/assets/berlin.jpg'}
        ]

app.get('/api/cities', (req,res) =>{
    res.json({respuesta: ciudades})
})

app.listen(4000, () => console.log("App listering on port 4000"))