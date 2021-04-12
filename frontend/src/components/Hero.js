import React from 'react'
import Carousel from 'react-elastic-carousel'
import Slide from './Slide'
const Hero = ({gruposDeCiudades}) =>{
    const ciudades = gruposDeCiudades[Math.floor(Math.random()*gruposDeCiudades.length)];
    const clase = {
        estampa: 'stamp',
        carousel: 'carouselHero'
    }
    return(
        <div className='containerHero bg-dark'>
            <Carousel className='carousel' enableAutoPlay={true} autoPlaySpeed={10000}>
            {ciudades.map(ciudad =>{ 
                return(
                    <Slide ciudad={ciudad} clase={clase} key={'h'+ciudad.title}/>
                )})}
            </Carousel>
            <div className='containerTexto'>
                <h1>MyTinerary</h1>
                <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            </div>
        </div>
    )
}

export default Hero