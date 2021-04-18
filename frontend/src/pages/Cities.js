import React, {Component} from 'react'
import Header from '../components/Header'
import Buscador from '../components/Buscador'
import Footer from '../components/Footer'
import axios from 'axios'
import ReactLoading from 'react-loading'

export default class Cities extends Component{
    state = {
        ciudades: [],
        ciudadesAMostrar: [],
        loading: true
    }
    componentDidMount(){
        window.scrollTo(0,0)
        axios.get('http://localhost:4000/api/cities')
        .then(response => {
                this.setState(
                    {ciudades: response.data.respuesta,
                    ciudadesAMostrar: response.data.respuesta,
                    loading: false})
            })
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