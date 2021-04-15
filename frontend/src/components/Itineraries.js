import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import FlightLandIcon from '@material-ui/icons/FlightLand'

const Itineraries = (props) => {
    const [idCity, setIdCity] = useState(null)
    useEffect(() =>{
        setIdCity(props.match.params.id)
    }, [])
    return (
        <div className='itinarie'>
            <Header />
            <div className='city'><h3>UNDER CONSTRUCTION</h3></div>
            <NavLink to='/cities' className='buttonItenerari'>
                    
                    <h3><FlightLandIcon className='logoButtonItenerari' />Cities</h3>
            </NavLink>
            <Footer />
        </div>
    )
}

export default Itineraries