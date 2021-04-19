import React from 'react'
import City from './City'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'

const Buscador = ({ciudades, cambiaCiudades, ciudadesAMostrar}) => {
    const filtro = (valor) =>{
        const valorSinEspacios = valor.trim().toLowerCase()
        const ciudadesFiltradas = ciudades.filter(ciudad => {
            return valorSinEspacios === ciudad.city.toLowerCase().slice(0,valorSinEspacios.length).toLowerCase()
        })
        cambiaCiudades(ciudadesFiltradas)
    }
    return (
        <div className='inputCities'>
            <FlightTakeoffIcon className='logoCities'/>
            <input placeholder='Search cities' onChange={(e) => {filtro(e.target.value)}}></input>
            {ciudadesAMostrar.length ? <City ciudadesFiltradas={ciudadesAMostrar}/>
            : <div className='city notFound'><h2>Looks like the city that you're looking for is not yet...</h2>
            <h2>Try another one!</h2></div> }
        </div>
    )
}

export default Buscador
