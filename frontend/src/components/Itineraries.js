import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import { connect } from "react-redux"
import itinerariesActions from '../redux/actions/itinerariesActions'
import Itinerary from './Itinerary'

const Itineraries = (props) => {
    
    const [chosenCity, setChosenCity] = useState([])
    useEffect(() =>{
        window.scrollTo(0,0)
            props.getItinerariesByCity(props.match.params.id)
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
            {props.itinerariesByCity.length? 
                props.itinerariesByCity.map(itinerary => {
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
       cities:  state.city.cities,
       itinerariesByCity: state.itinerary.itinerariesByCity
    }
}

const mapDispatchToProps = {
    getItinerariesByCity: itinerariesActions.getItinerariesByCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)