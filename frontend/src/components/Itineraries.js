import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import { connect } from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import axios from 'axios'

const Itineraries = (props) => {
    
    const [chosenCity, setChosenCity] = useState([])
    
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() =>{
        props.getItineraries(props.match.params.id)
        console.log(props.itineraries)
        window.scrollTo(0,0)         
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
                    <div className='itineraryContent'>
                        <h3>{itinerary.title}</h3>
                        <div className='userImage' style={{backgroundImage:`url('${itinerary.authorImage}')`}}></div>
                        <h5>{itinerary.authorName}</h5>
                        <div className='valoration'>
                            <div><FavoriteIcon /> {itinerary.likes} </div>
                            <div> <span>Price: </span>{[...Array(itinerary.price)].map((p,i) => <LocalAtmIcon key={i}/>)}</div>
                            <div><WatchLaterIcon /> {itinerary.duration} <span>hours</span></div>
                        </div>
                        <div className='hashtag'>
                            {
                                itinerary.hashtag.map(hashtag => <p>#{hashtag}</p>)
                            }
                        </div>
                        
                        {isOpen && (<div className='under'><h3>UNDER CONSTRUCTION</h3></div>)}
                        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'view less' : 'view more'}</button>
                    </div>
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