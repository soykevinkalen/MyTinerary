import React from 'react'
// import {NavLink} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const City = ({ciudadesFiltradas}) => {
    return (
        <div className='allCities'>
            {
                ciudadesFiltradas.map(ciudad =>{
                    return(
                        <NavLink to='' className='city' key={'city'+ciudad.title} style={{backgroundImage:`url(${ciudad.src})`}}>
                            <h3>{ciudad.title}</h3>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default City