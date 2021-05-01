import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const Header = (props) =>{
    const [dropOpen, setDropOpen] = useState(false)
    const picUser = props.userLogged ? props.userLogged.userImage : '../assets/usuario.png'
    return(
        <header className='styleFooter'>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='styleFooter d-flex justify-content-between'>
                <NavLink className='text-decoration-none' to="/">
                    <div className='logoHeader'>
                        <FlightTakeoffIcon className='logoGral'/>
                        <h2>MyTinerary</h2>
                    </div>
                </NavLink>
    
                {/* <NavDropdown className='usuario navLink bg-dark d-flex flex-column' style={{backgroundImage:`url(${picUser})`}} id="collasible-nav-dropdown">
                    {!props.userLogged && (
                        <> 
                            <NavLink className='navLink ms-2' to="/signin">Sign In</NavLink>
                            <NavLink className='navLink ms-2' to="/signup">Sign Up</NavLink>
                        </>
                    )}
                    {props.userLogged && <button onClick={props.logOutUser}>Log Out</button>}
                </NavDropdown> */}
                <div className='d-flex usuario' style={{backgroundImage:`url(${picUser})`}}>
                    <div className='dropContent'>
                        {dropOpen && (<div className='navDrop navLink bg-dark d-flex flex-column' id="collasible-nav-dropdown">
                            {!props.userLogged && (
                                <> 
                                    <NavLink className='navLink ms-2' to="/signin">Sign In</NavLink>
                                    <NavLink className='navLink ms-2' to="/signup">Sign Up</NavLink>
                                </>
                            )}
                            {props.userLogged && <h6 className='h6' onClick={props.logOutUser}>Log Out</h6>}
                        </div>)}
                        <ArrowDropDownIcon className='iconDrop' onClick={() => setDropOpen(!dropOpen)}/>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto d-flex justify-content-end px-4v align-items-center">
                        <Nav className="d-flex justify-content-center align-items-center">
                            <NavLink className='navLink me-2' to="/"><HomeIcon fontSize="large" /> Home</NavLink>
                            <NavLink className='navLink' to="/cities"><FlightLandIcon fontSize="large"/> Cities</NavLink>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

const mapStateToProps = state =>{
    return {
        userLogged: state.auth.userLogged
    }
}
const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)