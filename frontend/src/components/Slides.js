import React from 'react'
import Slide from './Slide'
const Slides = ({ciudades}) => {
    const clase={
        carousel: 'slideCity',
        estampa: ''
    }
    return (
        <div className="slideCarrousel">
            {
                ciudades.map(ciudad =>{
                    return(
                        <Slide ciudad={ciudad} clase={clase} key={'s'+ciudad.title}/>
                    )
                })
            }
        </div>
    )
}

export default Slides