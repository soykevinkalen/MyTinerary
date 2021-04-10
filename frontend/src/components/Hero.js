import React from 'react'
import Carousel from 'react-elastic-carousel'

const Hero = ({gruposDeCiudades}) =>{
    const ciudades = gruposDeCiudades[Math.floor(Math.random()*gruposDeCiudades.length)];

    return(
        <div className='containerHero bg-dark'>
            <Carousel enableAutoPlay={true} autoPlaySpeed={7000}>
                {ciudades.map(ciudad => <div className='carouselHero' key={'h'+ciudad.title} style={{backgroundImage:`url(${ciudad.src})`}}><h4>{ciudad.title}</h4></div>)}
            </Carousel>
            <div className='containerTexto'>
                <h1>MyTinerary</h1>
                <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            </div>
        </div>
    )
}

export default Hero