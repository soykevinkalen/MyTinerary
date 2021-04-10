import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'


const Header = () =>{
    return(
        <header className='styleFooter'>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='styleFooter'>
                <Navbar.Toggle className="mx-4" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto w-100 d-flex justify-content-between px-4v align-items-center">
                        <Dropdown className='d-flex'>
                        <Dropdown.Toggle as={Nav.Link}>
                            <div className='usuario' style={{backgroundImage:'url("../assets/usuario.png")'}}></div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='bg-dark'>
                            <Dropdown.Item className='bg-dark'>
                               <span style={{color:'white'}}>Sing In</span>
                            </Dropdown.Item>
                            <Dropdown.Item className='bg-dark'>
                               <span style={{color:'white'}}>Sing Up</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Nav className="d-flex justify-content-center align-items-center">
                            <Nav.Link href="/"><HomeIcon fontSize="large" /> Home</Nav.Link>
                            <Nav.Link href="/Cities"><FlightTakeoffIcon fontSize="large"/> Cities</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header