import React from 'react'
import City from './City'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import { connect } from "react-redux"
import citiesActions from '../redux/actions/citiesActions'

const Buscador = (props) => {
    return (
        <div className='inputCities'>
            <FlightTakeoffIcon className='logoCities'/>
            <input placeholder='Search cities' onChange={(e) => {props.filtro((e.target.value))}}></input>
            {props.citiesFilter.length ? <City />
            : <div className='city notFound'><h2>We don't have any city that matches your search!</h2>
            <h2>Try another one!</h2></div> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
       citiesFilter:  state.city.citiesFilter
    }
}

const mapDispatchToProps = {
    filtro: citiesActions.filterValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
