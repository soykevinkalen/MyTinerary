import React from 'react'
import Header from './Header'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import RoomIcon from '@material-ui/icons/Room';

const Footer = () =>{
    const handleRedirect = (url) => window.open(url,'_blank')
    return(
        <footer className='footer'>
            <Header />
            <div className='deepFooter'>
                <div className='location'>
                    <h4><RoomIcon style={{fontSize:"4vw"}} />location: El jagüel, Buenos Aires, Argentina</h4>
                </div>
                <div className="containerSocial">
                    <h2>Social media</h2>
                    <ul className="ul-fb d-flex justify-content-center">
                        <li><button onClick={ (e) => { e.preventDefault(); handleRedirect('https://www.facebook.com/Mejores-Viajes-1499652030265629')}} className="facebook"><FacebookIcon className="redesSociales" style={{fontSize:"5vw"}} /></button></li>
                        <li><button onClick={ (e) => { e.preventDefault(); handleRedirect('https://www.instagram.com/mejoresviajesok/')}} className="instagram text-center"><InstagramIcon className="redesSociales" style={{fontSize:"5vw"}}/></button></li>
                        <li><button onClick={ (e) => { e.preventDefault(); handleRedirect('https://github.com/soykevinkalen')}} className="text-center  gitHub"><GitHubIcon className="redesSociales" style={{fontSize:"5vw", color:'white'}}/></button></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer