import React, {Component} from 'react'
import Header from '../components/Header'
import Buscador from '../components/Buscador'
import Footer from '../components/Footer'
import axios from 'axios'
import ReactLoading from 'react-loading'

export default class Cities extends Component{
    state = {
        // ciudades:
        //  [
        //   {title: 'London', src: '/assets/london.jpg'}, 
        //   {title: 'New York', src: '/assets/newyork.jpg'},
        //   {title: 'Paris', src: '/assets/paris.jpg'},
        //   {title: 'Moscow', src: '/assets/moscow.jpg'},
        //   {title: 'Tokyo', src: '/assets/tokyo.jpg'},
        //   {title: 'Dubai', src: '/assets/dubai.jpg'},
        //   {title: 'Singapore', src: '/assets/singapore.jpg'},
        //   {title: 'Barcelona', src: '/assets/barcelona.jpg'},
        //   {title: 'Los Angeles', src: '/assets/losAngeles.jpg'},
        //   {title: 'Madrid', src: '/assets/madrid.jpg'},
        //   {title: 'Rome', src: '/assets/rome.jpg'},
        //   {title: 'Queenstown', src: '/assets/queenstown.jpg'},
        //   {title: 'Tauranga', src: '/assets/tauranga.jpg'},
        //   {title: 'Buenos Aires', src: '/assets/buenosAires.jpg'},
        //   {title: 'Berlin', src: '/assets/berlin.jpg'}
        // ],
        ciudades: [],
        ciudadesAMostrar: [],
        loading: true
    }
    componentDidMount(){
        // this.cambiaCiudades(this.state.ciudades)
        axios.get('http://localhost:4000/api/cities')
        .then(response => this.setState({ciudades: response.data.respuesta, ciudadesAMostrar: response.data.respuesta , loading: false}))
        .catch(error => console.log(error))
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
                {this.state.loading
                ? <ReactLoading className='preloader' type={'cylon'} color={'white'} height={667} width={'100%'} />
                : <Buscador ciudades={this.state.ciudades} cambiaCiudades={this.cambiaCiudades} ciudadesAMostrar={this.state.ciudadesAMostrar}/>
                }
                <Footer />
            </div>
        )
    }
}