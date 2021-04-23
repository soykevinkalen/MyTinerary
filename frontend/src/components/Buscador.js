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
            {props.cities.length ? <City/>
            : <div className='city notFound'><h2>Looks like the city that you're looking for is not yet...</h2>
            <h2>Try another one!</h2></div> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
       cities:  state.only.citiesFilter
    }
}

const mapDispatchToProps = {
    filtro: citiesActions.filterValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
