import { NavLink } from "react-router-dom"
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'

const CallToAction = () =>{
    return(
        <main className='mainCallToAction bg-dark'>
            <div className='divCallToAction' style={{backgroundImage:'url("/assets/calltoaction.jpg")'}}>
                <p>Let your adventure begin!</p>
                <NavLink to='/cities' className='buttonCallToAction'>
                    <FlightTakeoffIcon className='divLogoCallToAction' />
                    <p className='citiesCallToAction'>Cities</p>
                </NavLink>
            </div>
            
        </main>
    )
}

export default CallToAction