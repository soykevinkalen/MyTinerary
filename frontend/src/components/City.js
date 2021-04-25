import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux"

const City = (props) => {
    return (
        <div className='allCities'>
            {
                props.cities.map(ciudad =>{
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

const mapStateToProps = state => {
    return {
       cities:  state.city.citiesFilter
    }
}

export default connect(mapStateToProps, null)(City)