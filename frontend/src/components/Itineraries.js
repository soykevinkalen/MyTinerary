import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import { connect } from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Itinerary from './Itinerary'

const Itineraries = (props) => {
    
    const [chosenCity, setChosenCity] = useState([])
        
    useEffect(() =>{
        props.getItineraries(props.match.params.id)
        window.scrollTo(0,0)         
        const city = props.cities.find(city => city._id === props.match.params.id)
        setChosenCity(city)
    },[props.match.params.id])

    if(!chosenCity){
        props.history.push('/cities')
        return null
    }
    return (
        <div className='itinarie'>
            <Header />
            <div className='chosenCity' style={{backgroundImage:`url('${chosenCity.path}')`}}>
                <h3>{chosenCity.city}</h3>
            </div>
            {props.itineraries.length? 
                props.itineraries.map(itinerary => {
                    return(
                        <Itinerary key={itinerary.title} itinerary={itinerary} /> )})
                
                : <div className='under'>
                    <h3>We don't have any itineraries yet, but you can make the first one!</h3>
                    <h3>Or...go back to see more cities!</h3>
                </div>
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