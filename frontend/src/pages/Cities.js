import React, {Component} from 'react'
import Header from '../components/Header'
import Buscador from '../components/Buscador'
import Footer from '../components/Footer'

export default class Cities extends Component{
    state = {
        ciudades:
         [
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
        ],
        ciudadesAMostrar: []
    }
    componentDidMount(){
        this.cambiaCiudades(this.state.ciudades)
    }
    
    cambiaCiudades = (ciudadesFiltradas) =>{
        this.setState({
            ciudadesAMostrar: ciudadesFiltradas
        })
    }
    
    render(){
        return(
            <div>
                <Header />
                <Buscador ciudades={this.state.ciudades} cambiaCiudades={this.cambiaCiudades} ciudadesAMostrar={this.state.ciudadesAMostrar}/>
                <Footer />
            </div>
        )
    }
}