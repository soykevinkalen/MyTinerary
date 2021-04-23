import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import { connect } from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'

import axios from 'axios'

const Itineraries = (props) => {
    
    const [chosenCity, setChosenCity] = useState([])
 
    useEffect(() =>{
        props.getItineraries(props.match.params.id)
        console.log(props.itineraries)
        window.scrollTo(0,0)
        // if (window.performance) {
        //     if (performance.getEntriesByType("navigation")[0].type === 'reload') {
        //         axios.get(`http://localhost:4000/api/cities/${props.match.params.id}`)
        //         .then(response => {
        //             if(response.data.success){
        //                 setChosenCity(response.data.respuesta)
        //             }else{
        //                 alert('error')}})
        //             } 
        // }
         
        const city = props.cities.find(city => city._id === props.match.params.id)
        setChosenCity(city)
        console.log(city)
    },[props.match.params.id])
    return (
        <div className='itinarie'>
            <Header />
            <div className='chosenCity' style={{backgroundImage:`url('${chosenCity.path}')`}}>
                <h3>{chosenCity.city}</h3>
            </div>
            {props.itineraries.length? 
                props.itineraries.map(itinerary => {
                    return(
                        <div className='under'><h3>{itinerary.title}</h3></div>
                    )
                })
                : <div div className='under'><h3>THERE ARE NO ITINERARIES STILL FOR THIS CITY</h3></div>
            }

            <NavLink to='/cities' className='buttonItenerari'>
                    <h3><FlightLandIcon className='logoButtonItenerari' />Cities</h3>
            </NavLink>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
       cities:  state.only.cities,
       itineraries: state.itinerary.itineraries
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    getItineraries: itinerariesActions.getItinerariesByCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)