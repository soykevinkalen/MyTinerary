import React from 'react'
import {NavLink} from 'react-router-dom'

const City = ({ciudadesFiltradas}) => {
    return (
        <div className='allCities'>
            {
                ciudadesFiltradas.map(ciudad =>{
                    return(
                        
                        <NavLink to={`/itineraries/${ciudad._id}`} className='city' key={'city'+ciudad.city} style={{backgroundImage:`url(${ciudad.path})`}}>
                            <h3>{ciudad.city}</h3>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default City