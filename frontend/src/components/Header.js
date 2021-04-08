import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'

const Header = () =>{
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle className="mx-4" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto w-100 d-flex justify-content-between px-4v align-items-center">
                        <Dropdown>
                        <Dropdown.Toggle as={Nav.Link}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='bg-dark'>
                            <Dropdown.Item className='bg-dark'>
                                <Nav.Link className='bg-dark' href="#">Sing In</Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item className='bg-dark'>
                                <Nav.Link className='bg-dark' href="#">Sing Up</Nav.Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        {/* <div className='contenedorLogoNombre'>
                            <div className='logo' style={{backgroundImage:'url("./assets/logo-circle.png")'}}></div>
                            <p>MyTinerary</p>
                        </div> */}
                        <Nav className="d-flex">
                            <Nav.Link href="/">&#127969; Home</Nav.Link>
                            <Nav.Link href="/Cities">&#9992; Cities</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header