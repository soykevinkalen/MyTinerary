import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import axios from "axios"

const Itineraries = (props) => {
    const [chosenCity, setChosenCity] = useState([])
    useEffect(() =>{
        axios.get(`http://localhost:4000/api/cities/${props.match.params.id}`)
        .then(response =>  setChosenCity(response.data.respuesta))
        
    },[])
    return (
        <div className='itinarie'>
            <Header />
            <div className='chosenCity' style={{backgroundImage:`url('${chosenCity.path}')`}}></div>
            <div className='under'><h3>UNDER CONSTRUCTION</h3></div>
            <NavLink to='/cities' className='buttonItenerari'>
                    <h3><FlightLandIcon className='logoButtonItenerari' />Cities</h3>
            </NavLink>
            {/* <Footer /> */}
        </div>
    )
}

export default Itineraries