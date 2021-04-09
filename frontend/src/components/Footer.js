import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () =>{
    return(
        <footer className='footer'>
            <Header />
            <div className="container">
                <h2>Redes sociales</h2>
                <ul className="ul-fb d-flex justify-content-center">
                    <li><NavLink to="" className="facebook"><FacebookIcon fontSize="large" /></NavLink></li>
                    <li><NavLink to="" className="instagram text-center"><InstagramIcon fontSize="large"/></NavLink></li>
                    <li><NavLink to="" className="instagram text-center gitHub"><GitHubIcon fontSize="large"/></NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer