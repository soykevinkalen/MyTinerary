import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import {NavLink} from 'react-router-dom'

const Header = () =>{
    return(
        <header className='styleFooter'>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='styleFooter d-flex justify-content-between'>
                <div className='logoHeader'>
                    <FlightTakeoffIcon className='logoGral'/>
                    <h2>MyTinerary</h2>
                </div>
                <Dropdown>
                    <Dropdown.Toggle as={Nav.Link} className='d-flex justify-content-center'>
                        <div className='usuario' style={{backgroundImage:'url("../assets/usuario.png")'}}></div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='bg-dark'>
                        <Dropdown.Item className='bg-dark'>
                            <span style={{color:'white'}}>Log In</span>
                        </Dropdown.Item>
                        <Dropdown.Item className='bg-dark'>
                            <span style={{color:'white'}}>Sign Up</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default Header