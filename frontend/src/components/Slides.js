import React from 'react'

const Slides = ({ciudades}) => {
    return (
        <div className="slideCarrousel">
            {
                ciudades.map(ciudad =>{
                    return(
                        <div key={ciudad.title} className='slideCity' style={{backgroundImage:`url(${ciudad.src})`}}>
                            <h3>{ciudad.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slides