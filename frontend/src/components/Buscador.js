import React from 'react'
import City from './City'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'

const Buscador = ({ciudades, cambiaCiudades, ciudadesAMostrar}) => {
    console.log(ciudades)
    const filtro = (valor) =>{
        const sinBlancos = valor.trim().toLowerCase()
        const ciudadesFiltradas = ciudades.filter(ciudad => {
            const ciudadSinBlancos = ciudad.title.toLowerCase()
            return sinBlancos === ciudadSinBlancos.slice(0,sinBlancos.length).toLowerCase()
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
