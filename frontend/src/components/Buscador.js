import React from 'react'
import City from './City'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'

const Buscador = ({ciudades, cambiaCiudades, ciudadesAMostrar}) => {
    const filtro = (valor) =>{
        console.log(valor.length)
        // const sinBlancos = valor.split(' ').join('').toLowerCase()
        const sinBlancos = valor.trim().toLowerCase()
        console.log(sinBlancos)
        const ciudadesFiltradas = ciudades.filter(ciudad => {
            const long = sinBlancos.length
            const ciudadSinBlancos = ciudad.title.toLowerCase()
            return sinBlancos === ciudadSinBlancos.slice(0,long).toLowerCase()
        })
        cambiaCiudades(ciudadesFiltradas)
    }
    return (
        <div className='inputCities'>
            <FlightTakeoffIcon className='logoCities'/>
            <input placeholder='Search cities' onChange={(e) => {filtro(e.target.value)}}></input>
            <City ciudadesFiltradas={ciudadesAMostrar}/>
        </div>
    )
}

export default Buscador
